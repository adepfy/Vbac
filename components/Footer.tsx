import type { About } from '@/lib/content';

export default function Footer({ about }: { about: About }) {
  return (
    <>
<div aria-hidden="true" style={{ lineHeight: "0", marginTop: "0", background: "transparent" }}>
<svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "110px", display: "block" }}>
<path d="M0 40 C 120 6 240 6 360 40 C 480 74 600 74 720 40 C 840 6 960 6 1080 40 C 1200 74 1320 74 1440 40 L1440 120 L0 120 Z" fill="#F8C9D0" />
<path d="M0 82 C 160 40 320 40 480 72 C 640 104 800 104 960 72 C 1120 40 1280 40 1440 78 L1440 120 L0 120 Z" fill="#FDEEEF" />
</svg>
</div>
<footer id="contact" style={{ background: "#FDEEEF" }}>
<div style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 20px 28px", display: "flex", flexDirection: "column", gap: "40px" }}>
<div style={{ display: "flex", flexWrap: "wrap", gap: "36px" }}>
<div style={{ flex: "1 1 170px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<span style={{ fontWeight: "600", color: "#C8102E" }}>
{"หลักสูตร / สาขา"}
</span>
<a href="/#programs">
{"เทคโนโลยีสารสนเทศ"}
</a>
<a href="/#programs">
{"ธุรกิจดิจิทัล"}
</a>
<a href="/#programs">
{"ดิจิทัลกราฟิก"}
</a>
<a href="/#programs">
{"การตลาด"}
</a>
<a href="/#programs">
{"การบัญชี"}
</a>
<a href="/#programs">
{"ดูทั้ง 8 สาขา"}
</a>
</div>
<div style={{ flex: "1 1 170px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<span style={{ fontWeight: "600", color: "#C8102E" }}>
{"เกี่ยวกับวิทยาลัย"}
</span>
<a href="/about#history">
{"ประวัติวิทยาลัย"}
</a>
<a href="/about#vision">
{"วิสัยทัศน์และพันธกิจ"}
</a>
<a href="/about#contact">
{"แผนที่วิทยาลัย"}
</a>
<a href="/about#executives">
{"ผู้บริหาร"}
</a>
</div>
<div style={{ flex: "1 1 170px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
<span style={{ fontWeight: "600", color: "#C8102E" }}>
{"บริการ"}
</span>
<a href="#loan">
{"กองทุน กยศ."}
</a>
<a href="#payment">
{"ช่องทางชำระเงิน"}
</a>
<a href="#visit">
{"เยี่ยมชม & เช่าสถานที่"}
</a>
<a href="#jobs">
{"ร่วมงานกับเรา"}
</a>
</div>
<div style={{ flex: "1.4 1 280px", display: "flex", flexDirection: "column", gap: "14px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
<img src="/images/logo.png" alt="ตราวิทยาลัย VBAC" style={{ width: "60px", height: "56px", objectFit: "contain", display: "block" }} />
<span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
<span style={{ fontWeight: "700", fontSize: "18px", color: "#C8102E" }}>
{"VBAC"}
</span>
<span style={{ fontSize: "13px", color: "#4A403C" }}>
{"วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา"}
</span>
</span>
</div>
<p style={{ margin: "0", fontSize: "14px", lineHeight: "1.7", color: "#4A403C" }}>
<span style={{ whiteSpace: "pre-line" }}>{about.address}</span>
<br />
{`โทร ${about.telephone}`}
</p>
<div style={{ display: "flex", gap: "8px" }}>
<a href={about.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3h-3V8a1 1 0 0 1 1-1h2z" />
</svg>
</a>
<a href="#tiktok" aria-label="TikTok" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
<path d="M14 4c.5 2.5 2.5 4 5 4" />
</svg>
</a>
<a href={about.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<rect x="3" y="6" width="18" height="12" rx="4" />
<path d="M10 9.5v5l4.5-2.5z" />
</svg>
</a>
<a href={about.line} target="_blank" rel="noopener noreferrer" aria-label="LINE" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M21 11.5c0 4.1-4 7.5-9 7.5-1 0-2-.1-2.9-.4L5 20l1-3.3C4.2 15.3 3 13.5 3 11.5 3 7.4 7 4 12 4s9 3.4 9 7.5z" />
</svg>
</a>
</div>
</div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px", paddingTop: "20px", borderTop: "1px solid #ECE3DE", fontSize: "13px", color: "#6B5F5A" }}>
<span>
{"© 2026 Viboon Business Administration Technological College Ramintra"}
</span>
<span>
{"College for The NEXT Generation"}
</span>
</div>
</div>
</footer>
    </>
  );
}
