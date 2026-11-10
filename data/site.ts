// ข้อมูลหน้าเว็บ — แก้เนื้อหาได้ที่ไฟล์นี้ไฟล์เดียว

export const ACCENT = "#C8102E";

export type Program = { code: string; th: string; en: string; color: string; slug?: string };

export type Event = { day: string; month?: string; title: string; bg: string; fg: string; opacity: string; status: string };

export type Quotient = { code: string; th: string; en: string };

export type Idol = { name: string; role: string; img: string };

export type Faq = { q: string; a: string };


export const programs: Program[] = [
  {
    "code": "IT",
    "th": "เทคโนโลยีสารสนเทศ",
    "en": "Information Technology",
    "color": "#1F4FD1"
  },
  {
    "code": "DBT",
    "th": "เทคโนโลยีธุรกิจดิจิทัล",
    "en": "Digital Business Technology",
    "color": "#7C3AED"
  },
  {
    "code": "DG",
    "th": "ดิจิทัลกราฟิก",
    "en": "Digital Graphics",
    "color": "#C2410C"
  },
  {
    "code": "MK",
    "th": "การตลาด",
    "en": "Marketing",
    "color": "#BE185D"
  },
  {
    "code": "TOUR",
    "th": "การท่องเที่ยว",
    "en": "Tourism",
    "color": "#0F766E"
  },
  {
    "code": "AC",
    "th": "การบัญชี",
    "en": "Accounting",
    "color": "#15803D"
  },
  {
    "code": "LOG",
    "th": "โลจิสติกส์และซัพพลายเชน",
    "en": "Logistics and Supply Chain",
    "color": "#B45309"
  },
  {
    "code": "MG",
    "th": "การจัดการ",
    "en": "Management",
    "color": "#C8102E"
  }
];

export const events: Event[] = [
  {
    "day": "02",
    "title": "เปิดภาคเรียนที่ 2/2026",
    "bg": "#FBF8F6",
    "fg": "#8A7F7B",
    "opacity": "0.7",
    "status": "ผ่านไปแล้ว"
  },
  {
    "day": "06",
    "title": "กิจกรรม VBAC Back to School",
    "bg": "#FBF8F6",
    "fg": "#8A7F7B",
    "opacity": "0.7",
    "status": "ผ่านไปแล้ว"
  },
  {
    "day": "07–08",
    "title": "การแข่งขัน JATURAMITR ESPORTS",
    "bg": "#FBF8F6",
    "fg": "#8A7F7B",
    "opacity": "0.7",
    "status": "ผ่านไปแล้ว"
  },
  {
    "day": "15",
    "title": "วันสถาปนาวิทยาลัย",
    "bg": "#FFFFFF",
    "fg": "#C8102E",
    "opacity": "1",
    "status": "กำลังจะมาถึง"
  },
  {
    "day": "24",
    "title": "สืบสานประเพณีลอยกระทง",
    "bg": "#FFFFFF",
    "fg": "#C8102E",
    "opacity": "1",
    "status": "กำลังจะมาถึง"
  },
  {
    "day": "27",
    "title": "กิจกรรม Animal Games ครั้งที่ 28",
    "bg": "#FFFFFF",
    "fg": "#C8102E",
    "opacity": "1",
    "status": "กำลังจะมาถึง"
  }
];

export const quotients: Quotient[] = [
  {
    "code": "IQ",
    "th": "ความฉลาดทางสติปัญญา",
    "en": "Intelligence Quotient"
  },
  {
    "code": "EQ",
    "th": "ความฉลาดทางอารมณ์",
    "en": "Emotional Quotient"
  },
  {
    "code": "CQ",
    "th": "ความฉลาดในการริเริ่มสร้างสรรค์",
    "en": "Creativity Quotient"
  },
  {
    "code": "MQ",
    "th": "ความฉลาดทางศีลธรรม จริยธรรม",
    "en": "Moral Quotient"
  },
  {
    "code": "PQ",
    "th": "ความฉลาดที่เกิดจากการเล่น",
    "en": "Play Quotient"
  },
  {
    "code": "AQ",
    "th": "ความฉลาดในการฝ่าฟันอุปสรรค",
    "en": "Adversity Quotient"
  },
  {
    "code": "SQ",
    "th": "ความฉลาดในการเข้าสังคม",
    "en": "Social Quotient"
  }
];

export const idols: Idol[] = [
  {
    "name": "แสงอาทิตย์ ลูกทรายกองดิน",
    "role": "แชมป์มวยสากล WBA เอเชีย",
    "img": "/images/idol1.jpg"
  },
  {
    "name": "ชัยดาเนีย ลูกทรายกองดิน",
    "role": "นักมวยหญิงระดับแชมป์",
    "img": "/images/idol2.jpg"
  },
  {
    "name": "ปกรณ์ เสือเพชร",
    "role": "เจ้าของร้าน Bascutz Hairstyle",
    "img": "/images/idol3.jpg"
  },
  {
    "name": "เกียรติศักดิ์ นะเป้า",
    "role": "เจ้าของบริษัทอุปกรณ์ไอที",
    "img": "/images/idol4.jpg"
  },
  {
    "name": "วราภรณ์ ปานนาค",
    "role": "เจ้าของร้านค้าออนไลน์",
    "img": "/images/idol5.jpg"
  }
];

export const faqs: Faq[] = [
  {
    "q": "VBAC เปิดสอนระดับไหนบ้าง?",
    "a": "เปิดสอนระดับ ปวช. (3 ปี) และ ปวส. (2 ปี) รวม 8 สาขาวิชา"
  },
  {
    "q": "สมัครเรียนต้องใช้เอกสารอะไรบ้าง?",
    "a": "[ใส่รายการเอกสารการสมัคร]"
  },
  {
    "q": "กู้ กยศ. ได้ไหม?",
    "a": "ได้ วิทยาลัยรองรับกองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ.) สอบถามรายละเอียดได้ที่ฝ่ายแนะแนว"
  },
  {
    "q": "จบ ปวส. แล้วต่อ ป.ตรี ได้ที่ไหน?",
    "a": "ต่อได้กับเครือข่าย 6 มหาวิทยาลัยชั้นนำ พร้อมสิทธิ์รับทุนการศึกษา"
  },
  {
    "q": "ค่าเทอมเท่าไหร่ และชำระอย่างไร?",
    "a": "[ใส่อัตราค่าเทอมและช่องทางชำระเงิน]"
  },
  {
    "q": "เดินทางมาวิทยาลัยอย่างไร?",
    "a": "[ใส่ที่ตั้งและการเดินทาง]"
  }
];
