import { Fragment } from 'react';
import { ACCENT } from '@/data/site';
import { programs } from '@/data/site';

export default function Programs() {
  return (
    <>
<div aria-hidden="true" style={{ lineHeight: "0", marginTop: "36px", background: "transparent" }}>
<svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "84px", display: "block" }}>
<path d="M0 40 C 120 6 240 6 360 40 C 480 74 600 74 720 40 C 840 6 960 6 1080 40 C 1200 74 1320 74 1440 40 L1440 120 L0 120 Z" fill="#F8C9D0" />
<path d="M0 82 C 160 40 320 40 480 72 C 640 104 800 104 960 72 C 1120 40 1280 40 1440 78 L1440 120 L0 120 Z" fill="#FDEEEF" />
</svg>
</div>
<div style={{ background: "#FDEEEF", paddingBottom: "40px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
<div className="netr" aria-hidden="true" style={{ right: "-60px", top: "20px", width: "560px", height: "385px", opacity: ".12" }}>
</div>
<span className="geo " aria-hidden="true" style={{ left: "3%", top: "140px", opacity: ".3", zIndex: "-1" }}>
<svg width="44" height="44" viewBox="0 0 44 44">
<circle cx="22" cy="22" r="16" fill="none" stroke="#C8102E" strokeWidth="4" />
</svg>
</span>
<span className="geo s2" aria-hidden="true" style={{ right: "5%", bottom: "80px", opacity: ".6", zIndex: "-1" }}>
<svg width="30" height="30" viewBox="0 0 30 30">
<path d="M15 4v22M4 15h22" stroke="#F2A900" strokeWidth="4" strokeLinecap="round" />
</svg>
</span>
<span className="geo s2" aria-hidden="true" style={{ left: "7%", bottom: "50px", opacity: ".25", zIndex: "-1" }}>
<svg width="60" height="60" viewBox="0 0 60 60">
<circle cx="6" cy="6" r="2.5" fill="#C8102E" />
<circle cx="6" cy="22" r="2.5" fill="#C8102E" />
<circle cx="6" cy="38" r="2.5" fill="#C8102E" />
<circle cx="6" cy="54" r="2.5" fill="#C8102E" />
<circle cx="22" cy="6" r="2.5" fill="#C8102E" />
<circle cx="22" cy="22" r="2.5" fill="#C8102E" />
<circle cx="22" cy="38" r="2.5" fill="#C8102E" />
<circle cx="22" cy="54" r="2.5" fill="#C8102E" />
<circle cx="38" cy="6" r="2.5" fill="#C8102E" />
<circle cx="38" cy="22" r="2.5" fill="#C8102E" />
<circle cx="38" cy="38" r="2.5" fill="#C8102E" />
<circle cx="38" cy="54" r="2.5" fill="#C8102E" />
<circle cx="54" cy="6" r="2.5" fill="#C8102E" />
<circle cx="54" cy="22" r="2.5" fill="#C8102E" />
<circle cx="54" cy="38" r="2.5" fill="#C8102E" />
<circle cx="54" cy="54" r="2.5" fill="#C8102E" />
</svg>
</span>
<span className="geo s3" aria-hidden="true" style={{ right: "12%", top: "110px", opacity: ".3", zIndex: "-1" }}>
<svg width="40" height="40" viewBox="0 0 40 40">
<path d="M20 5l15 28H5z" fill="none" stroke="#C8102E" strokeWidth="3.5" strokeLinejoin="round" />
</svg>
</span>
<section id="programs" aria-labelledby="h-programs" style={{ paddingTop: "24px" }}>
<div style={{ position: "relative", height: "56px", marginBottom: "20px" }}>
<div aria-hidden="true" className="tbar" style={{ position: "absolute", inset: "0" }} />
<div style={{ position: "relative", maxWidth: "1180px", height: "100%", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
<h2 id="h-programs" style={{ margin: "0", fontWeight: "700", fontSize: "32px" }}>
{"หลักสูตร "}
<span style={{ color: ACCENT }}>
{"8 สาขา"}
</span>
</h2>
<span aria-hidden="true" style={{ width: "34px", height: "34px", borderRadius: "999px", background: ACCENT, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M9 6l6 6-6 6" />
</svg>
</span>
</div>
</div>
<div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "14px" }}>
{programs.map((p, idx) => (<Fragment key={idx}>
<a href="#program" className="program-card card" style={{ background: p.color }}>
<span className="program-card-mark" aria-hidden="true">
{p.code}
</span>
<span className="program-card-code" style={{ color: p.color }}>
{p.code}
</span>
<span className="program-card-copy">
<span className="program-card-name">
{p.th}
</span>
<span className="program-card-en">
{p.en}
</span>
</span>
</a>
</Fragment>))}
</div>
</section>
</div>
<div aria-hidden="true" style={{ height: "72px", background: "#FDEEEF" }}>
</div>
    </>
  );
}
