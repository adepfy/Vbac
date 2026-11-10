import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { getAbout, getAllNews, thaiDate } from '@/lib/content';

export const metadata: Metadata = { title: 'ข่าวสาร VBAC NEWS — VBAC', description: 'ข่าวสารและกิจกรรมล่าสุดของวิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา' };
export const revalidate = 300;

export default async function NewsPage() {
  const [about, news] = await Promise.all([getAbout(), getAllNews()]);
  return (
    <div className="page-root">
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero title="ข่าวสาร VBAC NEWS" subtitle="ข่าวสาร กิจกรรม และความภาคภูมิใจของชาว VBAC" crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'ข่าวสาร' }]} />
        <div className="nw-wrap nw-page">
          {news.length === 0 && <p className="nw-empty">ยังไม่มีข่าวในระบบ</p>}
          <div className="nw-cards">
            {news.map((n) => (
              <a key={n.id} href={`/vbac_next/news/${n.id}`} className="nw-card card">
                <img src={n.img} alt="" loading="lazy" />
                <span className="nw-card-body">
                  <span className="nw-date">{thaiDate(n.date)}</span>
                  <strong>{n.title}</strong>
                  {n.summary && <span className="nw-sum">{n.summary}</span>}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer about={about} />
    </div>
  );
}
