import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VBAC — วิทยาลัยวิบูลย์บริหารธุรกิจ',
  description:
    'วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา เปิดรับสมัคร ปวช. / ปวส. 8 สาขาวิชา — College for The NEXT Generation',
  icons: { icon: '/vbac_next/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={kanit.variable}>
      <body>{children}</body>
    </html>
  );
}
