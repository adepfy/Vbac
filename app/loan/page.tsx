import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingContact from '@/components/FloatingContact';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import { getAbout } from '@/lib/content';
import { mediaUrlOrLive } from '@/lib/media';

export const metadata: Metadata = {
  title: 'กองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ.) — VBAC',
  description:
    'ขั้นตอนการกู้ยืม กยศ. เอกสารประกอบการกู้ยืม คุณสมบัติผู้กู้ และวิธีขอรหัสผ่านแอป กยศ. Connect สำหรับนักศึกษา ปวช. / ปวส. วิทยาลัย VBAC',
};

export const revalidate = 300;

// ไฟล์ PDF ชุดเดิมจากเว็บเก่า (โฟลเดอร์ file/) — เปลี่ยนชื่อไฟล์ที่นี่เมื่อมีเอกสารปีใหม่
const DOCS = [
  { file: 'file/เอกสารประกอบการกู้ยืม2564.pdf', title: 'เอกสารประกอบการกู้ยืม', desc: 'รายการเอกสารที่ผู้กู้และผู้ปกครองต้องเตรียม', size: '80 KB' },
  { file: 'file/คุณสมบัติผู้กู้ยืม2564.pdf', title: 'คุณสมบัติผู้กู้ยืม', desc: 'เช็กว่าเข้าเงื่อนไขการกู้ยืมหรือไม่', size: '62 KB' },
  { file: 'file/ขั้นตอนการกู้ยืม2564.pdf', title: 'ขั้นตอนการกู้ยืม', desc: 'ลำดับการยื่นกู้ตั้งแต่ต้นจนจบ', size: '85 KB' },
];

// ถอดความจากอินโฟกราฟิก "การขอรหัสผ่านเข้าระบบ DSL ด้วยแอปพลิเคชัน กยศ. Connect"
const STEPS: { text: string; key?: string }[] = [
  { text: 'เปิดแอป กยศ. Connect แล้วเลือก', key: 'ลงทะเบียนขอสิทธิ์เข้าใช้งาน' },
  { text: 'เลือกช่องทางลงทะเบียน ผ่านแอปเป๋าตัง หรือ', key: 'บัตรประจำตัวประชาชน' },
  { text: 'กรณีใช้บัตรประชาชน กรอกข้อมูลส่วนตัว กดยินยอมตามข้อกำหนดเงื่อนไขการใช้งาน แล้วกด', key: 'ถัดไป' },
  { text: 'เลือกยืนยันตัวตนผ่าน “อีเมล” หรือ “โทรศัพท์มือถือ” แล้วกด', key: 'ถัดไป' },
  { text: 'กรอกรหัส OTP ที่ได้รับทางโทรศัพท์มือถือ แล้วกด', key: 'ยืนยัน' },
  { text: 'ตั้งรหัสผ่าน แล้วกด', key: 'ยืนยัน' },
  { text: 'ลงทะเบียนขอสิทธิ์สำเร็จ' },
  { text: 'เข้าใช้งานครั้งแรก (First Login) กรอกเลขบัตรประชาชนและรหัสผ่าน แล้วกด', key: 'เข้าสู่ระบบ' },
  { text: 'เลือกช่องทางยืนยันตัวตนด้วย OTP แล้วกด', key: 'รับรหัส OTP' },
  { text: 'ตั้งรหัส PIN สำหรับเข้าแอป' },
  { text: 'เข้าสู่หน้าหลักของแอป พร้อมยื่นกู้ได้เลย' },
];

const FLOW = [
  { t: 'สมัครเรียนกับ VBAC', d: 'สมัครระดับ ปวช. หรือ ปวส. และยืนยันสิทธิ์การเป็นนักศึกษา' },
  { t: 'ขอรหัสผ่าน กยศ. Connect', d: 'ลงทะเบียนในแอปตาม 11 ขั้นตอนด้านล่าง เพื่อใช้ยื่นกู้ในระบบ DSL' },
  { t: 'เตรียมเอกสาร', d: 'ดาวน์โหลดรายการเอกสารและเช็กคุณสมบัติผู้กู้ยืม' },
  { t: 'ยื่นกู้และส่งเอกสาร', d: 'ยื่นคำขอกู้ในระบบ แล้วส่งเอกสารให้งาน กยศ. ของวิทยาลัยตรวจสอบ' },
];

const FAQS = [
  {
    q: 'นักศึกษาใหม่กู้ กยศ. ได้ไหม?',
    a: 'ได้ ทั้งนักศึกษาใหม่และนักศึกษาปัจจุบันระดับ ปวช. และ ปวส. สามารถยื่นกู้ได้ตามรอบที่กองทุนเปิดในแต่ละปีการศึกษา',
  },
  {
    q: 'ต้องเริ่มจากตรงไหน?',
    a: 'เริ่มจากขอรหัสผ่านในแอป กยศ. Connect ก่อน (ดูขั้นตอนในหน้านี้) จากนั้นเตรียมเอกสารตามไฟล์ “เอกสารประกอบการกู้ยืม” แล้วติดต่องาน กยศ. ของวิทยาลัย',
  },
  {
    q: 'จะรู้ได้อย่างไรว่าเข้าเงื่อนไขการกู้?',
    a: 'ดาวน์โหลดไฟล์ “คุณสมบัติผู้กู้ยืม” ในหน้านี้ และตรวจสอบประกาศล่าสุดที่เว็บไซต์ studentloan.or.th เพราะเงื่อนไขอาจเปลี่ยนแปลงในแต่ละปี',
  },
  {
    q: 'ลืมรหัสผ่านหรือเข้าแอปไม่ได้ ทำอย่างไร?',
    a: 'ใช้เมนูลืมรหัสผ่านในแอป กยศ. Connect หรือโทรสอบถามศูนย์บริการของ กยศ. โดยตรงที่ 0-2016-4888',
  },
];

export default async function LoanPage() {
  const about = await getAbout();
  const tel = about.telephone.split(/[-–,]/)[0].replace(/[^\d+]/g, '');
  const nav = [
    ['overview', 'ภาพรวม'],
    ['docs', 'เอกสารดาวน์โหลด'],
    ['connect', 'สมัคร กยศ. Connect'],
    ['faq', 'คำถามที่พบบ่อย'],
    ['contact', 'ติดต่องาน กยศ.'],
  ] as const;

  return (
    <div className="page-root">
      <FloatingContact about={about} />
      <Header />
      <main>
        <PageHero
          title="กองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ.)"
          subtitle="ทุนทรัพย์ไม่ใช่อุปสรรคของการเรียน — นักศึกษา ปวช. และ ปวส. ที่ VBAC กู้ยืม กยศ. ได้ พร้อมเจ้าหน้าที่ช่วยดูแลทุกขั้นตอน"
          crumbs={[{ label: 'หน้าแรก', href: '/vbac_next/' }, { label: 'บริการนักศึกษา' }, { label: 'กองทุน กยศ.' }]}
        />

        <nav aria-label="หัวข้อในหน้า กยศ." className="ab-subnav">
          <div className="ab-wrap ab-chips">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="ab-chip">{label}</a>
            ))}
          </div>
        </nav>

        {/* ภาพรวม */}
        <section aria-labelledby="overview" className="ab-section">
          <SectionTitle id="overview" accent=" กยศ.">กู้ยืมเพื่อการศึกษา</SectionTitle>
          <div className="ab-wrap ab-split">
            <div className="ab-col">
              <span className="ab-kicker">เรียนก่อน ผ่อนทีหลัง</span>
              <p className="ab-lead">
                กองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ.) คือกองทุนของรัฐที่ให้นักเรียน นักศึกษากู้ยืมเงินไปใช้เป็นค่าเล่าเรียนและค่าใช้จ่ายที่เกี่ยวเนื่องกับการศึกษา แล้วค่อยผ่อนชำระคืนหลังเรียนจบ
              </p>
              <p className="ab-body">
                วิทยาลัยเทคโนโลยีวิบูลย์บริหารธุรกิจ รามอินทรา (VBAC) เป็นสถานศึกษาที่ร่วมโครงการ นักศึกษาทั้งระดับ ปวช. และ ปวส. ยื่นกู้ผ่านระบบ DSL บนแอป กยศ. Connect ได้ โดยมีงาน กยศ. ของวิทยาลัยคอยตรวจเอกสารและให้คำแนะนำ
              </p>
              <div className="ab-facts">
                <div className="ab-fact ab-fact-red"><strong>ปวช.</strong><span>และ ปวส. กู้ได้</span></div>
                <div className="ab-fact"><strong>DSL</strong><span>ยื่นกู้ออนไลน์</span></div>
                <div className="ab-fact"><strong>11</strong><span>ขั้นตอนขอรหัสผ่าน</span></div>
              </div>
            </div>
            <ol className="ln-flow">
              {FLOW.map((f, i) => (
                <li key={f.t}>
                  <span className="ln-flow-num">{i + 1}</span>
                  <div>
                    <strong>{f.t}</strong>
                    <span>{f.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* เอกสารดาวน์โหลด */}
        <section aria-labelledby="docs" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ right: '-60px', top: '20px', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="docs" accent="ดาวน์โหลด">เอกสาร</SectionTitle>
          <div className="ab-wrap">
            <ul className="ln-docs">
              {DOCS.map((d) => (
                <li key={d.file}>
                  <a href={mediaUrlOrLive(d.file)} target="_blank" rel="noopener noreferrer" className="ln-doc card">
                    <span className="ln-doc-icon" aria-hidden="true">PDF</span>
                    <span className="ln-doc-text">
                      <strong>{d.title}</strong>
                      <span>{d.desc}</span>
                      <small>ไฟล์ PDF · {d.size}</small>
                    </span>
                    <span className="ln-doc-dl" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="st-hint">
              เอกสารชุดนี้เป็นฉบับปี 2564 กรุณาตรวจสอบประกาศและเงื่อนไขล่าสุดที่{' '}
              <a href="https://www.studentloan.or.th" target="_blank" rel="noopener noreferrer">studentloan.or.th</a>{' '}
              หรือสอบถามงาน กยศ. ของวิทยาลัยก่อนยื่นกู้
            </p>
          </div>
        </section>

        {/* กยศ. Connect */}
        <section aria-labelledby="connect" className="ab-section">
          <SectionTitle id="connect" accent=" กยศ. Connect">แอป</SectionTitle>
          <div className="ab-wrap">
            <p className="ab-body ln-intro">
              ก่อนยื่นกู้ต้องมีรหัสผ่านเข้าระบบ DSL ก่อน ดาวน์โหลดแอป <strong>กยศ. Connect</strong> จาก App Store หรือ Google Play แล้วทำตามขั้นตอนนี้
            </p>
            <ol className="ln-steps">
              {STEPS.map((s, i) => (
                <li key={i} className="ln-step">
                  <span className="ln-step-num">{i + 1}</span>
                  <p>
                    {s.text}
                    {s.key && <> <b>“{s.key}”</b></>}
                  </p>
                </li>
              ))}
            </ol>
            <figure className="ln-info">
              <a href="/vbac_next/images/loan-connect.jpg" target="_blank" rel="noopener noreferrer" className="card">
                <img
                  src="/vbac_next/images/loan-connect.jpg"
                  alt="อินโฟกราฟิก 11 ขั้นตอนการขอรหัสผ่านเข้าระบบ DSL ด้วยแอปพลิเคชัน กยศ. Connect"
                  width={2000}
                  height={1414}
                  loading="lazy"
                />
              </a>
              <figcaption>
                อินโฟกราฟิกจาก กยศ. · กดที่รูปเพื่อขยาย หรือ{' '}
                <a href={mediaUrlOrLive('images/loan_connect.png')} target="_blank" rel="noopener noreferrer">ดาวน์โหลดภาพความละเอียดสูง (8.8 MB)</a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section aria-labelledby="faq" className="ab-section ab-pink">
          <div className="netr" aria-hidden="true" style={{ left: '-60px', top: '20px', transform: 'scaleX(-1)', width: '560px', height: '385px', opacity: 0.12 }} />
          <SectionTitle id="faq" accent="ที่พบบ่อย">คำถาม</SectionTitle>
          <div className="ab-wrap ln-faqs">
            {FAQS.map((f) => (
              <details key={f.q} className="faq ln-faq">
                <summary>
                  <span className="plus" aria-hidden="true">+</span>
                  {f.q}
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ติดต่อ */}
        <section aria-labelledby="contact" className="ab-section">
          <SectionTitle id="contact" accent=" กยศ.">ติดต่องาน</SectionTitle>
          <div className="ab-wrap ln-contact">
            <div className="ln-cta">
              <h3>มีคำถามเรื่องกู้ยืม? คุยกับเราได้เลย</h3>
              <p>งาน กยศ. / ฝ่ายแนะแนว วิทยาลัย VBAC ช่วยตรวจเอกสารและแนะนำขั้นตอนให้ทั้งนักศึกษาและผู้ปกครอง</p>
              <div className="ln-cta-btns">
                {tel && <a href={`tel:${tel}`} className="ln-btn ln-btn-light">โทร {about.telephone}</a>}
                <a href={about.line} target="_blank" rel="noopener noreferrer" className="ln-btn ln-btn-line">แชท LINE</a>
                <a href={about.facebook} target="_blank" rel="noopener noreferrer" className="ln-btn ln-btn-ghost">Facebook</a>
              </div>
            </div>
            <div className="ln-official card">
              <span className="ab-kicker">ช่องทางทางการของ กยศ.</span>
              <a href="https://www.studentloan.or.th" target="_blank" rel="noopener noreferrer">
                <strong>www.studentloan.or.th</strong>
                <span>ประกาศ ข่าวสาร และเงื่อนไขล่าสุด</span>
              </a>
              <a href="tel:020164888">
                <strong>0-2016-4888</strong>
                <span>ศูนย์บริการข้อมูล กยศ.</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer about={about} />
    </div>
  );
}
