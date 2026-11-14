import 'server-only';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

// ไฟล์รูป/วิดีโอของระบบเดิม (images/banner, images/idolls, images/Teacher, news ...)
// MEDIA_BASE_URL:
//   /legacy                     -> ก๊อปโฟลเดอร์ images และ news ของเว็บเดิมไว้ที่ public/legacy/
//   http://localhost/vbac_web   -> ดึงจากเว็บเดิมที่รันอยู่
const BASE = (process.env.MEDIA_BASE_URL || 'https://www.vbac.ac.th').replace(/\/+$/, '');
const IS_LOCAL = BASE.startsWith('/');

function encodePath(p: string) {
  return p.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/');
}

export function mediaUrl(path: string): string {
  return `${BASE}/${encodePath(path)}`;
}

/**
 * คืน URL ของไฟล์ ถ้าไฟล์อยู่ใน public/ (โหมด /legacy) แต่หาไม่เจอ จะคืน null
 * ใช้กันรูปเสีย กรณีฐานข้อมูลอ้างถึงไฟล์ที่ไม่มีแล้ว
 */
export function mediaUrlIfExists(path: string): string | null {
  if (!path) return null;
  if (IS_LOCAL) {
    const file = join(process.cwd(), 'public', BASE, path.replace(/^\/+/, ''));
    if (!existsSync(file)) return null;
  }
  return mediaUrl(path);
}

/**
 * เหมือน mediaUrlIfExists แต่ถ้าไม่มีไฟล์ในเครื่อง (โหมด /legacy) จะชี้ไปที่เว็บจริงแทน
 * ใช้กับไฟล์เอกสาร/รูปประกอบที่ต้องมีลิงก์เสมอ เช่น PDF ของหน้า กยศ.
 */
export function mediaUrlOrLive(path: string): string {
  return mediaUrlIfExists(path) ?? `https://www.vbac.ac.th/${encodePath(path)}`;
}
