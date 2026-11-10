'use client';

import { useActionState, useState } from 'react';
import { submitRegistration, type RegisterState } from '@/app/register/actions';

type Option = { value: string; label: string };

const GRADES: Option[] = [
  { value: 'm3', label: 'ม.3' },
  { value: 'm6', label: 'ม.6' },
  { value: 'ksn', label: 'กศน.' },
  { value: 'other', label: 'อื่นๆ' },
];
const CHANNELS: Option[] = [
  { value: 'web', label: 'Website' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'line', label: 'LINE' },
  { value: 'friend', label: 'เพื่อนแนะนำ' },
  { value: 'advers', label: 'ป้ายโฆษณา' },
  { value: 'guide', label: 'แนะแนวการศึกษา' },
  { value: 'other', label: 'อื่นๆ' },
];

export default function RegisterForm({
  majors,
  defaultLevel,
  promotion,
}: {
  majors: Option[];
  defaultLevel: '1' | '2';
  promotion: boolean;
}) {
  const [state, action, pending] = useActionState<RegisterState, FormData>(submitRegistration, { errors: {} });
  const v = state.values || {};
  const e = state.errors;
  const [level, setLevel] = useState<string>(v.level || defaultLevel);
  const [grade, setGrade] = useState<string>(v.grade || '');
  const [hasRef, setHasRef] = useState<boolean>(Boolean(v.reference));

  const err = (k: keyof typeof e) =>
    e[k] ? <span className="rg-err" id={`err-${k}`}>{e[k]}</span> : null;
  const aria = (k: keyof typeof e) => (e[k] ? { 'aria-invalid': true, 'aria-describedby': `err-${k}` } : {});

  return (
    <form action={action} className="rg-form" noValidate>
      <input type="hidden" name="promotion" value={promotion ? '1' : '0'} />
      {/* honeypot */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label>เว็บไซต์<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {state.message && (
        <div role="alert" className="rg-alert">{state.message}</div>
      )}

      {/* 1. หลักสูตร */}
      <fieldset className="rg-card">
        <legend><span className="rg-step">1</span>เลือกหลักสูตร</legend>
        <div className="rg-levels" role="radiogroup" aria-label="ระดับที่สมัคร">
          {([['1', 'ปวช.', 'ประกาศนียบัตรวิชาชีพ · สำหรับผู้จบ ม.3'], ['2', 'ปวส.', 'ประกาศนียบัตรวิชาชีพชั้นสูง · สำหรับผู้จบ ม.6 / ปวช.']] as const).map(([val, name, sub]) => (
            <label key={val} className={`rg-level${level === val ? ' on' : ''}`}>
              <input type="radio" name="level" value={val} checked={level === val} onChange={() => setLevel(val)} />
              <strong>{name}</strong>
              <span>{sub}</span>
            </label>
          ))}
        </div>
        {err('level')}
        <div className="rg-grid">
          <label className="rg-field">
            <span>สาขาที่ต้องการเรียน <b>*</b></span>
            <select name="major" defaultValue={v.major || ''} required {...aria('major')}>
              <option value="" disabled>เลือกสาขา</option>
              {majors.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
            </select>
            {err('major')}
          </label>
          <label className="rg-field">
            <span>ภาคเรียน <b>*</b></span>
            <select name="term" defaultValue={v.term || 'ภาคปกติ'} required {...aria('term')}>
              <option value="ภาคปกติ">ภาคปกติ</option>
              <option value="ภาคพิเศษ">ภาคพิเศษ</option>
            </select>
            {err('term')}
          </label>
        </div>
      </fieldset>

      {/* 2. ข้อมูลผู้สมัคร */}
      <fieldset className="rg-card">
        <legend><span className="rg-step">2</span>ข้อมูลผู้สมัคร</legend>
        <div className="rg-grid">
          <label className="rg-field">
            <span>ชื่อจริง <b>*</b></span>
            <input name="fname" defaultValue={v.fname} autoComplete="given-name" required {...aria('fname')} />
            {err('fname')}
          </label>
          <label className="rg-field">
            <span>นามสกุล <b>*</b></span>
            <input name="sname" defaultValue={v.sname} autoComplete="family-name" required {...aria('sname')} />
            {err('sname')}
          </label>
          <label className="rg-field">
            <span>ชื่อเล่น</span>
            <input name="nickname" defaultValue={v.nickname} />
          </label>
        </div>
        <div className="rg-field">
          <span id="grade-label">ปัจจุบันอยู่ชั้น <b>*</b></span>
          <div className="rg-pills" role="radiogroup" aria-labelledby="grade-label">
            {GRADES.map((g) => (
              <label key={g.value} className={`rg-pill${grade === g.value ? ' on' : ''}`}>
                <input type="radio" name="grade" value={g.value} checked={grade === g.value} onChange={() => setGrade(g.value)} />
                {g.label}
              </label>
            ))}
          </div>
          {err('grade')}
          {grade === 'other' && (
            <label className="rg-field" style={{ marginTop: 10 }}>
              <span>โปรดระบุ <b>*</b></span>
              <input name="grade_other" defaultValue={v.grade_other} {...aria('gradeOther')} />
              {err('gradeOther')}
            </label>
          )}
        </div>
        <div className="rg-grid">
          <label className="rg-field">
            <span>มาจากโรงเรียน</span>
            <input name="school" defaultValue={v.school} />
          </label>
          <label className="rg-field">
            <span>ห้องเรียน</span>
            <input name="school_room" defaultValue={v.school_room} placeholder="เช่น ม.3/2" />
          </label>
        </div>
      </fieldset>

      {/* 3. ที่อยู่ */}
      <fieldset className="rg-card">
        <legend><span className="rg-step">3</span>ที่อยู่ปัจจุบัน</legend>
        <div className="rg-grid rg-grid-4">
          <label className="rg-field">
            <span>บ้านเลขที่ <b>*</b></span>
            <input name="address" defaultValue={v.address} required {...aria('address')} />
            {err('address')}
          </label>
          <label className="rg-field"><span>หมู่บ้าน</span><input name="village" defaultValue={v.village} /></label>
          <label className="rg-field"><span>ซอย</span><input name="soi" defaultValue={v.soi} /></label>
          <label className="rg-field"><span>ถนน</span><input name="road" defaultValue={v.road} /></label>
          <label className="rg-field"><span>แขวง / ตำบล</span><input name="subdistrict" defaultValue={v.subdistrict} /></label>
          <label className="rg-field"><span>เขต / อำเภอ</span><input name="district" defaultValue={v.district} /></label>
          <label className="rg-field"><span>จังหวัด</span><input name="province" defaultValue={v.province} autoComplete="address-level1" /></label>
          <label className="rg-field">
            <span>รหัสไปรษณีย์</span>
            <input name="zipcode" defaultValue={v.zipcode} inputMode="numeric" maxLength={5} autoComplete="postal-code" {...aria('zipcode')} />
            {err('zipcode')}
          </label>
        </div>
      </fieldset>

      {/* 4. ติดต่อ */}
      <fieldset className="rg-card">
        <legend><span className="rg-step">4</span>ช่องทางติดต่อ</legend>
        <div className="rg-grid">
          <label className="rg-field">
            <span>เบอร์โทรศัพท์ <b>*</b></span>
            <input name="tel1" type="tel" defaultValue={v.tel1} autoComplete="tel" required {...aria('tel1')} />
            {err('tel1')}
          </label>
          <label className="rg-field">
            <span>เบอร์โทรผู้ปกครอง</span>
            <input name="tel2" type="tel" defaultValue={v.tel2} {...aria('tel2')} />
            {err('tel2')}
          </label>
          <label className="rg-field">
            <span>อีเมล</span>
            <input name="email" type="email" defaultValue={v.email} autoComplete="email" {...aria('email')} />
            {err('email')}
          </label>
          <label className="rg-field"><span>LINE ID</span><input name="line_id" defaultValue={v.line_id} /></label>
          <label className="rg-field"><span>Facebook</span><input name="facebook" defaultValue={v.facebook} /></label>
        </div>
        <div className="rg-field">
          <span id="ch-label">รู้จัก VBAC จากช่องทางไหน</span>
          <div className="rg-pills" role="radiogroup" aria-labelledby="ch-label">
            {CHANNELS.map((c) => (
              <label key={c.value} className="rg-pill">
                <input type="radio" name="channel" value={c.value} defaultChecked={(v.channel || 'web') === c.value} />
                {c.label}
              </label>
            ))}
          </div>
        </div>
        <div className="rg-field">
          <label className="rg-check">
            <input type="checkbox" checked={hasRef} onChange={(ev) => setHasRef(ev.target.checked)} />
            มีผู้แนะนำ
          </label>
          {hasRef && (
            <label className="rg-field" style={{ marginTop: 10 }}>
              <span>ชื่อผู้แนะนำ</span>
              <input name="reference" defaultValue={v.reference} />
            </label>
          )}
        </div>
      </fieldset>

      <div className="rg-submit">
        <p>เมื่อกดส่งใบสมัคร เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันข้อมูล ข้อมูลของท่านใช้เพื่อการรับสมัครเรียนเท่านั้น</p>
        <button type="submit" disabled={pending}>
          {pending ? 'กำลังส่ง…' : 'ส่งใบสมัคร'}
        </button>
      </div>
    </form>
  );
}
