import { ACCENT } from '@/data/site';

export default function Showcase() {
  return (
    <>
<section aria-labelledby="h-showcase" style={{ paddingTop: "72px" }}>
<div style={{ position: "relative", height: "64px", marginBottom: "32px" }}>
<div aria-hidden="true" className="tbar" style={{ position: "absolute", inset: "0" }} />
<div style={{ position: "relative", maxWidth: "1180px", height: "100%", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
<h2 id="h-showcase" style={{ margin: "0", fontWeight: "700", fontSize: "32px" }}>
{"Showcase"}
</h2>
<span aria-hidden="true" style={{ width: "34px", height: "34px", borderRadius: "999px", background: ACCENT, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M9 6l6 6-6 6" />
</svg>
</span>
</div>
</div>
<div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 20px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
<div style={{ flex: "1 1 420px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
<a href="#vocational" className="card" style={{ background: ACCENT, color: "#FFFFFF", borderRadius: "20px", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", minHeight: "120px" }}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 3l9 5-9 5-9-5 9-5z" />
<path d="M21 8v6" />
</svg>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{"ปวช."}
</span>
<span style={{ fontSize: "12px", color: "#FFE4E8" }}>
{"Vocational"}
</span>
</a>
<a href="#highvoc" className="card" style={{ background: "#A30D25", color: "#FFFFFF", borderRadius: "20px", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", minHeight: "120px" }}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 3l9 5-9 5-9-5 9-5z" />
<path d="M7 10.5v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
</svg>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{"ปวส."}
</span>
<span style={{ fontSize: "12px", color: "#FFE4E8" }}>
{"High Vocational"}
</span>
</a>
<a href="#scholarship" className="card" style={{ background: ACCENT, color: "#FFFFFF", borderRadius: "20px", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", minHeight: "120px" }}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 3l9 5-9 5-9-5 9-5z" />
<path d="M7 10.5v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
</svg>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{"ทุนการศึกษา"}
</span>
<span style={{ fontSize: "12px", color: "#FFE4E8" }}>
{"Scholarship"}
</span>
</a>
<a href="#loan" className="card" style={{ background: "#A30D25", color: "#FFFFFF", borderRadius: "20px", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", minHeight: "120px" }}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<rect x="3" y="6" width="18" height="12" rx="2" />
<circle cx="12" cy="12" r="2.5" />
</svg>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{"กองทุน กยศ."}
</span>
<span style={{ fontSize: "12px", color: "#FFE4E8" }}>
{"Student Loan"}
</span>
</a>
<a href="#brochure" className="card" style={{ background: "#FFC21A", color: "#120A0B", borderRadius: "20px", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", minHeight: "120px" }}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
</svg>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{"โบรชัวร์"}
</span>
<span style={{ fontSize: "12px", color: "#4A3A00" }}>
{"Download"}
</span>
</a>
<a href="#payment" className="card" style={{ background: ACCENT, color: "#FFFFFF", borderRadius: "20px", padding: "18px 12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", textAlign: "center", minHeight: "120px" }}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<rect x="3" y="5" width="18" height="14" rx="2" />
<path d="M3 10h18M7 15h4" />
</svg>
<span style={{ fontWeight: "600", fontSize: "16px" }}>
{"ชำระค่าเทอม"}
</span>
<span style={{ fontSize: "12px", color: "#FFE4E8" }}>
{"Tuition Fees"}
</span>
</a>
<a href="/vbac_next/register" className="card" style={{ gridColumn: "span 3", borderRadius: "20px", background: "#FFF3CC", padding: "16px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
<span style={{ fontWeight: "700", fontSize: "30px", color: ACCENT, lineHeight: "1" }}>
{"Dek70"}
</span>
<span style={{ fontSize: "15px", lineHeight: "1.4", flex: "1" }}>
{"เรียนอะไรดี? ปรึกษาฝ่ายแนะแนวฟรี ทั้งออนไลน์และที่วิทยาลัย"}
</span>
<span style={{ background: ACCENT, color: "#FFFFFF", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", fontWeight: "600", flexShrink: "0" }}>
{"นัดแนะแนว"}
</span>
</a>
</div>
<a href="#update" className="card" style={{ flex: "1.3 1 460px", minWidth: "0", borderRadius: "24px", overflow: "hidden", background: "#120A0B", color: "#FFFFFF", display: "flex", flexDirection: "column" }}>
<img src="/vbac_next/images/act1.jpg" alt="นักศึกษาแข่งขัน E-Sports" style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
<div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
<span style={{ alignSelf: "flex-start", background: "#FFC21A", color: "#120A0B", borderRadius: "999px", padding: "3px 12px", fontSize: "13px", fontWeight: "600" }}>
{"ข่าวเด่น"}
</span>
<span style={{ fontWeight: "600", fontSize: "22px", lineHeight: "1.35" }}>
{"VBAC เปิดรับสมัครนักกีฬา E-Sports คัดเลือกตัวแทนแข่งขัน RoV Valor City 2026"}
</span>
<span style={{ fontSize: "15px", color: "#E3D9D4" }}>
{"ส่งกำลังใจให้วง VMISSTEP · Animal Games ครั้งที่ 27 · ครบรอบ 27 ปีวิทยาลัย"}
</span>
</div>
</a>
</div>
</section>
    </>
  );
}
