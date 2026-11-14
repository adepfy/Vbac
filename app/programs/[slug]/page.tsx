import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { getAbout, getMajorDetail } from '@/lib/content';
import { mediaUrlOrLive } from '@/lib/media';
import { PROGRAMS, findProgram } from '@/lib/programs';

export const revalidate = 300;
export const dynamicParams = false;

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = findProgram((await params).slug);
  if (!p) return {};
  return {
    title: `สาขาวิชา${p.th} (${p.en}) — VBAC`,
    description: `${p.tagline} หลักสูตร ${p.levels.join(' / ')} สาขาวิชา${p.th} วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา`,
  };
}

const GALLERY_FIRST = 12;

export default async function ProgramPage({ params }: Props) {
  const p = findProgram((await params).slug);
  if (!p) notFound();

  const [about, d] = await Promise.all([getAbout(), getMajorDetail(p.majorId)]);
  const paragraphs = (d.description || p.intro).split(/\n+/).map((s) => s.trim()).filter(Boolean);
  const posters = [d.roadmap, d.ability].filter((u): u is string => Boolean(u));
  const extras = p.posters.map((x) => mediaUrlOrLive(x));
  const others = PROGRAMS.filter((o) => o.slug !== p.slug);

  const nav = [
    ['overview', 'ภาพรวมสาขา'],
    ...(posters.length ? [['roadmap', 'Roadmap & สมรรถนะ'] as const] : []),
    ...(d.videos.length ? [['video', 'วิดีโอแนะนำ'] as const] : []),
    ['careers', 'อาชีพหลังเรียนจบ'],
    ...(d.gallery.length ? [['gallery', `บรรยากาศ (${d.gallery.length})`] as const] : []),
    ['other', 'สาขาอื่น'],
  ] as const;

  return (
    <div className="page-root" style={{ '--pc': p.color } as CSSProperties}>
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero
          title={`สาขาวิชา${p.th}`}
          subtitle={`${p.en} · ${p.tagline}`}
          crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'หลักสูตร', href: '/vbac_next/programs' }, { label: p.th }]}
        />

        <nav aria-label="หัวข้อในหน้าสาขา" className="ab-subnav">
          <div className="ab-wrap ab-chips">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="ab-chip">{label}</a>
            ))}
          </div>
        </nav>

        {/* ภาพรวม */}
        <section aria-labelledby="overview" className="ab-section">
          <SectionTitle id="overview" accent="สาขา">ภาพรวม</SectionTitle>
          <div className="ab-wrap ab-split">
            <div className="ab-col">
              <div className="pg-badges">
                <span className="pg-code pg-code-solid">{p.code}</span>
                {p.levels.map((l) => (
                  <span key={l} className="ab-kicker">{l === 'ปวช.' ? 'ปวช. 3 ปี' : 'ปวส. 2 ปี'}</span>
                ))}
              </div>
              <p className="ab-lead">{p.tagline}</p>
              {paragraphs.map((t, i) => (
                <p key={i} className="ab-body">{t}</p>
              ))}
              <div className="pg-actions">
                <a href="/vbac_next/register" className="ln-btn ln-btn-red">สมัครเรียนสาขานี้</a>
                <a href={about.line} target="_blank" rel="noopener noreferrer" className="ln-btn ln-btn-outline">สอบถามทาง LINE</a>
              </div>
            </div>
            <div className="pg-learn">
              <h3>เรียนอะไรบ้าง</h3>
              <ul>
                {p.learn.map((x, i) => (
                  <li key={x}>
                    <span className="pg-learn-num">{String(i + 1).padStart(2, '0')}</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap & สมรรถนะ (รูปจากฐานข้อมูล) */}
        {posters.length > 0 && (
          <section aria-labelledby="roadmap" className="ab-section ab-pink">
            <div className="netr" aria-hidden="true" style={{ right: '-60px', top: '20px', width: '560px', height: '385px', opacity: 0.12 }} />
            <SectionTitle id="roadmap" accent=" & สมรรถนะ">Roadmap</SectionTitle>
            <div className="ab-wrap">
              <ul className="pg-posters">
                {posters.map((src, i) => (
                  <li key={src}>
                    <a href={src} target="_blank" rel="noopener noreferrer" className="card">
                      <img src={src} alt={i === 0 ? `Roadmap เส้นทางการเรียนสาขาวิชา${p.th}` : `สมรรถนะของผู้เรียนสาขาวิชา${p.th}`} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="st-hint">กดที่รูปเพื่อดูขนาดเต็ม</p>
            </div>
          </section>
        )}

        {/* วิดีโอ */}
        {d.videos.length > 0 && (
          <section aria-labelledby="video" className="ab-section">
            <SectionTitle id="video" accent="แนะนำสาขา">วิดีโอ</SectionTitle>
            <div className={`ab-wrap pg-videos${d.videos.length > 1 ? ' pg-videos-2' : ''}`}>
              {d.videos.map((v, i) => (
                <video key={v} controls preload="metadata" playsInline className="pg-video" aria-label={`วิดีโอแนะนำสาขาวิชา${p.th} ${i + 1}`}>
                  <source src={v} type="video/mp4" />
                </video>
              ))}
            </div>
          </section>
        )}

        {/* อาชีพ */}
        <section aria-labelledby="careers" className={`ab-section${d.videos.length ? ' ab-pink' : ''}`}>
          {d.videos.length > 0 && (
            <div className="netr" aria-hidden="true" style={{ left: '-60px', top: '20px', transform: 'scaleX(-1)', width: '560px', height: '385px', opacity: 0.12 }} />
          )}
          <SectionTitle id="careers" accent="หลังเรียนจบ">อาชีพ</SectionTitle>
          <div className="ab-wrap">
            <ul className="pg-careers">
              {p.careers.map((c) => (
                <li key={c}>
                  <span aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="pg-further">
              <strong>เรียนต่อปริญญาตรี</strong>
              <span>{p.further} กับเครือข่ายมหาวิทยาลัยที่ร่วมมือกับวิทยาลัย</span>
            </div>
            {extras.length > 0 && (
              <ul className="pg-extras">
                {extras.map((src, i) => (
                  <li key={src}>
                    <a href={src} target="_blank" rel="noopener noreferrer" className="card">
                      <img src={src} alt={`สื่อแนะนำสาขาวิชา${p.th} ${i + 1}`} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* แกลเลอรี */}
        {d.gallery.length > 0 && (
          <section aria-labelledby="gallery" className="ab-section">
            <SectionTitle id="gallery" accent="การเรียน">บรรยากาศ</SectionTitle>
            <div className="ab-wrap">
              <ul className="pg-gallery">
                {d.gallery.slice(0, GALLERY_FIRST).map((src, i) => (
                  <li key={src}>
                    <a href={src} target="_blank" rel="noopener noreferrer">
                      <img src={src} alt={`บรรยากาศการเรียนสาขาวิชา${p.th} ${i + 1}`} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
              {d.gallery.length > GALLERY_FIRST && (
                <details className="pg-more-gallery">
                  <summary>ดูรูปเพิ่มอีก {d.gallery.length - GALLERY_FIRST} รูป</summary>
                  <ul className="pg-gallery">
                    {d.gallery.slice(GALLERY_FIRST).map((src, i) => (
                      <li key={src}>
                        <a href={src} target="_blank" rel="noopener noreferrer">
                          <img src={src} alt={`บรรยากาศการเรียนสาขาวิชา${p.th} ${GALLERY_FIRST + i + 1}`} loading="lazy" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </section>
        )}

        {/* สาขาอื่น */}
        <section aria-labelledby="other" className="ab-section ab-pink">
          <SectionTitle id="other" accent="อื่นๆ">สาขาวิชา</SectionTitle>
          <div className="ab-wrap">
            <ul className="pg-others">
              {others.map((o) => (
                <li key={o.slug}>
                  <a href={`/vbac_next/programs/${o.slug}`} className="card" style={{ '--pc': o.color } as CSSProperties}>
                    <span className="pg-code">{o.code}</span>
                    <strong>{o.th}</strong>
                  </a>
                </li>
              ))}
            </ul>
            <div className="ln-cta pg-cta">
              <h3>สนใจสาขาวิชา{p.th}?</h3>
              <p>สมัครเรียนออนไลน์ได้ทันที หรือติดต่อครูแนะแนวเพื่อสอบถามรายละเอียด ทุนการศึกษา และการกู้ยืม กยศ.</p>
              <div className="ln-cta-btns">
                <a href="/vbac_next/register" className="ln-btn ln-btn-yellow">สมัครเรียนออนไลน์</a>
                <a href={about.line} target="_blank" rel="noopener noreferrer" className="ln-btn ln-btn-line">แชท LINE</a>
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
