import 'server-only';
import { isDbConfigured, query } from './db';
import { mediaUrlIfExists } from './media';
import * as fallback from '@/data/site';
import type { Event, Idol, Program } from '@/data/site';

// ดึงข้อมูลจากฐานข้อมูลเดิม ถ้ายังไม่ได้ตั้งค่าฐานข้อมูลหรือเชื่อมต่อไม่ได้ จะใช้ข้อมูลตัวอย่างใน data/site.ts แทน

async function safe<T>(label: string, fn: () => Promise<T>, fb: T): Promise<T> {
  if (!isDbConfigured()) return fb;
  try {
    return await fn();
  } catch (err) {
    console.error(`[db] ${label} failed:`, err);
    return fb;
  }
}

/* ---------- about (ข้อมูลติดต่อ) ---------- */
export type About = {
  address: string;
  telephone: string;
  facebook: string;
  line: string;
  messenger: string;
  youtube: string;
  termEdu?: number;
  yearEdu?: number;
};
const ABOUT_FALLBACK: About = {
  address: '[ที่อยู่วิทยาลัย]',
  telephone: '[เบอร์โทรศัพท์]',
  facebook: '#facebook',
  line: '#line',
  messenger: '#messenger',
  youtube: '#youtube',
};
export function getAbout(): Promise<About> {
  return safe('about', async () => {
    const rows = await query<Record<string, string | number>>('SELECT * FROM about WHERE id = 1 LIMIT 1');
    const r = rows[0];
    if (!r) return ABOUT_FALLBACK;
    return {
      address: String(r.address || '').trim() || ABOUT_FALLBACK.address,
      telephone: String(r.telephone || '').trim() || ABOUT_FALLBACK.telephone,
      facebook: String(r.facebook || '') || ABOUT_FALLBACK.facebook,
      line: String(r.line || '') || ABOUT_FALLBACK.line,
      messenger: String(r.messenger || '') || ABOUT_FALLBACK.messenger,
      youtube: String(r.youtube || '') || ABOUT_FALLBACK.youtube,
      termEdu: Number(r.term_edu) || undefined,
      yearEdu: Number(r.year_edu) || undefined,
    };
  }, ABOUT_FALLBACK);
}

/* ---------- banner (สไลด์หน้าแรก) ---------- */
export type Banner = { img: string; link: string; alt: string };
const BANNER_FALLBACK: Banner[] = [
  { img: '/vbac_next/images/poster.jpg', link: '', alt: 'VBAC รับสมัคร ปวช./ปวส. 8 สาขา' },
  { img: '/vbac_next/images/hero.jpg', link: '', alt: 'นักศึกษา VBAC ทำงานกลุ่มในห้องสมุด' },
  { img: '/vbac_next/images/act1.jpg', link: '', alt: 'นักศึกษาแข่งขัน E-Sports' },
];
export function getBanners(): Promise<Banner[]> {
  return safe('banner', async () => {
    const rows = await query<{ banner_img: string; banner_link: string }>(
      'SELECT banner_img, banner_link FROM banner ORDER BY banner_order ASC',
    );
    const list = rows
      .map((r) => ({ img: mediaUrlIfExists(`images/banner/${r.banner_img}`), link: r.banner_link || '' }))
      .filter((b): b is { img: string; link: string } => Boolean(b.img))
      .map((b, i) => ({ ...b, alt: `แบนเนอร์ประชาสัมพันธ์ ${i + 1}` }));
    return list.length ? list : BANNER_FALLBACK;
  }, BANNER_FALLBACK);
}

/* ---------- major (หลักสูตร) ---------- */
const MAJOR_COLORS: Record<string, string> = {
  IT: '#1F4FD1', BC: '#7C3AED', DBT: '#7C3AED', CG: '#C2410C', DG: '#C2410C', MK: '#BE185D',
  TOUR: '#0F766E', AC: '#15803D', LOG: '#B45309', GM: '#C8102E', MG: '#C8102E',
};
const PALETTE = ['#1F4FD1', '#7C3AED', '#C2410C', '#BE185D', '#0F766E', '#15803D', '#B45309', '#C8102E'];
function cleanMajorName(name: string) {
  return name.replace(/^สาขา(วิชา)?/, '').replace(/\s+/g, ' ').trim();
}
export function getPrograms(): Promise<Program[]> {
  return safe('major', async () => {
    const rows = await query<{ major_name: string; major_name_en: string; major_name_short: string; major_link: string }>(
      'SELECT major_name, major_name_en, major_name_short, major_link FROM major WHERE major_status = 1 ORDER BY id ASC',
    );
    if (!rows.length) return fallback.programs;
    return rows.map((r, i) => {
      const code = (r.major_name_short || '').trim().toUpperCase();
      return {
        code,
        th: cleanMajorName(r.major_name),
        en: (r.major_name_en || '').trim() || code,
        color: MAJOR_COLORS[code] || PALETTE[i % PALETTE.length],
        slug: r.major_link || '',
      };
    });
  }, fallback.programs);
}

/* ---------- calendar (ปฏิทินกิจกรรม) ---------- */
const TH_MONTH = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
const TH_MONTH_FULL = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
type CalRow = { calendar_date_start: string; calendar_date_end: string; calendar_day: number; calendar_header: string };
const CAL_COLS = 'calendar_date_start, calendar_date_end, calendar_day, calendar_header';
function bangkokToday() {
  return new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);
}
export function thaiDate(ymd: string, full = false) {
  const [y, m, d] = ymd.slice(0, 10).split('-').map(Number);
  if (!y || !m || !d) return '';
  return `${d} ${(full ? TH_MONTH_FULL : TH_MONTH)[m - 1]} ${y + 543}`;
}
export type Calendar = { label: string; events: Event[] };
const CAL_FALLBACK: Calendar = {
  label: 'พฤศจิกายน 2569',
  events: fallback.events.map((e) => ({ ...e, month: 'พ.ย.' })),
};
export function getCalendar(): Promise<Calendar> {
  return safe('calendar', async () => {
    const today = bangkokToday();
    const [y, m] = today.split('-').map(Number);
    // เหมือนระบบเดิม: กิจกรรมของเดือนนี้ — ถ้าไม่มี ใช้กิจกรรมที่กำลังจะมาถึง แล้วค่อยใช้ล่าสุด
    let rows = await query<CalRow>(
      `SELECT ${CAL_COLS} FROM calendar WHERE YEAR(calendar_date_start) = ? AND MONTH(calendar_date_start) = ? ORDER BY calendar_date_start ASC`,
      [y, m],
    );
    let label = `${TH_MONTH_FULL[m - 1]} ${y + 543}`;
    if (!rows.length) {
      rows = await query<CalRow>(`SELECT ${CAL_COLS} FROM calendar WHERE calendar_date_start >= ? ORDER BY calendar_date_start ASC LIMIT 6`, [today]);
      label = 'กิจกรรมที่กำลังจะมาถึง';
    }
    if (!rows.length) {
      rows = (await query<CalRow>(`SELECT ${CAL_COLS} FROM calendar ORDER BY calendar_date_start DESC LIMIT 6`)).reverse();
      label = 'กิจกรรมล่าสุด';
    }
    if (!rows.length) return CAL_FALLBACK;
    const events = rows.slice(0, 8).map((r) => {
      const start = String(r.calendar_date_start).slice(0, 10);
      const end = String(r.calendar_date_end || start).slice(0, 10);
      const multi = Number(r.calendar_day) > 1 && end > start;
      const past = (multi ? end : start) < today;
      return {
        day: multi && start.slice(0, 7) === end.slice(0, 7) ? `${Number(start.slice(8, 10))}–${Number(end.slice(8, 10))}` : String(Number(start.slice(8, 10))),
        month: TH_MONTH[Number(start.slice(5, 7)) - 1],
        title: (r.calendar_header || '').trim(),
        bg: past ? '#FBF8F6' : '#FFFFFF',
        fg: past ? '#8A7F7B' : fallback.ACCENT,
        opacity: past ? '0.7' : '1',
        status: past ? 'ผ่านไปแล้ว' : start <= today ? 'วันนี้' : 'กำลังจะมาถึง',
      };
    });
    return { label, events };
  }, CAL_FALLBACK);
}

/* ---------- news (ข่าวสาร VBAC NEWS) ---------- */
export type NewsItem = { id: number; type: 'img' | 'vdo' | string; title: string; summary: string; body: string; img: string; video: string; date: string };
type NewsRow = { id: number; news_type: string; news_header: string; news_file: string; news_description: string; news_create: string; news_update: string };
const NEWS_COLS = 'id, news_type, news_header, news_file, news_description, news_create, news_update';
function mapNews(r: NewsRow): NewsItem {
  const body = (r.news_description || '').replace(/\r\n/g, '\n').trim();
  return {
    id: Number(r.id),
    type: r.news_type,
    title: (r.news_header || '').trim(),
    summary: body.replace(/\s+/g, ' ').slice(0, 140),
    body,
    img: (r.news_type === 'img' && mediaUrlIfExists(`news/${r.news_file}`)) || '/vbac_next/images/act1.jpg',
    video: (r.news_type === 'vdo' && mediaUrlIfExists(`vdo/${r.news_file}`)) || '',
    date: String(r.news_create || r.news_update).slice(0, 10),
  };
}
export function getLatestNews(limit = 4): Promise<NewsItem[]> {
  return safe('news', async () => {
    const rows = await query<NewsRow>(`SELECT ${NEWS_COLS} FROM news ORDER BY news_update DESC LIMIT ?`, [limit]);
    return rows.map(mapNews);
  }, []);
}
export function getAllNews(): Promise<NewsItem[]> {
  return safe('newsAll', async () => (await query<NewsRow>(`SELECT ${NEWS_COLS} FROM news ORDER BY news_update DESC`)).map(mapNews), []);
}
export function getNewsById(id: number): Promise<NewsItem | null> {
  return safe('newsById', async () => {
    const rows = await query<NewsRow>(`SELECT ${NEWS_COLS} FROM news WHERE id = ? LIMIT 1`, [id]);
    return rows[0] ? mapNews(rows[0]) : null;
  }, null);
}

/* ---------- idolls (ศิษย์เก่า VBAC IDOLS) ---------- */
export function getIdols(): Promise<Idol[]> {
  return safe('idolls', async () => {
    const rows = await query<{ idolls_path: string }>('SELECT idolls_path FROM idolls ORDER BY idolls_order ASC LIMIT 6');
    const list = rows
      .map((r) => mediaUrlIfExists(`images/idolls/${r.idolls_path}`))
      .filter((u): u is string => Boolean(u))
      .map((img, i) => ({ img, name: `ศิษย์เก่า VBAC คนที่ ${i + 1}`, role: '' }));
    return list.length ? list : fallback.idols;
  }, fallback.idols);
}

/* ---------- personal (ผู้บริหาร / ผู้ติดต่อ) ---------- */
export type Person = { name: string; position: string; photo: string; tel?: string };
type PersonalRow = { personal_status: string; personal_name: string; personal_position: string; personal_file: string; personal_tel: string };

// ในฐานข้อมูลเดิม ผู้บริหารระดับสูงไม่มีชื่อเก็บไว้ (ชื่ออยู่ในหน้าเว็บ) จึงใช้ชื่อสำรองตามตำแหน่ง
const EXEC_ORDER = ['president', 'vicepresident1', 'vicepresident2', 'director'] as const;
const EXEC_FALLBACK: Record<(typeof EXEC_ORDER)[number], { name: string; position: string }> = {
  president: { name: 'ดร.พิมพ์อนงค์ สินภัทรบดี', position: 'ประธานกรรมการบริหาร / ผู้รับใบอนุญาต' },
  vicepresident1: { name: 'นายสยามรัศมิ์ สินภัทรบดี', position: 'รองประธานกรรมการบริหาร' },
  vicepresident2: { name: 'นายแพทย์สินธุ์พัทธ์ สินภัทรบดี', position: 'รองประธานกรรมการบริหาร' },
  director: { name: 'นางสุมนมาศ วุฒิสง่าธรรม', position: 'ผู้อำนวยการ' },
};
const clean = (s: string) => (s || '').replace(/\s+/g, ' ').trim();

export function getExecutives(): Promise<Person[]> {
  const fb: Person[] = EXEC_ORDER.map((k) => ({ ...EXEC_FALLBACK[k], photo: '' }));
  return safe('executives', async () => {
    const rows = await query<PersonalRow>(
      `SELECT personal_status, personal_name, personal_position, personal_file, personal_tel FROM personal
       WHERE personal_status IN ('president','vicepresident1','vicepresident2','director') ORDER BY personal_order ASC`,
    );
    return EXEC_ORDER.map((k) => {
      const r = rows.find((x) => x.personal_status === k);
      return {
        name: clean(r?.personal_name || '') || EXEC_FALLBACK[k].name,
        position: clean(r?.personal_position || '') || EXEC_FALLBACK[k].position,
        photo: (r?.personal_file && mediaUrlIfExists(`images/Teacher/${r.personal_file}`)) || '',
      };
    });
  }, fb);
}

/** ผู้ติดต่อ (รองผู้อำนวยการ) — ระบบเดิมแสดงในหน้าแผนที่การเดินทาง */
export function getContactPersons(): Promise<Person[]> {
  return safe('contacts', async () => {
    const rows = await query<PersonalRow>(
      "SELECT personal_status, personal_name, personal_position, personal_file, personal_tel FROM personal WHERE personal_status = 'deputypresident' ORDER BY personal_id ASC",
    );
    return rows.map((r) => ({
      name: clean(r.personal_name),
      position: clean(r.personal_position),
      photo: (r.personal_file && mediaUrlIfExists(`images/Teacher/${r.personal_file}`)) || '',
      tel: clean(r.personal_tel) || undefined,
    }));
  }, []);
}

/* ---------- ตัวเลือกสาขาในใบสมัคร (ใช้ชื่อเต็มตามระบบเดิม เพราะตาราง register เก็บชื่อสาขา) ---------- */
export type Option = { value: string; label: string };
const MAJOR_OPTIONS_FALLBACK: Option[] = [
  'สาขาวิชาเทคโนโลยีสารสนเทศ', 'สาขาวิชาคอมพิวเตอร์ธุรกิจเทคโนโลยีธุรกิจดิจิทัล', 'สาขาวิชาคอมพิวเตอร์กราฟิกและดิจิทัลกราฟิก',
  'สาขาวิชาการตลาด', 'สาขาวิชาการท่องเที่ยว', 'สาขาวิชาการบัญชี', 'สาขาวิชาโลจิสติกส์และซับพลายเซน', 'สาขาวิชาการจัดการทั่วไป',
].map((v) => ({ value: v, label: v.replace(/^สาขาวิชา/, '') }));
export function getMajorOptions(): Promise<Option[]> {
  return safe('majorOptions', async () => {
    const rows = await query<{ major_name: string }>('SELECT major_name FROM major WHERE major_status = 1 ORDER BY id ASC');
    if (!rows.length) return MAJOR_OPTIONS_FALLBACK;
    return rows.map((r) => {
      const name = r.major_name.replace(/\s+/g, ' ').trim();
      const full = /^สาขา/.test(name) ? name.replace(/^สาขา(?!วิชา)/, 'สาขาวิชา') : `สาขาวิชา${name}`;
      return { value: full, label: full.replace(/^สาขาวิชา/, '') };
    });
  }, MAJOR_OPTIONS_FALLBACK);
}

/** ครูแนะแนว/เบอร์สมัครเรียนด่วน (ระบบเดิมเขียนไว้ในหน้าเว็บ) */
export const ADMISSION_HOTLINES = [
  { name: 'อ.เกื้อ', tel: '089-111-7758' },
  { name: 'อ.สนิ', tel: '089-115-2525' },
  { name: 'อ.มิ้น', tel: '099-291-6253' },
];
