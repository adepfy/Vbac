import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import RegisterForm from '@/components/RegisterForm';
import { ADMISSION_HOTLINES, getAbout, getMajorOptions } from '@/lib/content';

export const metadata: Metadata = {
  title: 'สมัครเรียนออนไลน์ — VBAC',
  description: 'สมัครเรียน ปวช. / ปวส. วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา (VBAC) ออนไลน์ ใช้เวลาไม่ถึง 5 นาที',
};

export const revalidate = 300;

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ level?: string; promotion?: string }> }) {
  const sp = await searchParams;
  const [about, majors] = await Promise.all([getAbout(), getMajorOptions()]);
  const level = sp.level === '2' ? '2' : '1';
  const promotion = sp.promotion === '1';

  return (
    <div style={{ fontFamily: "var(--font-kanit), 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#120A0B', background: '#FFFFFF', width: '100%', overflowX: 'clip' }}>
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero
          title={promotion ? 'สมัครเรียนออนไลน์ (โปรโมชั่น)' : 'สมัครเรียนออนไลน์'}
          subtitle="สมัคร ปวช. / ปวส. ได้ภายใน 5 นาที เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันข้อมูล"
          crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'สมัครเรียน' }]}
        />
        <div className="rg-layout">
          <div className="rg-main">
            <RegisterForm majors={majors} defaultLevel={level} promotion={promotion} />
          </div>
          <aside className="rg-side" aria-label="ติดต่อสมัครเรียน">
            <div className="rg-sidecard rg-sidecard-red">
              <strong>สมัครด่วน! โทรหาครูแนะแนว</strong>
              <ul>
                {ADMISSION_HOTLINES.map((h) => (
                  <li key={h.tel}>
                    <span>{h.name}</span>
                    <a href={`tel:${h.tel.replace(/\D/g, '')}`}>{h.tel}</a>
                  </li>
                ))}
              </ul>
              <a className="rg-line" href={about.line} target="_blank" rel="noopener noreferrer">แอด LINE สอบถาม</a>
            </div>
            <div className="rg-sidecard">
              <strong>เตรียมข้อมูลก่อนสมัคร</strong>
              <ul className="rg-checklist">
                <li>ชื่อโรงเรียนเดิม และระดับชั้นปัจจุบัน</li>
                <li>ที่อยู่และเบอร์โทรที่ติดต่อได้</li>
                <li>เบอร์โทรผู้ปกครอง</li>
              </ul>
            </div>
            <div className="rg-sidecard">
              <strong>สอบถามวิทยาลัย</strong>
              <p>โทร <a href={`tel:${about.telephone.split(/[-–]/)[0].replace(/\s+/g, '')}`}>{about.telephone}</a></p>
              <p><a href="/vbac_next/about#contact">แผนที่และการเดินทาง →</a></p>
            </div>
          </aside>
        </div>
      </main>
      <Footer about={about} />
    </div>
  );
}
