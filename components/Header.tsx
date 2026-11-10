'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/#programs', label: 'หลักสูตร' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
  { href: '/news', label: 'ข่าวสาร & กิจกรรม' },
  { href: '/#faq', label: 'กยศ.' },
  { href: '/about#contact', label: 'ชำระเงิน' },
  { href: '/about#contact', label: 'ติดต่อเรา' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // ปิดเมนูเมื่อกด Esc หรือขยายจอกลับเป็นเดสก์ท็อป
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1021px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="hd-bar">
        <a href="/" className="hd-brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="ตราวิทยาลัย VBAC" width={56} height={52} />
          <span>
            <strong>วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา (VBAC)</strong>
            <small>Viboon Business Administration Technological College Ramintra</small>
            <em>College for The NEXT Generation</em>
          </span>
        </a>
        <nav className="navlinks" aria-label="เมนูหลัก">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="hd-actions">
          <a href="/register" className="hd-apply">
            สมัครเรียน
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <button
            type="button"
            className="menubtn"
            aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#120A0B" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mm${open ? ' open' : ''}`} hidden={!open}>
        <nav aria-label="เมนูมือถือ">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </a>
          ))}
          <a href="/register" className="mm-apply" onClick={() => setOpen(false)}>สมัครเรียนออนไลน์</a>
        </nav>
      </div>
      {open && <button type="button" className="mm-backdrop" aria-label="ปิดเมนู" onClick={() => setOpen(false)} />}
    </header>
  );
}
