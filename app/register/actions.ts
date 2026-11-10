'use server';

import { redirect } from 'next/navigation';
import { parseRegister, saveRegistration, type FieldErrors } from '@/lib/register';

export type RegisterState = { errors: FieldErrors; message?: string; values?: Record<string, string> };

export async function submitRegistration(_prev: RegisterState, formData: FormData): Promise<RegisterState> {
  // กันสแปมบอท: ช่องนี้ซ่อนไว้ คนจริงจะไม่กรอก
  if (String(formData.get('website') || '')) return { errors: {} };

  const values = Object.fromEntries(
    [...formData.entries()].filter(([k]) => !k.startsWith('$') && k !== 'website').map(([k, v]) => [k, String(v)]),
  );
  const { data, errors } = parseRegister(formData);
  if (!data) return { errors, values, message: 'กรุณาตรวจสอบข้อมูลที่มีเครื่องหมาย * ให้ครบถ้วน' };

  try {
    await saveRegistration(data);
  } catch (err) {
    console.error('[register] save failed:', err);
    return { errors: {}, values, message: 'ขออภัย ระบบบันทึกข้อมูลขัดข้อง กรุณาลองใหม่อีกครั้ง หรือติดต่อฝ่ายแนะแนวทางโทรศัพท์' };
  }
  redirect(`/register/complete?level=${data.level}`);
}
