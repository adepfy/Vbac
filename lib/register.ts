import 'server-only';
import { isDbConfigured, query, execute } from './db';

// ใช้โครงสร้างเดียวกับระบบเดิม (บันทึกลงตาราง register)

export const LEVELS = { '1': 'ปวช.', '2': 'ปวส.' } as const;
export const TERMS = ['ภาคปกติ', 'ภาคพิเศษ'] as const;
export const GRADES = { m3: 'ม.3', m6: 'ม.6', ksn: 'กศน.', other: 'อื่นๆ' } as const;
export const CHANNELS = {
  web: 'Website', facebook: 'Facebook', line: 'LINE', friend: 'เพื่อนแนะนำ',
  advers: 'ป้ายโฆษณา', guide: 'แนะแนวการศึกษา', other: 'อื่นๆ',
} as const;

export type RegisterInput = {
  promotion: 0 | 1;
  level: keyof typeof LEVELS;
  major: string;
  term: string;
  grade: keyof typeof GRADES;
  gradeOther: string;
  school: string;
  schoolRoom: string;
  fname: string;
  sname: string;
  nickname: string;
  address: string;
  village: string;
  soi: string;
  road: string;
  subdistrict: string;
  district: string;
  province: string;
  zipcode: string;
  tel1: string;
  tel2: string;
  email: string;
  facebook: string;
  lineId: string;
  reference: string;
  channel: keyof typeof CHANNELS;
};

export type FieldErrors = Partial<Record<keyof RegisterInput, string>>;

const str = (fd: FormData, k: string, max = 255) => String(fd.get(k) ?? '').trim().slice(0, max);

export function parseRegister(fd: FormData): { data?: RegisterInput; errors: FieldErrors } {
  const e: FieldErrors = {};
  const level = str(fd, 'level') as RegisterInput['level'];
  const grade = str(fd, 'grade') as RegisterInput['grade'];
  const channel = (str(fd, 'channel') || 'web') as RegisterInput['channel'];
  const data: RegisterInput = {
    promotion: str(fd, 'promotion') === '1' ? 1 : 0,
    level,
    major: str(fd, 'major'),
    term: str(fd, 'term'),
    grade,
    gradeOther: str(fd, 'grade_other'),
    school: str(fd, 'school'),
    schoolRoom: str(fd, 'school_room'),
    fname: str(fd, 'fname'),
    sname: str(fd, 'sname'),
    nickname: str(fd, 'nickname'),
    address: str(fd, 'address', 100),
    village: str(fd, 'village', 100),
    soi: str(fd, 'soi', 100),
    road: str(fd, 'road'),
    subdistrict: str(fd, 'subdistrict'),
    district: str(fd, 'district'),
    province: str(fd, 'province'),
    zipcode: str(fd, 'zipcode', 5).replace(/\D/g, ''),
    tel1: str(fd, 'tel1', 20).replace(/[^\d+]/g, ''),
    tel2: str(fd, 'tel2', 20).replace(/[^\d+]/g, ''),
    email: str(fd, 'email'),
    facebook: str(fd, 'facebook'),
    lineId: str(fd, 'line_id'),
    reference: str(fd, 'reference'),
    channel,
  };
  if (!(level in LEVELS)) e.level = 'กรุณาเลือกระดับชั้นที่สมัคร';
  if (!data.major) e.major = 'กรุณาเลือกสาขา';
  if (!(TERMS as readonly string[]).includes(data.term)) e.term = 'กรุณาเลือกภาคเรียน';
  if (!(grade in GRADES)) e.grade = 'กรุณาเลือกระดับชั้นปัจจุบัน';
  if (grade === 'other' && !data.gradeOther) e.gradeOther = 'กรุณาระบุ';
  if (!(channel in CHANNELS)) e.channel = 'กรุณาเลือกช่องทาง';
  if (!data.fname) e.fname = 'กรุณากรอกชื่อจริง';
  if (!data.sname) e.sname = 'กรุณากรอกนามสกุล';
  if (!data.address) e.address = 'กรุณากรอกที่อยู่';
  if (data.zipcode && data.zipcode.length !== 5) e.zipcode = 'รหัสไปรษณีย์ 5 หลัก';
  if (!/^0\d{8,9}$/.test(data.tel1)) e.tel1 = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง';
  if (data.tel2 && !/^0\d{8,9}$/.test(data.tel2)) e.tel2 = 'เบอร์โทรศัพท์ไม่ถูกต้อง';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'อีเมลไม่ถูกต้อง';
  return Object.keys(e).length ? { errors: e } : { data, errors: {} };
}

function bangkokNow() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 19).replace('T', ' ');
}

/** บันทึกลงตาราง register (คอลัมน์เดียวกับระบบเดิม) */
export async function saveRegistration(d: RegisterInput): Promise<void> {
  if (!isDbConfigured()) throw new Error('DB_NOT_CONFIGURED');
  const row: Record<string, string | number> = {
    promotion: d.promotion,
    level_id: Number(d.level),
    major_id: d.major,
    term: d.term,
    grade: d.grade,
    grade_other: d.grade === 'other' ? d.gradeOther : '',
    school_name: d.school,
    school_room: d.schoolRoom,
    fname: d.fname,
    sname: d.sname,
    nickname: d.nickname,
    address: d.address,
    village: d.village,
    soi: d.soi,
    road: d.road,
    subdistrict: d.subdistrict,
    district: d.district,
    province: d.province,
    postcode: Number(d.zipcode || 0),
    telephone1: d.tel1,
    telephone2: d.tel2,
    email: d.email,
    facebook: d.facebook,
    line: d.lineId,
    reference: d.reference,
    date_register: bangkokNow(),
    channel: d.channel,
  };
  const insert = async (r: Record<string, string | number>) => {
    const cols = Object.keys(r);
    await execute(
      `INSERT INTO register (${cols.map((c) => `\`${c}\``).join(', ')}) VALUES (${cols.map(() => '?').join(', ')})`,
      cols.map((c) => r[c]),
    );
  };
  try {
    await insert(row);
  } catch (err: unknown) {
    // ฐานข้อมูลบางชุดยังไม่มีคอลัมน์ channel / grade_other — ลองใหม่โดยไม่ใส่
    if ((err as { code?: string }).code === 'ER_BAD_FIELD_ERROR') {
      const { channel: _c, grade_other: _g, ...rest } = row;
      await insert(rest);
    } else {
      throw err;
    }
  }
}

export { query };
