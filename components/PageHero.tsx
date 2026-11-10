import { ACCENT } from '@/data/site';

type Crumb = { label: string; href?: string };

/** หัวหน้าเพจย่อย: พื้นแดง ลายเครือข่าย คลื่นด้านล่าง */
export default function PageHero({ title, subtitle, crumbs }: { title: string; subtitle?: string; crumbs: Crumb[] }) {
  return (
    <div className="dots" style={{ backgroundColor: ACCENT, color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      <div className="net netanim" aria-hidden="true" style={{ right: '-80px', top: '-20px', width: '560px', height: '385px', opacity: 0.28, zIndex: 1 }} />
      <section style={{ position: 'relative', zIndex: 3, maxWidth: '1180px', margin: '0 auto', padding: '40px 24px 120px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <nav aria-label="breadcrumb" className="crumbs">
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
              {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
            </span>
          ))}
        </nav>
        <h1 style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.1 }}>{title}</h1>
        {subtitle && <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.6, color: '#FFE4E8', maxWidth: '640px' }}>{subtitle}</p>}
      </section>
      <svg aria-hidden="true" viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: '-1px', width: '100%', height: '100px', display: 'block', zIndex: 2 }}>
        <path d="M0 60 C 120 18 240 18 360 55 C 480 92 600 92 720 55 C 840 18 960 18 1080 55 C 1200 92 1320 92 1440 55 L1440 200 L0 200 Z" fill="#E4475D" />
        <path d="M0 108 C 140 66 300 66 440 98 C 600 134 760 134 900 98 C 1040 64 1220 64 1440 104 L1440 200 L0 200 Z" fill="#F4B3BE" />
        <path d="M0 150 C 110 120 220 120 330 140 C 440 160 550 160 660 140 C 770 120 880 120 990 140 C 1100 160 1210 160 1320 140 C 1380 130 1420 128 1440 132 L1440 200 L0 200 Z" fill="#FDEEEF" />
        <path d="M0 182 C 180 150 360 150 540 172 C 720 194 900 194 1080 170 C 1220 152 1340 156 1440 172 L1440 200 L0 200 Z" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
