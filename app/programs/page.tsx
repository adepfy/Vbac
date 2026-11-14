import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { getAbout } from '@/lib/content';
import { PROGRAMS } from '@/lib/programs';

export const metadata: Metadata = {
  title: 'หลักสูตร 8 สาขาวิชา ปวช. / ปวส. — VBAC',
  description:
    'หลักสูตร ปวช. และ ปวส. 8 สาขาวิชา: เทคโนโลยีสารสนเทศ เทคโนโลยีธุรกิจดิจิทัล ดิจิทัลกราฟิก การตลาด การท่องเที่ยว การบัญชี โลจิสติกส์และซัพพลายเชน และการจัดการ',
};

export const revalidate = 300;

const LEVELS = [
  { code: 'ปวช.', full: 'ประกาศนียบัตรวิชาชีพ', years: '3 ปี', who: 'รับผู้จบ ม.3 หรือเทียบเท่า' },
  { code: 'ปวส.', full: 'ประกาศนียบัตรวิชาชีพชั้นสูง', years: '2 ปี', who: 'รับผู้จบ ปวช. / ม.6 หรือเทียบเท่า' },
] as const;

export default async function ProgramsPage() {
  const about = await getAbout();
  return (
    <div className="page-root">
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero
          title="หลักสูตร 8 สาขาวิชา"
          subtitle="เลือกสาขาที่ใช่ เรียนจริง ทำงานได้จริง ทั้งระดับ ปวช. และ ปวส. พร้อมเส้นทางต่อปริญญาตรี"
          crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'หลักสูตร' }]}
        />

        <section aria-labelledby="majors" className="ab-section">
          <SectionTitle id="majors" accent="ที่เปิดสอน">สาขาวิชา</SectionTitle>
          <div className="ab-wrap">
            <ul className="pg-grid">
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <a href={`/vbac_next/programs/${p.slug}`} className="pg-card card" style={{ '--pc': p.color } as CSSProperties}>
                    <span className="pg-card-top">
                      <span className="pg-code">{p.code}</span>
                      <span className="pg-levels">
                        {p.levels.map((l) => (
                          <span key={l}>{l}</span>
                        ))}
                      </span>
                    </span>
                    <span className="pg-mark" aria-hidden="true">{p.code}</span>
                    <strong>{p.th}</strong>
                    <span className="pg-en">{p.en}</span>
                    <span className="pg-tag">{p.tagline}</span>
                    <span className="pg-more">
                      ดูรายละเอียดสาขา
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="levels" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ right: '-60px', top: '20px', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="levels" accent="การศึกษา">ระดับ</SectionTitle>
          <div className="ab-wrap">
            <div className="pg-levelrow">
              {LEVELS.map((lv) => (
                <div key={lv.code} className="pg-level">
                  <div className="pg-level-head">
                    <span className="ab-badge">{lv.code}</span>
                    <div>
                      <strong>{lv.full}</strong>
                      <span>หลักสูตร {lv.years} · {lv.who}</span>
                    </div>
                  </div>
                  <ul>
                    {PROGRAMS.filter((p) => p.levels.includes(lv.code)).map((p) => (
                      <li key={p.slug}>
                        <a href={`/vbac_next/programs/${p.slug}`} style={{ '--pc': p.color } as CSSProperties}>{p.th}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="apply" className="ab-section">
          <SectionTitle id="apply" accent="กับ VBAC">เริ่มต้น</SectionTitle>
          <div className="ab-wrap">
            <div className="ln-cta pg-cta">
              <h3>ยังเลือกสาขาไม่ได้? ปรึกษาเราก่อนได้</h3>
              <p>ครูแนะแนวช่วยดูความถนัดและแนะนำสาขาที่เหมาะกับน้องๆ หรือสมัครเรียนออนไลน์ได้เลยตอนนี้</p>
              <div className="ln-cta-btns">
                <a href="/vbac_next/register" className="ln-btn ln-btn-yellow">สมัครเรียนออนไลน์</a>
                <a href={about.line} target="_blank" rel="noopener noreferrer" className="ln-btn ln-btn-line">ปรึกษาทาง LINE</a>
                <a href="/vbac_next/loan" className="ln-btn ln-btn-ghost">กู้ยืม กยศ.</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer about={about} />
    </div>
  );
}
