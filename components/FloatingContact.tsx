import { ACCENT } from '@/data/site';
import type { About } from '@/lib/content';

export default function FloatingContact({ about }: { about: About }) {
  return (
    <>
<div aria-label="ติดต่อด่วน" style={{ position: "fixed", right: "14px", top: "50%", transform: "translateY(-50%)", zIndex: "30", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
<a href="/vbac_next/register" style={{ height: "44px", padding: "0 16px", borderRadius: "999px", background: ACCENT, color: "#FFFFFF", display: "flex", alignItems: "center", fontWeight: "600", fontSize: "14px", boxShadow: "0 8px 20px -8px rgba(120,10,25,.6)" }}>
{"สมัครเรียน"}
</a>
<a href={`tel:${about.telephone.split(/[-–]/)[0].replace(/\s+/g, "")}`} aria-label="โทรหาวิทยาลัย" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -8px rgba(18,10,11,.4)" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
</svg>
</a>
<a href={about.line} target="_blank" rel="noopener noreferrer" aria-label="LINE" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#06C755", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -8px rgba(18,10,11,.4)" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M21 11.5c0 4.1-4 7.5-9 7.5-1 0-2-.1-2.9-.4L5 20l1-3.3C4.2 15.3 3 13.5 3 11.5 3 7.4 7 4 12 4s9 3.4 9 7.5z" />
</svg>
</a>
<a href={about.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -8px rgba(18,10,11,.4)" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3h-3V8a1 1 0 0 1 1-1h2z" />
</svg>
</a>
<a href="#tiktok" aria-label="TikTok" style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#120A0B", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px -8px rgba(18,10,11,.4)" }}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
<path d="M14 4c.5 2.5 2.5 4 5 4" />
</svg>
</a>
</div>
    </>
  );
}
