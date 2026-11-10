import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import Cta from '@/components/Cta';
import { getAbout, getContactPersons, getExecutives } from '@/lib/content';
import {
  FOUNDED_BE, MAP_EMBED, MAP_LINK, colors, facts, history, missions, pillars, symbol, travel, tree, vision,
} from '@/lib/about-content';

export const metadata: Metadata = {
  title: 'เกี่ยวกับวิทยาลัย — VBAC',
  description: 'ประวัติ วิสัยทัศน์ พันธกิจ สัญลักษณ์ ผู้บริหาร และการเดินทางมาวิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา (VBAC)',
};

// ดึงข้อมูลจากฐานข้อมูลใหม่ทุก 5 นาที
export const revalidate = 300;

const NAV = [
  ['history', 'ประวัติ'],
  ['vision', 'วิสัยทัศน์'],
  ['mission', 'พันธกิจ'],
  ['symbol', 'สัญลักษณ์'],
  ['identity', 'สี & ต้นไม้'],
  ['executives', 'ผู้บริหาร'],
  ['contact', 'การเดินทาง'],
] as const;

export default async function AboutPage() {
  const [about, executives, contacts] = await Promise.all([getAbout(), getExecutives(), getContactPersons()]);
  const now = new Date();
  const yearBE = now.getFullYear() + 543;
  const years = yearBE - FOUNDED_BE;

  return (
    <div style={{ fontFamily: "var(--font-kanit), 'Helvetica Neue', Helvetica, Arial, sans-serif", color: '#120A0B', background: '#FFFFFF', width: '100%', overflowX: 'clip' }}>
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero
          title="เกี่ยวกับวิทยาลัย"
          subtitle={`วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา (VBAC) สร้างคนคุณภาพมากว่า ${years} ปี — College for The NEXT Generation`}
          crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'เกี่ยวกับวิทยาลัย' }]}
        />

        {/* แถบเมนูย่อย */}
        <nav aria-label="หัวข้อในหน้านี้" className="ab-subnav">
          <div className="ab-wrap ab-chips">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="ab-chip">{label}</a>
            ))}
          </div>
        </nav>

        {/* ประวัติ */}
        <section aria-labelledby="history" className="ab-section">
          <SectionTitle id="history" accent="วิทยาลัย">ประวัติ</SectionTitle>
          <div className="ab-wrap ab-split">
            <div className="ab-col">
              <span className="ab-kicker">ก่อตั้งปี พ.ศ. {FOUNDED_BE}</span>
              <p className="ab-lead">{history.intro}</p>
              <p className="ab-body">{history.campus}</p>
              <div className="ab-facts">
                <div className="ab-fact ab-fact-red">
                  <strong>{years}</strong>
                  <span>ปี แห่งการสร้างคน</span>
                </div>
                {facts.map((f) => (
                  <div key={f.label} className="ab-fact">
                    <strong>{f.value}</strong>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <figure className="ab-photo">
              <img src="/vbac_next/images/grad.jpg" alt="บัณฑิต VBAC ในพิธีรับประกาศนียบัตร" />
              <figcaption>พิธีรับประกาศนียบัตร VBAC</figcaption>
            </figure>
          </div>
          <div className="ab-wrap ab-levels">
            {history.levels.map((lv) => (
              <div key={lv.level} className="ab-level">
                <div className="ab-level-head">
                  <span className="ab-badge">{lv.level}</span>
                  <span>{lv.full}</span>
                </div>
                <ul>
                  {lv.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* วิสัยทัศน์ + ปรัชญา */}
        <section aria-labelledby="vision" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ right: '-60px', top: '20px', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="vision" accent=" & ปรัชญา">วิสัยทัศน์</SectionTitle>
          <div className="ab-wrap">
            <blockquote className="ab-vision">
              <span aria-hidden="true" className="ab-quote">“</span>
              {vision}
            </blockquote>
            <div className="ab-pillars">
              {pillars.map((p) => (
                <div key={p.label} className="ab-pillar">
                  <span>{p.label}</span>
                  <strong>“{p.text}”</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* พันธกิจ */}
        <section aria-labelledby="mission" className="ab-section">
          <SectionTitle id="mission" accent=" Mission">พันธกิจ</SectionTitle>
          <div className="ab-wrap ab-missions">
            {missions.map((m, i) => (
              <div key={m} className="ab-mission card">
                <span className="ab-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* สัญลักษณ์ */}
        <section aria-labelledby="symbol" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ left: '-60px', top: '20px', transform: 'scaleX(-1)', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="symbol" accent="ประจำวิทยาลัย">สัญลักษณ์</SectionTitle>
          <div className="ab-wrap ab-split ab-symbol">
            <div className="ab-logo">
              <img src="/vbac_next/images/logo.png" alt="ตราสัญลักษณ์วิทยาลัย VBAC" />
            </div>
            <div className="ab-col">
              <p className="ab-body">{symbol.intro}</p>
              <dl className="ab-parts">
                {symbol.parts.map((p) => (
                  <div key={p.name}>
                    <dt>{p.name}</dt>
                    <dd>{p.meaning}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* สี + ต้นไม้ */}
        <section aria-labelledby="identity" className="ab-section">
          <SectionTitle id="identity" accent=" & ต้นไม้ประจำวิทยาลัย">สี</SectionTitle>
          <div className="ab-wrap ab-identity">
            {colors.map((c) => (
              <div key={c.name} className="ab-color card">
                <span className="ab-swatch" style={{ background: c.hex }} aria-hidden="true" />
                <div>
                  <strong>{c.name}</strong>
                  <span>{c.meaning}</span>
                </div>
              </div>
            ))}
            <div className="ab-tree card">
              <span className="ab-tree-icon" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#12873A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7" /><path d="M7 15h10l-2.5-3.5H16L12 5l-4 6.5h1.5z" /><path d="M9 8.5L12 4l3 4.5" /></svg>
              </span>
              <div>
                <span className="ab-kicker">ต้นไม้ประจำวิทยาลัย</span>
                <strong className="ab-tree-name">“{tree.name}”</strong>
                <p className="ab-body">{tree.text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ผู้บริหาร (จากฐานข้อมูล personal) */}
        <section aria-labelledby="executives" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ right: '-60px', top: '20px', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="executives" accent="วิทยาลัย">ผู้บริหาร</SectionTitle>
          <div className="ab-wrap ab-people">
            {executives.map((p, i) => (
              <figure key={`${p.name}-${i}`} className="ab-person card">
                <div className="ab-person-photo">
                  {p.photo ? <img src={p.photo} alt={p.name} loading="lazy" /> : <span aria-hidden="true">{p.name.replace(/^(ดร\.|นายแพทย์|นาย|นางสาว|นาง)/, '').slice(0, 1)}</span>}
                </div>
                <figcaption>
                  <strong>{p.name}</strong>
                  <span>{p.position}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ติดต่อ & การเดินทาง (ที่อยู่/เบอร์จากตาราง about, ผู้ติดต่อจากตาราง personal) */}
        <section aria-labelledby="contact" className="ab-section">
          <SectionTitle id="contact" accent=" & การเดินทาง">ติดต่อ</SectionTitle>
          <div className="ab-wrap ab-split ab-contact">
            <div className="ab-col">
              <div className="ab-info card">
                <h3>วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา</h3>
                <p className="ab-body" style={{ whiteSpace: 'pre-line' }}>{about.address}</p>
                <p className="ab-body">
                  โทร <a href={`tel:${about.telephone.split(/[-–]/)[0].replace(/\s+/g, '')}`}>{about.telephone}</a>
                </p>
                <div className="ab-social">
                  <a href={about.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href={about.line} target="_blank" rel="noopener noreferrer">LINE</a>
                  <a href={about.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
              <ul className="ab-travel">
                {travel.map((t) => (
                  <li key={t.mode}>
                    <strong>{t.mode}</strong>
                    <span>{t.lines}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ab-map">
              <iframe src={MAP_EMBED} title="แผนที่วิทยาลัย VBAC" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="ab-maplink">เปิดใน Google Maps →</a>
            </div>
          </div>
          {contacts.length > 0 && (
            <div className="ab-wrap">
              <h3 className="ab-subhead">ผู้ประสานงาน</h3>
              <div className="ab-contacts">
                {contacts.map((c, i) => (
                  <div key={`${c.name}-${i}`} className="ab-contact-card card">
                    {c.photo && <img src={c.photo} alt={c.name} loading="lazy" />}
                    <div>
                      <strong>{c.name}</strong>
                      <span>{c.position}</span>
                      {c.tel && <a href={`tel:${c.tel.replace(/[^\d+]/g, '')}`}>{c.tel}</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <Cta />
      </main>
      <Footer about={about} />
    </div>
  );
}
