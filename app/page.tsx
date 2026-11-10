import FloatingContact from '@/components/FloatingContact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryCards from '@/components/CategoryCards';
import Programs from '@/components/Programs';
import Showcase from '@/components/Showcase';
import Update from '@/components/Update';
import Idols from '@/components/Idols';
import Bento from '@/components/Bento';
import Quotients from '@/components/Quotients';
import Faq from '@/components/Faq';
import Network from '@/components/Network';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import News from '@/components/News';
import { getAbout, getBanners, getCalendar, getLatestNews } from '@/lib/content';

export const revalidate = 300;

export default async function Home() {
  const [about, banners, calendar, news] = await Promise.all([getAbout(), getBanners(), getCalendar(), getLatestNews(4)]);
  return (
    <div style={{ fontFamily: "var(--font-kanit), 'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#120A0B", background: "#FFFFFF", width: "100%", overflowX: "clip" }}>
      <FloatingContact about={about} />
      <Header />
      <Hero banners={banners} />
      <CategoryCards />
      <Programs />
      <News items={news} />
      <Update events={calendar.events} monthLabel={calendar.label} />
      <Showcase />
      <Idols />
      <Bento />
      <Quotients />
      <Faq />
      <Network />
      <Cta />
      <Footer about={about} />
    </div>
  );
}
