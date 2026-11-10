/** หัวข้อ section แบบแถบแดงเฉียง (เหมือนหน้าแรก) */
export default function SectionTitle({ id, children, accent }: { id?: string; children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ position: 'relative', height: '64px', marginBottom: '28px' }}>
      <div aria-hidden="true" className="tbar" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', maxWidth: '1180px', height: '100%', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <h2 id={id} style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(24px, 3vw, 32px)' }}>
          {children}
          {accent && <span style={{ color: '#C8102E' }}>{accent}</span>}
        </h2>
      </div>
    </div>
  );
}
