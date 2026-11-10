'use client';

import { useEffect, useState } from 'react';
import type { Banner } from '@/lib/content';
import { ACCENT } from '@/data/site';

export default function Hero({ banners }: { banners: Banner[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (banners.length < 2) return;
    const t = setInterval(() => setActive((a) => (a + 1) % banners.length), 6000);
    return () => clearInterval(t);
  }, [active, banners.length]);
  return (
    <>
<div className="dots" style={{ backgroundColor: ACCENT, color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
<div aria-hidden="true" style={{ position: "absolute", right: "-40px", bottom: "20px", fontWeight: "700", fontSize: "220px", lineHeight: "1", color: "rgba(0,0,0,.13)", letterSpacing: "-8px", pointerEvents: "none" }}>
{"VBAC"}
</div>
<div className="net netanim" aria-hidden="true" style={{ right: "-80px", top: "10px", width: "640px", height: "440px", opacity: ".3", zIndex: "1", transform: "scaleX(-1)" }}>
</div>
<div className="net netanim2" aria-hidden="true" style={{ left: "30%", bottom: "-120px", width: "420px", height: "289px", opacity: ".14", zIndex: "1" }}>
</div>
<span className="pulse" aria-hidden="true" style={{ right: "22%", top: "18%", zIndex: "1" }}>
</span>
<span className="pulse" aria-hidden="true" style={{ right: "9%", top: "52%", zIndex: "1", animationDelay: "-1s" }}>
</span>
<span className="pulse" aria-hidden="true" style={{ left: "46%", top: "70%", zIndex: "1", animationDelay: "-1.8s" }}>
</span>
<span className="geo " aria-hidden="true" style={{ left: "3%", top: "16%", opacity: ".7", zIndex: "1" }}>
<svg width="44" height="44" viewBox="0 0 44 44">
<circle cx="22" cy="22" r="16" fill="none" stroke="#FFC21A" strokeWidth="4" />
</svg>
</span>
<span className="geo s2" aria-hidden="true" style={{ left: "47%", top: "10%", opacity: ".6", zIndex: "1" }}>
<svg width="30" height="30" viewBox="0 0 30 30">
<path d="M15 4v22M4 15h22" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
</svg>
</span>
<span className="geo s3" aria-hidden="true" style={{ left: "4%", bottom: "34%", opacity: ".5", zIndex: "1" }}>
<svg width="40" height="40" viewBox="0 0 40 40">
<path d="M20 5l15 28H5z" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinejoin="round" />
</svg>
</span>
<span className="geo s2" aria-hidden="true" style={{ left: "44%", bottom: "30%", opacity: ".55", zIndex: "1" }}>
<svg width="60" height="60" viewBox="0 0 60 60">
<circle cx="6" cy="6" r="2.5" fill="#FFC21A" />
<circle cx="6" cy="22" r="2.5" fill="#FFC21A" />
<circle cx="6" cy="38" r="2.5" fill="#FFC21A" />
<circle cx="6" cy="54" r="2.5" fill="#FFC21A" />
<circle cx="22" cy="6" r="2.5" fill="#FFC21A" />
<circle cx="22" cy="22" r="2.5" fill="#FFC21A" />
<circle cx="22" cy="38" r="2.5" fill="#FFC21A" />
<circle cx="22" cy="54" r="2.5" fill="#FFC21A" />
<circle cx="38" cy="6" r="2.5" fill="#FFC21A" />
<circle cx="38" cy="22" r="2.5" fill="#FFC21A" />
<circle cx="38" cy="38" r="2.5" fill="#FFC21A" />
<circle cx="38" cy="54" r="2.5" fill="#FFC21A" />
<circle cx="54" cy="6" r="2.5" fill="#FFC21A" />
<circle cx="54" cy="22" r="2.5" fill="#FFC21A" />
<circle cx="54" cy="38" r="2.5" fill="#FFC21A" />
<circle cx="54" cy="54" r="2.5" fill="#FFC21A" />
</svg>
</span>
<span className="geo " aria-hidden="true" style={{ right: "38%", top: "6%", opacity: ".7", zIndex: "1" }}>
<svg width="74" height="24" viewBox="0 0 74 24">
<path d="M3 12c8-10 14 10 22 0s14 10 22 0 14 10 22 0" fill="none" stroke="#FFC21A" strokeWidth="3.5" strokeLinecap="round" />
</svg>
</span>
<section id="top" style={{ position: "relative", zIndex: "3", maxWidth: "1240px", margin: "0 auto", padding: "36px 24px 110px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
<div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
<div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "10px", padding: "6px 16px 6px 6px", borderRadius: "999px", background: "#120A0B", color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>
<span style={{ background: "#FFC21A", color: "#120A0B", borderRadius: "999px", padding: "4px 12px", fontSize: "13px", fontWeight: "700" }}>
{"เปิดรับสมัคร"}
</span>
{" ปวช. / ปวส. ภาคเรียน 2/2026 "}
</div>
<h1 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(36px, 4.2vw, 58px)", lineHeight: "1.08", letterSpacing: "-1.5px" }}>
{"เปลี่ยนเรื่องเรียน"}
<br />
{"ให้เป็น"}
<span style={{ color: "#FFC21A" }}>
{"เรื่องสนุก!"}
</span>
</h1>
<p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#FFE4E8", maxWidth: "520px" }}>
{"8 สาขาวิชาที่ตลาดงานต้องการ เรียนจริง ลงมือทำจริงกับผู้เชี่ยวชาญ"}
</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="/register" style={{ height: "50px", padding: "0 26px", borderRadius: "999px", background: "#FFC21A", color: "#120A0B", display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: "700", fontSize: "18px", boxShadow: "0 6px 0 #B8860B" }}>
{"สมัครเรียนออนไลน์ "}
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
<path d="M5 12h14M13 6l6 6-6 6" />
</svg>
</a>
<a href="#brochure" style={{ height: "50px", padding: "0 22px", borderRadius: "999px", background: "transparent", border: "2px solid #FFFFFF", color: "#FFFFFF", display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: "600", fontSize: "18px" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
</svg>
{" โบรชัวร์ "}
</a>
</div>
</div>
<div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "580px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
<div className="bn js" role="region" aria-label="แบนเนอร์ประชาสัมพันธ์" style={{ position: "relative", height: "340px", borderRadius: "28px", overflow: "hidden", background: "#EFE6E1", boxShadow: "0 30px 60px -24px rgba(0,0,0,.5)" }}>
{banners.map((b, i) => (
<div key={i} className={`sl${active === i ? ' on' : ''}`}>
<div aria-hidden="true" className="bn-blur" style={{ backgroundImage: `url("${b.img}")` }} />
{b.link ? (
<a href={b.link} style={{ display: "block", width: "100%", height: "100%" }}>
<img src={b.img} alt={b.alt} loading={i === 0 ? "eager" : "lazy"} style={{ position: "relative", width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
</a>
) : (
<img src={b.img} alt={b.alt} loading={i === 0 ? "eager" : "lazy"} style={{ position: "relative", width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
)}
</div>
))}
</div>
<div className="dots-row js" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
{banners.length > 1 && banners.map((_, i) => (
<button key={i} type="button" aria-label={`ไปที่สไลด์ ${i + 1}`} aria-current={active === i ? "true" : undefined} className={`dot${active === i ? ' on' : ''}`} onClick={() => setActive(i)} style={{ border: 0, padding: 0, cursor: "pointer" }} />
))}
</div>
</div>
</section>
<svg aria-hidden="true" viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: "absolute", left: "0", bottom: "-1px", width: "100%", height: "100px", display: "block", zIndex: "2" }}>
<path d="M0 60 C 120 18 240 18 360 55 C 480 92 600 92 720 55 C 840 18 960 18 1080 55 C 1200 92 1320 92 1440 55 L1440 200 L0 200 Z" fill="#E4475D" />
<path d="M0 108 C 140 66 300 66 440 98 C 600 134 760 134 900 98 C 1040 64 1220 64 1440 104 L1440 200 L0 200 Z" fill="#F4B3BE" />
<path d="M0 150 C 110 120 220 120 330 140 C 440 160 550 160 660 140 C 770 120 880 120 990 140 C 1100 160 1210 160 1320 140 C 1380 130 1420 128 1440 132 L1440 200 L0 200 Z" fill="#FDEEEF" />
<path d="M0 182 C 180 150 360 150 540 172 C 720 194 900 194 1080 170 C 1220 152 1340 156 1440 172 L1440 200 L0 200 Z" fill="#FFFFFF" />
</svg>
</div>
    </>
  );
}
