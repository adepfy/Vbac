# VBAC Website (Next.js)

เว็บไซต์หน้าแรกวิทยาลัยวิบูลย์บริหารธุรกิจ (VBAC) สร้างจากดีไซน์ index7 ด้วย Next.js 15 (App Router) + TypeScript

## เริ่มใช้งาน

ต้องมี Node.js 18.18 ขึ้นไป (แนะนำ 20 หรือ 22)

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## เชื่อมต่อฐานข้อมูลเดิม

เว็บนี้อ่านข้อมูลจากฐานข้อมูล MySQL ของระบบเดิม (`admin_vbacacth_db`) โดยตรง แบบอ่านอย่างเดียว

1. คัดลอก `.env.example` เป็น `.env.local`
2. ใส่ค่า `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` (ดูได้จาก `vbac_web/application/config/database.php`)
3. ตั้ง `MEDIA_BASE_URL` ให้ชี้ไปที่เว็บเดิม เพื่อดึงรูปจากโฟลเดอร์ `images/` ของระบบเดิม
4. ถ้ายังไม่ได้ตั้งค่า หรือเชื่อมต่อไม่ได้ เว็บจะแสดงข้อมูลตัวอย่างแทน (ไม่ล่ม)

ข้อมูลจะถูกดึงใหม่ทุก 5 นาที (`revalidate = 300`)

## หน้าที่ทำแล้ว

| หน้า | URL | ข้อมูลจากฐานข้อมูล |
|---|---|---|
| หน้าแรก | `/` | สไลด์แบนเนอร์ (`banner`), ข้อมูลติดต่อ (`about`) |
| เกี่ยวกับวิทยาลัย | `/about` | ที่อยู่/เบอร์/โซเชียล (`about`), ผู้บริหารและผู้ประสานงาน (`personal`) |
| สมัครเรียน | `/register` (`?level=2` = ปวส., `?promotion=1` = โปรโมชั่น) | รายชื่อสาขา (`major`) · **บันทึกใบสมัครลงตาราง `register`** |
| สมัครเรียนเรียบร้อย | `/register/complete` | — |

## Build สำหรับขึ้นเซิร์ฟเวอร์จริง

```bash
npm run build
npm start
```

## โครงสร้าง

```
app/
  layout.tsx        ฟอนต์ Kanit (next/font), title, description
  page.tsx          หน้าแรก — เรียง section ตามลำดับ
  globals.css       สไตล์กลาง, แอนิเมชันสไลด์ / ลายกราฟิก
components/         1 section = 1 ไฟล์
  Header, Hero (สไลด์แบนเนอร์), CategoryCards, Programs, Showcase,
  Update, Idols, Bento, Quotients (7Q), Faq, Network, Cta, Footer,
  FloatingContact (ปุ่มติดต่อลอยด้านขวา)
lib/db.ts           เชื่อมต่อ MySQL (mysql2)
lib/content.ts      ฟังก์ชันดึงข้อมูลจากฐานข้อมูล + ข้อมูลสำรอง
lib/about-content.ts เนื้อหาหน้าเกี่ยวกับเรา (ระบบเดิมเขียนไว้ในหน้าเว็บ ไม่ได้อยู่ในฐานข้อมูล)
data/site.ts        ข้อมูลหลักสูตร กิจกรรม ศิษย์เก่า FAQ — แก้เนื้อหาที่นี่
public/images/      รูปภาพ (วางรูปจริงทับชื่อเดิมได้เลย)
```

## สิ่งที่ยังต้องเติม

- ข้อความในวงเล็บ `[ ... ]` เช่น ที่อยู่ เบอร์โทร คำตอบ FAQ บางข้อ มหาวิทยาลัยที่ 6
- ลิงก์ปลายทาง (ตอนนี้เป็น `#...`) เช่น หน้าสมัครเรียน, LINE, Facebook, TikTok, YouTube
- รูปภาพความละเอียดสูง (ตอนนี้ตัดมาจากภาพหน้าจอเว็บเดิม)
