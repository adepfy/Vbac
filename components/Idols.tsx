import { Fragment } from 'react';
import { ACCENT } from '@/data/site';
import { idols } from '@/data/site';

export default function Idols() {
  return (
    <>
<section aria-labelledby="h-idols" style={{ paddingTop: "24px" }}>
<div style={{ position: "relative", height: "56px", marginBottom: "20px" }}>
<div aria-hidden="true" className="tbar" style={{ position: "absolute", inset: "0" }} />
<div style={{ position: "relative", maxWidth: "1180px", height: "100%", margin: "0 auto", padding: "0 20px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "12px" }}>
<h2 id="h-idols" style={{ margin: "0", fontWeight: "700", fontSize: "32px" }}>
<span style={{ color: ACCENT }}>
{"VBAC"}
</span>
{" IDOLS"}
</h2>
<span aria-hidden="true" style={{ width: "34px", height: "34px", borderRadius: "999px", background: ACCENT, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M9 6l6 6-6 6" />
</svg>
</span>
</div>
</div>
<div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "14px" }}>
{idols.map((i, idx) => (<Fragment key={idx}>
<article className="card" style={{ borderRadius: "22px", overflow: "hidden", background: "#FFFFFF", border: "1px solid #ECE3DE" }}>
<img src={i.img} alt={`${i.name} — ${i.role}`} style={{ width: "100%", aspectRatio: "554 / 162", objectFit: "cover", display: "block", background: "#2A1B1E" }} />
</article>
</Fragment>))}
</div>
</section>
    </>
  );
}
