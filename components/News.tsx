import SectionTitle from '@/components/SectionTitle';
import { thaiDate, type NewsItem } from '@/lib/content';

/** VBAC NEWS — ข่าวล่าสุดจากตาราง news */
export default function News({ items }: { items: NewsItem[] }) {
  if (!items.length) return null;
  const [first, ...rest] = items;
  return (
    <section id="news" aria-labelledby="h-news" className="nw-section">
      <SectionTitle id="h-news" accent=" NEWS">VBAC</SectionTitle>
      <div className="nw-wrap">
        <div className="nw-grid">
          <a href={`/news/${first.id}`} className="nw-feature card">
            <img src={first.img} alt="" loading="lazy" />
            <span className="nw-shade" aria-hidden="true" />
            <span className="nw-feature-body">
              <span className="nw-tag">ข่าวล่าสุด</span>
              <strong>{first.title}</strong>
              {first.summary && <span className="nw-sum">{first.summary}</span>}
              <span className="nw-date">{thaiDate(first.date)}</span>
            </span>
          </a>
          <div className="nw-list">
            {rest.map((n) => (
              <a key={n.id} href={`/news/${n.id}`} className="nw-item card">
                <img src={n.img} alt="" loading="lazy" />
                <span>
                  <span className="nw-date">{thaiDate(n.date)}</span>
                  <strong>{n.title}</strong>
                  {n.summary && <span className="nw-sum">{n.summary}</span>}
                </span>
              </a>
            ))}
          </div>
        </div>
        <a href="/news" className="nw-all">ดูข่าวทั้งหมด →</a>
      </div>
    </section>
  );
}
