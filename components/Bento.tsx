

export default function Bento() {
  return (
    <>
<section aria-label="ภาพรวมวิทยาลัย" style={{ maxWidth: "1180px", margin: "0 auto", padding: "88px 20px 0" }}>
<div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gridAutoRows: "210px", gap: "12px" }}>
<a href="#alumni" className="card" style={{ gridColumn: "span 2", gridRow: "span 2", position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", color: "#FFFFFF", background: "#2A1B1E" }}>
<img src="/vbac_next/images/grad.jpg" alt="บัณฑิต VBAC" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(18,10,11,.8), rgba(18,10,11,0) 55%)" }}>
</div>
<span style={{ position: "relative", padding: "24px", fontWeight: "700", fontSize: "30px", letterSpacing: "1px" }}>
{"ALUMNI"}
</span>
</a>
<a href="#award" className="card" style={{ gridColumn: "span 2", position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", color: "#FFFFFF", background: "#2A1B1E" }}>
<img src="/vbac_next/images/video.jpg" alt="ผลงานนักศึกษา" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(18,10,11,.8), rgba(18,10,11,0) 55%)" }}>
</div>
<span style={{ position: "relative", padding: "20px", fontWeight: "700", fontSize: "24px", letterSpacing: "1px" }}>
{"AWARD"}
</span>
</a>
<a href="#partner" className="card" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", color: "#FFFFFF", background: "#2A1B1E" }}>
<img src="/vbac_next/images/experiment.jpg" alt="ความร่วมมือ" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(18,10,11,.8), rgba(18,10,11,0) 55%)" }}>
</div>
<span style={{ position: "relative", padding: "18px", fontWeight: "700", fontSize: "20px", letterSpacing: "1px" }}>
{"PARTNER"}
</span>
</a>
<a href="#activity" className="card" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "flex-end", color: "#FFFFFF", background: "#2A1B1E" }}>
<img src="/vbac_next/images/act2.jpg" alt="กิจกรรมนักศึกษา" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(to top, rgba(18,10,11,.8), rgba(18,10,11,0) 55%)" }}>
</div>
<span style={{ position: "relative", padding: "18px", fontWeight: "700", fontSize: "20px", letterSpacing: "1px" }}>
{"ACTIVITY"}
</span>
</a>
</div>
</section>
    </>
  );
}
