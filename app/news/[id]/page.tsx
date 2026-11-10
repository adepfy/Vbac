import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { getAbout, getLatestNews, getNewsById, thaiDate } from '@/lib/content';

export const revalidate = 300;

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const n = await getNewsById(Number(id));
  return n ? { title: `${n.title} — VBAC NEWS`, description: n.summary, openGraph: { images: [n.img] } } : { title: 'ไม่พบข่าว — VBAC' };
}

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isInteger(num) || num <= 0) notFound();
  const [about, news, latest] = await Promise.all([getAbout(), getNewsById(num), getLatestNews(5)]);
  if (!news) notFound();
  const more = latest.filter((n) => n.id !== news.id).slice(0, 4);

  return (
    <div className="page-root">
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero title={news.title} crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'ข่าวสาร', href: '/vbac_next/news' }, { label: news.title }]} />
        <div className="nw-wrap nw-detail">
          <article className="nw-article">
            <span className="nw-date">{thaiDate(news.date, true)}</span>
            {news.video ? (
              <video src={news.video} controls preload="metadata" className="nw-media" />
            ) : (
              <img src={news.img} alt={news.title} className="nw-media" />
            )}
            {news.body && <p className="nw-body">{news.body}</p>}
            <a href="/vbac_next/news" className="nw-all">← กลับไปหน้าข่าวทั้งหมด</a>
          </article>
          {more.length > 0 && (
            <aside className="nw-more" aria-label="ข่าวอื่นๆ">
              <strong>ข่าวอื่นๆ</strong>
              {more.map((n) => (
                <a key={n.id} href={`/vbac_next/news/${n.id}`} className="nw-item card">
                  <img src={n.img} alt="" loading="lazy" />
                  <span>
                    <span className="nw-date">{thaiDate(n.date)}</span>
                    <strong>{n.title}</strong>
                  </span>
                </a>
              ))}
            </aside>
          )}
        </div>
      </main>
      <Footer about={about} />
    </div>
  );
}
