import { Fragment } from 'react';
import { ACCENT } from '@/data/site';
import { quotients } from '@/data/site';

export default function Quotients() {
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
<section id="about" style={{ background: "#FDEEEF" }}>
<div style={{ maxWidth: "1180px", margin: "0 auto", padding: "56px 20px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
<div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
<span style={{ alignSelf: "flex-start", background: "#120A0B", color: "#FFC21A", fontWeight: "600", fontSize: "14px", borderRadius: "999px", padding: "5px 14px" }}>
{"ที่ VBAC เรา..."}
</span>
<h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: "1.08" }}>
{"สอน "}
<span style={{ color: ACCENT }}>
{"Gen Z"}
</span>
{" และ"}
<br />
<span style={{ color: ACCENT }}>
{"Gen Alpha"}
</span>
{" ครบ 7 ด้าน"}
</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#4A403C", maxWidth: "440px" }}>
{"ไม่ใช่แค่เก่งวิชาการ แต่พร้อมใช้ชีวิตและทำงานในโลกจริง"}
</p>
</div>
<div style={{ flex: "1 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
{quotients.map((q, idx) => (<Fragment key={idx}>
<div style={{ background: "#FFFFFF", border: "1px solid #F3D3D8", borderRadius: "18px", padding: "14px 16px", display: "flex", gap: "14px", alignItems: "center" }}>
<span style={{ width: "50px", height: "50px", flexShrink: "0", borderRadius: "14px", background: ACCENT, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "18px" }}>
{q.code}
</span>
<span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{q.th}
</span>
<span style={{ fontSize: "13px", color: "#6B5F5A" }}>
{q.en}
</span>
</span>
</div>
</Fragment>))}
</div>
</div>
</section>
</div>
<div aria-hidden="true" style={{ height: "72px", background: "#FDEEEF" }}>
</div>
    </>
  );
}
