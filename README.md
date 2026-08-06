# การบริหาร: จากทฤษฎีสู่การปฏิบัติ — Next.js Presentation App

เว็บแอปนำเสนอเนื้อหาเรื่องแนวคิดและหลักการบริหาร (Fayol, Toyota, Google, Amazon,
Agile/Scrum/Kanban, หลักอิสลามและพุทธศาสนา) สร้างด้วย Next.js 14 (App Router) + React + lucide-react

## วิธีใช้งาน

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## Build สำหรับ production

```bash
npm run build
npm start
```

## โครงสร้างโปรเจกต์

```
app/
  layout.js     ← โหลดฟอนต์ภาษาไทย (Noto Serif Thai, Noto Sans Thai, IBM Plex Mono)
  page.js       ← เนื้อหาเว็บแอปทั้งหมด (10 บท, ไอคอน, แอนิเมชัน)
  globals.css   ← reset สไตล์พื้นฐาน
```

หน้าเดียว (`app/page.js`) ควบคุมการสลับ "บท" ด้วย state ภายในไฟล์เดียว — สามารถแยกแต่ละ
component (Hero, Fayol, Cases, Ethics ฯลฯ) ออกเป็นไฟล์ย่อยใน `app/components/` ได้ถ้าต้องการ
ขยายต่อ

## Deploy

โปรเจกต์นี้ deploy ขึ้น [Vercel](https://vercel.com) ได้ทันทีโดยไม่ต้องตั้งค่าเพิ่มเติม
(กด "Import Project" แล้วเลือกโฟลเดอร์นี้ หรือ push ขึ้น GitHub แล้วเชื่อมกับ Vercel)
