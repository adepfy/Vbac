import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { ADMISSION_HOTLINES, getAbout } from '@/lib/content';

export const metadata: Metadata = { title: 'สมัครเรียนเรียบร้อย — VBAC', robots: { index: false } };

export default async function RegisterComplete({ searchParams }: { searchParams: Promise<{ level?: string }> }) {
  const sp = await searchParams;
  const about = await getAbout();
  const level = sp.level === '2' ? 'ปวส.' : 'ปวช.';
  return (
    <div style={{ fontFamily: "var(--font-kanit), 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#120A0B', background: '#FFFFFF', width: '100%', overflowX: 'clip' }}>
      <Header />
      <main>
        <PageHero title="สมัครเรียนเรียบร้อย" crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'สมัครเรียน', href: '/vbac_next/register' }, { label: 'เรียบร้อย' }]} />
        <section className="rg-done">
          <div className="rg-done-icon" aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          </div>
          <h2>ขอบคุณที่ไว้วางใจ VBAC</h2>
          <p>เราได้รับใบสมัครระดับ <b>{level}</b> ของคุณแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันข้อมูลการสมัครเรียนโดยเร็ว</p>
          <p className="rg-done-sub">หากต้องการติดต่อด่วน: {ADMISSION_HOTLINES.map((h, i) => (
            <span key={h.tel}>{i > 0 && ' · '}{h.name} <a href={`tel:${h.tel.replace(/\D/g, '')}`}>{h.tel}</a></span>
          ))}</p>
          <div className="rg-done-actions">
            <a href="/vbac_next/" className="rg-btn">กลับสู่หน้าแรก</a>
            <a href={about.line} target="_blank" rel="noopener noreferrer" className="rg-btn rg-btn-line">แอด LINE วิทยาลัย</a>
          </div>
        </section>
      </main>
      <Footer about={about} />
    </div>
  );
}
