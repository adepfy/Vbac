import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { getAbout, getStaff, type StaffMember } from '@/lib/content';

export const metadata: Metadata = {
  title: 'ผู้บริหารและบุคลากร — VBAC',
  description: 'คณะผู้บริหาร หัวหน้างาน อาจารย์ผู้สอนและเจ้าหน้าที่ วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา (VBAC)',
};

// ดึงข้อมูลจากตาราง personal ใหม่ทุก 5 นาที
export const revalidate = 300;

// รูปของระบบเดิมเป็นการ์ดที่มีชื่อ-ตำแหน่งพิมพ์อยู่ในรูปแล้ว จึงใส่ชื่อไว้ใน alt (สำหรับโปรแกรมอ่านหน้าจอ) ไม่แสดงซ้ำใต้รูป
function StaffGrid({ people, label }: { people: StaffMember[]; label: string }) {
  if (!people.length) return <p className="st-empty">ยังไม่มีข้อมูล{label}</p>;
  return (
    <ul className="st-grid">
      {people.map((p, i) => (
        <li key={`${p.photo}-${i}`}>
          <a href={p.photo} target="_blank" rel="noopener noreferrer" className="st-card card" aria-label={p.name ? `ดูรูป ${p.name}` : `ดูรูป${label} คนที่ ${i + 1}`}>
            <img src={p.photo} alt={p.name ? `${p.name}${p.position ? ` — ${p.position}` : ''}` : `${label} VBAC`} loading="lazy" width={472} height={708} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default async function StaffPage() {
  const [about, staff] = await Promise.all([getAbout(), getStaff()]);
  const total = staff.executives.length + staff.deputies.length + staff.supervisors.length + staff.teachers.length;
  const nav = [
    ['executives', 'คณะผู้บริหาร', staff.executives.length],
    ['deputies', 'รองผู้อำนวยการและที่ปรึกษา', staff.deputies.length],
    ['supervisors', 'หัวหน้างาน', staff.supervisors.length],
    ['teachers', 'อาจารย์ผู้สอน / เจ้าหน้าที่', staff.teachers.length],
    ...(staff.structure ? [['structure', 'โครงสร้างการบริหาร', 0] as const] : []),
  ] as const;

  return (
    <div className="page-root">
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero
          title="ผู้บริหารและบุคลากร"
          subtitle={`ทีมผู้บริหาร อาจารย์ และเจ้าหน้าที่ VBAC ${total} ท่าน พร้อมดูแลนักศึกษาทุกคน`}
          crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'เกี่ยวกับวิทยาลัย', href: '/vbac_next/about' }, { label: 'บุคลากร' }]}
        />

        <nav aria-label="หมวดบุคลากร" className="ab-subnav">
          <div className="ab-wrap ab-chips">
            {nav.map(([id, label, n]) => (
              <a key={id} href={`#${id}`} className="ab-chip">
                {label}
                {n ? <span className="st-count">{n}</span> : null}
              </a>
            ))}
          </div>
        </nav>

        {/* คณะผู้บริหาร */}
        <section aria-labelledby="executives" className="ab-section">
          <SectionTitle id="executives" accent="ผู้บริหาร">คณะ</SectionTitle>
          <div className="ab-wrap">
            <ul className="st-exec">
              {staff.executives.map((p, i) => (
                <li key={`${p.name}-${i}`} className={`st-exec-card card${i === 0 ? ' st-exec-lead' : ''}`}>
                  <div className="st-exec-photo">
                    {p.photo ? <img src={p.photo} alt={p.name} loading={i === 0 ? 'eager' : 'lazy'} /> : <span aria-hidden="true">VBAC</span>}
                  </div>
                  <div className="st-exec-text">
                    <span>{p.position}</span>
                    <strong>{p.name}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="deputies" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ right: '-60px', top: '20px', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="deputies" accent="และที่ปรึกษา">รองผู้อำนวยการ</SectionTitle>
          <div className="ab-wrap"><StaffGrid people={staff.deputies} label="รองผู้อำนวยการ" /></div>
        </section>

        <section aria-labelledby="supervisors" className="ab-section">
          <SectionTitle id="supervisors" accent="งาน">หัวหน้า</SectionTitle>
          <div className="ab-wrap"><StaffGrid people={staff.supervisors} label="หัวหน้างาน" /></div>
        </section>

        <section aria-labelledby="teachers" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ left: '-60px', top: '20px', transform: 'scaleX(-1)', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="teachers" accent=" / เจ้าหน้าที่">อาจารย์ผู้สอน</SectionTitle>
          <div className="ab-wrap"><StaffGrid people={staff.teachers} label="อาจารย์ / เจ้าหน้าที่" /></div>
        </section>

        {staff.structure && (
          <section aria-labelledby="structure" className="ab-section">
            <SectionTitle id="structure" accent="การบริหาร">โครงสร้าง</SectionTitle>
            <div className="ab-wrap">
              <a href={staff.structure} target="_blank" rel="noopener noreferrer" className="st-structure card">
                <img src={staff.structure} alt="แผนผังโครงสร้างการบริหารวิทยาลัย VBAC" loading="lazy" />
              </a>
              <p className="st-hint">กดที่รูปเพื่อดูขนาดเต็ม</p>
            </div>
          </section>
        )}
      </main>
      <Footer about={about} />
    </div>
  );
}
