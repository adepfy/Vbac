import { Fragment } from 'react';
import { ACCENT } from '@/data/site';
import { faqs } from '@/data/site';

export default function Faq() {
  return (
    <>
<section id="faq" aria-labelledby="h-faq" style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 20px 0", display: "flex", flexDirection: "column", gap: "24px" }}>
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
<span style={{ width: "64px", height: "64px", borderRadius: "20px", background: ACCENT, color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "32px", transform: "rotate(-8deg)" }} aria-hidden="true">
{"?"}
</span>
<h2 id="h-faq" style={{ margin: "0", fontWeight: "700", fontSize: "clamp(28px, 3.4vw, 40px)" }}>
{"อยากเรียนที่ VBAC ต้องรู้อะไรบ้าง?"}
</h2>
<p style={{ margin: "0", fontSize: "16px", color: "#6B5F5A" }}>
{"คำถามที่น้องๆ และผู้ปกครองถามบ่อย"}
</p>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
{faqs.map((f, idx) => (<Fragment key={idx}>
<details className="faq" style={{ borderRadius: "18px", background: "#FFFFFF", border: "1px solid #ECE3DE", padding: "0 22px" }}>
<summary style={{ display: "flex", alignItems: "center", gap: "14px", minHeight: "64px", fontWeight: "600", fontSize: "17px" }}>
<span className="plus" aria-hidden="true" style={{ width: "30px", height: "30px", flexShrink: "0", borderRadius: "999px", background: "#FBEAEC", color: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", transition: "transform .2s" }}>
{"+"}
</span>
{" "}{f.q}{" "}
</summary>
<p style={{ margin: "0", padding: "0 0 20px 44px", fontSize: "16px", lineHeight: "1.7", color: "#4A403C" }}>
{f.a}
</p>
</details>
</Fragment>))}
</div>
</section>
    </>
  );
}
