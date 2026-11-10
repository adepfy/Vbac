import { ACCENT } from '@/data/site';

export default function Cta() {
  return (
    <>
<section id="apply" style={{ maxWidth: "1180px", margin: "0 auto", padding: "96px 20px 40px" }}>
<div className="dots ondark" style={{ position: "relative", overflow: "hidden", isolation: "isolate", borderRadius: "36px", backgroundColor: ACCENT, color: "#FFFFFF", padding: "clamp(32px, 5vw, 64px)", display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center", justifyContent: "space-between" }}>
<div className="net" aria-hidden="true" style={{ right: "-40px", top: "-30px", width: "520px", height: "357px", opacity: ".3", zIndex: "-1" }}>
</div>
<div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
<h2 style={{ margin: "0", fontWeight: "700", fontSize: "clamp(32px, 4vw, 50px)", lineHeight: "1.1" }}>
{"พร้อมเริ่มต้นแล้วใช่ไหม?"}
</h2>
<p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#FFE4E8" }}>
{"สมัครออนไลน์ได้ภายใน 5 นาที หรือแอด LINE คุยกับฝ่ายแนะแนวได้ทุกวัน"}
</p>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a href="/register" style={{ height: "58px", padding: "0 28px", borderRadius: "999px", background: "#FFC21A", color: "#120A0B", display: "inline-flex", alignItems: "center", fontWeight: "700", fontSize: "18px" }}>
{"สมัครเรียนออนไลน์"}
</a>
<a href="#line" style={{ height: "58px", padding: "0 26px", borderRadius: "999px", background: "#06C755", color: "#0B2A16", display: "inline-flex", alignItems: "center", fontWeight: "700", fontSize: "18px" }}>
{"แอด LINE"}
</a>
</div>
</div>
</section>
    </>
  );
}
