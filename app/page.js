"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Compass, Target, Users, RefreshCw, ClipboardList, Building2, Rocket,
  GitBranch, Cpu, HeartHandshake, Scale, Sparkles, BookOpen, ChevronRight,
  ChevronDown, CheckCircle2, Menu, X, Quote, Globe, Factory, ShoppingCart,
  Award, Brain, Lightbulb, Shield, TrendingUp, BarChart3, Database,
  Workflow, LayoutGrid, MessageCircle, Feather, MessageSquare, Leaf,
  Flame, Wind, Eye, Wallet, Clock, Wrench, Server, Layers, Star,
  ArrowRight, Quote as QuoteIcon, PieChart, Zap, GitPullRequest,
  CircleDot, Code2, Trello as TrelloIcon, Landmark, Search
} from "lucide-react";

const COLORS = {
  bg: "#0B0F1A",
  surface: "#131A2A",
  surface2: "#1B2438",
  border: "#2A3450",
  gold: "#D9A94C",
  goldSoft: "#E8C888",
  teal: "#4FB0A5",
  text: "#ECE8DE",
  muted: "#8D94A8",
};

const fontDisplay = { fontFamily: "'Noto Serif Thai', serif" };
const fontBody = { fontFamily: "'Noto Sans Thai', sans-serif" };
const fontMono = { fontFamily: "'IBM Plex Mono', monospace" };

const NAV = [
  { id: "hero", label: "เปิดเรื่อง", icon: Compass },
  { id: "intro", label: "ความหมาย & ความสำคัญ", icon: BookOpen },
  { id: "pdca", label: "วงจรการบริหาร PDCA", icon: RefreshCw },
  { id: "fayol", label: "14 หลักการของ Fayol", icon: ClipboardList },
  { id: "levels", label: "ระดับ & ประเภทผู้บริหาร", icon: Building2 },
  { id: "cases", label: "กรณีศึกษาระดับโลก", icon: Factory },
  { id: "it", label: "การบริหารสาย IT", icon: GitBranch },
  { id: "ethics", label: "คุณธรรมในการบริหาร", icon: HeartHandshake },
  { id: "future", label: "ทักษะยุคใหม่ & Data", icon: Brain },
  { id: "outro", label: "บทสรุป & อ้างอิง", icon: Sparkles },
];

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          ...fontMono,
          color: COLORS.gold,
          fontSize: 13,
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        {eyebrow}
      </div>
      <h2 style={{ ...fontDisplay, color: COLORS.text, fontSize: 34, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
        {title}
      </h2>
      {sub && (
        <p style={{ ...fontBody, color: COLORS.muted, fontSize: 16, marginTop: 12, maxWidth: 680, lineHeight: 1.8 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Card({ children, style, hover = true, ...props }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${h && hover ? COLORS.gold : COLORS.border}`,
        borderRadius: 14,
        padding: 22,
        transition: "all 0.35s ease",
        transform: h && hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: h && hover ? "0 12px 30px rgba(217,169,76,0.12)" : "0 2px 8px rgba(0,0,0,0.2)",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function IconBadge({ Icon, color = COLORS.gold, size = 22 }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: `${color}1a`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon size={size} color={color} strokeWidth={2} />
    </div>
  );
}

/* ---------- HERO ---------- */
function PDCAWheel() {
  const [active, setActive] = useState(0);
  const items = [
    { label: "Plan", th: "วางแผน", icon: Target, color: COLORS.gold, desc: "กำหนดว่าจะทำอะไร ทำไม ใช้ทรัพยากรเท่าไร เช่น วางแผนพัฒนาแอปภายใน 3 เดือน" },
    { label: "Organize", th: "จัดองค์การ", icon: Users, color: COLORS.teal, desc: "จัดคนและหน้าที่ให้ชัดเจน เช่น แบ่งทีม PM / Designer / Developer / QA" },
    { label: "Lead", th: "นำ", icon: Flame, color: "#E08A4A", desc: "สื่อสาร สร้างแรงจูงใจ และทำให้ทีมเห็นเป้าหมายร่วมกัน ไม่ใช่แค่สั่งงาน" },
    { label: "Control", th: "ควบคุม", icon: Eye, color: "#7C93D9", desc: "ตรวจสอบผลลัพธ์เทียบกับเป้าหมาย แล้วนำไปปรับปรุงอย่างต่อเนื่อง" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <div style={{ position: "relative", width: 300, height: 300 }}>
        <div
          style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: `1px dashed ${COLORS.border}`,
            animation: "spin 40s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute", inset: 30, borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.surface2} 0%, ${COLORS.bg} 100%)`,
            border: `1px solid ${COLORS.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ ...fontMono, color: COLORS.muted, fontSize: 11, letterSpacing: 2 }}>MANAGEMENT / การบริหาร</div>
          <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 22, fontWeight: 700 }}>CYCLE / วงจร</div>
        </div>
        {items.map((it, i) => {
          const angle = i * 90 - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 150;
          const x = 150 + r * Math.cos(rad);
          const y = 150 + r * Math.sin(rad);
          const Icon = it.icon;
          const isActive = active === i;
          return (
            <button
              key={it.label}
              onClick={() => setActive(i)}
              style={{
                position: "absolute",
                left: x - 32, top: y - 32,
                width: 64, height: 64,
                borderRadius: "50%",
                background: isActive ? it.color : COLORS.surface,
                border: `2px solid ${it.color}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: isActive ? `0 0 24px ${it.color}66` : "none",
                transform: isActive ? "scale(1.12)" : "scale(1)",
              }}
            >
              <Icon size={26} color={isActive ? COLORS.bg : it.color} strokeWidth={2.2} />
            </button>
          );
        })}
      </div>
      <div
        key={active}
        style={{
          textAlign: "center", maxWidth: 460, animation: "fadeSlide 0.4s ease",
          background: COLORS.surface, border: `1px solid ${COLORS.border}`,
          borderRadius: 14, padding: "18px 24px",
        }}
      >
        <div style={{ ...fontMono, color: items[active].color, fontSize: 12, letterSpacing: 2, marginBottom: 4 }}>
          {items[active].label.toUpperCase()}
        </div>
        <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
          {items[active].th}
        </div>
        <div style={{ ...fontBody, color: COLORS.muted, fontSize: 14.5, lineHeight: 1.7 }}>
          {items[active].desc}
        </div>
      </div>
    </div>
  );
}

function Hero({ goTo }) {
  return (
    <div style={{ paddingTop: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <Sparkles size={16} color={COLORS.gold} />
        <span style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3 }}>PRINCIPLES OF MANAGEMENT / หลักการบริหาร</span>
      </div>
      <h1 style={{ ...fontDisplay, color: COLORS.text, fontSize: 48, fontWeight: 700, lineHeight: 1.25, margin: 0, maxWidth: 720 }}>
        การบริหาร: จาก<span style={{ color: COLORS.gold }}>ทฤษฎี</span>
        <br />สู่<span style={{ color: COLORS.teal }}>การปฏิบัติ</span>จริง
      </h1>
      <p style={{ ...fontBody, color: COLORS.muted, fontSize: 17, lineHeight: 1.9, maxWidth: 620, marginTop: 20 }}>
        รวมแนวคิด หลักการ และกรณีศึกษาด้านการบริหาร ตั้งแต่ทฤษฎีคลาสสิกของ Henri Fayol
        องค์กรระดับโลกอย่าง Toyota, Google และ Amazon ไปจนถึงแนวทาง Agile ในสาย IT
        และคุณธรรมผู้นำจากหลักอิสลามและพุทธศาสนา
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
        <button
          onClick={() => goTo("intro")}
          style={{
            ...fontBody, background: COLORS.gold, color: COLORS.bg, border: "none",
            padding: "13px 26px", borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
          }}
        >
          เริ่มอ่าน <ArrowRight size={17} />
        </button>
        <button
          onClick={() => goTo("cases")}
          style={{
            ...fontBody, background: "transparent", color: COLORS.text,
            border: `1px solid ${COLORS.border}`, padding: "13px 26px", borderRadius: 10,
            fontSize: 15, fontWeight: 600, cursor: "pointer",
          }}
        >
          ดูกรณีศึกษา
        </button>
      </div>

      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr", justifyItems: "center" }}>
        <PDCAWheel />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 14, marginTop: 56 }}>
        {[
          { n: "14", l: "หลักการของ Fayol", icon: ClipboardList },
          { n: "3", l: "กรณีศึกษาองค์กร", icon: Factory },
          { n: "3", l: "ระดับผู้บริหาร", icon: Layers },
          { n: "2", l: "แนวคิดคุณธรรม", icon: HeartHandshake },
        ].map((s) => (
          <Card key={s.l} style={{ textAlign: "center" }}>
            <s.icon size={20} color={COLORS.teal} style={{ marginBottom: 8 }} />
            <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 26, fontWeight: 700 }}>{s.n}</div>
            <div style={{ ...fontBody, color: COLORS.muted, fontSize: 12.5 }}>{s.l}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------- INTRO ---------- */
function Intro() {
  const resources = [
    { icon: Users, l: "บุคลากร" }, { icon: Wallet, l: "เงินทุน" }, { icon: Clock, l: "เวลา" },
    { icon: Wrench, l: "เครื่องมือ" }, { icon: Cpu, l: "เทคโนโลยี" }, { icon: Database, l: "ข้อมูล" },
    { icon: Building2, l: "อาคารสถานที่" }, { icon: GitBranch, l: "เครือข่าย" },
  ];
  const importance = [
    { icon: Target, t: "ทำให้องค์กรมีเป้าหมาย", d: "กำหนดทิศทางไม่ให้แต่ละคนทำงานคนละทาง" },
    { icon: PieChart, t: "ใช้ทรัพยากรอย่างมีประสิทธิภาพ", d: "จัดลำดับความสำคัญภายใต้ทรัพยากรจำกัด" },
    { icon: Layers, t: "ลดความซ้ำซ้อน", d: "กำหนดใครทำอะไร เมื่อไร รับผิดชอบอะไร" },
    { icon: Lightbulb, t: "ช่วยแก้ปัญหา", d: "วิเคราะห์และเลือกแนวทางที่เหมาะสม" },
    { icon: RefreshCw, t: "ช่วยให้องค์กรปรับตัว", d: "รับมือ AI, Cloud, Cybersecurity และตลาดที่เปลี่ยนเร็ว" },
  ];
  return (
    <div>
      <SectionTitle
        eyebrow="บทที่ 01"
        title="การบริหารคืออะไร"
        sub="กระบวนการที่บุคคลหรือกลุ่มบุคคลใช้วางแผน จัดองค์การ นำบุคลากร และควบคุมทรัพยากร เพื่อให้องค์กรบรรลุเป้าหมายที่กำหนดไว้"
      />

      <Card style={{ marginBottom: 28 }}>
        <div style={{ ...fontMono, color: COLORS.teal, fontSize: 12, letterSpacing: 2, marginBottom: 14 }}>ทรัพยากรที่ต้องบริหาร</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 12 }}>
          {resources.map((r) => (
            <div key={r.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: 14, background: COLORS.surface2, borderRadius: 10 }}>
              <r.icon size={22} color={COLORS.gold} />
              <span style={{ ...fontBody, color: COLORS.text, fontSize: 13, textAlign: "center" }}>{r.l}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
        <Card style={{ background: `linear-gradient(135deg, ${COLORS.surface2}, ${COLORS.surface})` }}>
          <div style={{ ...fontMono, color: COLORS.muted, fontSize: 12, letterSpacing: 2 }}>การทำงาน</div>
          <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 22, fontWeight: 700, marginTop: 6 }}>ลงมือทำ</div>
        </Card>
        <Card style={{ borderColor: COLORS.gold }}>
          <div style={{ ...fontMono, color: COLORS.gold, fontSize: 12, letterSpacing: 2 }}>การบริหาร</div>
          <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 18, fontWeight: 700, marginTop: 6, lineHeight: 1.5 }}>
            ทำให้คนและทรัพยากรทำงานร่วมกันอย่างเป็นระบบเพื่อบรรลุเป้าหมาย
          </div>
        </Card>
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>ทำไมการบริหารจึงสำคัญ</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16, marginBottom: 40 }}>
        {importance.map((it) => (
          <Card key={it.t} style={{ display: "flex", gap: 14 }}>
            <IconBadge Icon={it.icon} />
            <div>
              <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 15 }}>{it.t}</div>
              <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13.5, marginTop: 4, lineHeight: 1.6 }}>{it.d}</div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>เป้าหมาย 3 ระดับของการบริหาร</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
        {[
          { t: "Efficiency", th: "ประสิทธิภาพ", d: "ได้ผลลัพธ์มากที่สุดโดยใช้ทรัพยากรน้อยลง", color: COLORS.teal, icon: Zap },
          { t: "Effectiveness", th: "ประสิทธิผล", d: "สามารถบรรลุเป้าหมายที่กำหนดไว้", color: COLORS.gold, icon: Target },
          { t: "Value", th: "คุณค่า", d: "สร้างคุณค่าให้ลูกค้า พนักงาน สังคม และสิ่งแวดล้อม", color: "#E08A4A", icon: Star },
        ].map((g) => (
          <Card key={g.t} style={{ borderTop: `3px solid ${g.color}` }}>
            <g.icon size={22} color={g.color} />
            <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 18, fontWeight: 700, marginTop: 10 }}>{g.th}</div>
            <div style={{ ...fontMono, color: g.color, fontSize: 11, letterSpacing: 1 }}>{g.t}</div>
            <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13.5, marginTop: 8, lineHeight: 1.6 }}>{g.d}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------- FAYOL ---------- */
function Fayol() {
  const [open, setOpen] = useState(null);
  const principles = [
    { t: "Division of Work", th: "การแบ่งงาน", icon: Layers, ex: "Developer ไม่ต้องทำทุกอย่างเอง แบ่งเป็น Dev / Designer / Tester / DevOps" },
    { t: "Authority", th: "อำนาจหน้าที่", icon: Shield, ex: "อำนาจสั่งการต้องมาพร้อมความรับผิดชอบเสมอ" },
    { t: "Discipline", th: "ระเบียบวินัย", icon: CheckCircle2, ex: "Coding Standard, Security Policy, Git Workflow, SLA" },
    { t: "Unity of Command", th: "เอกภาพบังคับบัญชา", icon: GitPullRequest, ex: "พนักงานควรมีหัวหน้าโดยตรงชัดเจน ไม่รับคำสั่งขัดแย้งกัน" },
    { t: "Unity of Direction", th: "เอกภาพอำนวยการ", icon: Compass, ex: "งานที่มีเป้าหมายเดียวกันควรอยู่ภายใต้แผนเดียวกัน" },
    { t: "Subordination of Interest", th: "ผลประโยชน์ส่วนรวมมาก่อน", icon: Users, ex: "หาสมดุลระหว่างผลประโยชน์บุคคลกับองค์กร" },
    { t: "Remuneration", th: "ค่าตอบแทน", icon: Wallet, ex: "บุคลากรควรได้รับค่าตอบแทนอย่างเป็นธรรม" },
    { t: "Centralization", th: "การรวมศูนย์อำนาจ", icon: Server, ex: "พิจารณาว่าจะตัดสินใจรวมศูนย์หรือกระจายให้ทีม" },
    { t: "Scalar Chain", th: "สายบังคับบัญชา", icon: Workflow, ex: "โครงสร้างรายงานและการสื่อสารต้องชัดเจน" },
    { t: "Order", th: "ความเป็นระเบียบ", icon: LayoutGrid, ex: "คนและทรัพยากรควรอยู่ในตำแหน่งที่เหมาะสม" },
    { t: "Equity", th: "ความยุติธรรม", icon: Scale, ex: "ปฏิบัติต่อบุคลากรทุกคนอย่างเป็นธรรม" },
    { t: "Stability of Tenure", th: "ความมั่นคงของบุคลากร", icon: Shield, ex: "สร้างสภาพแวดล้อมให้พนักงานเติบโตได้" },
    { t: "Initiative", th: "ความคิดริเริ่ม", icon: Lightbulb, ex: "เปิดโอกาสให้พนักงานเสนอแนวคิดใหม่" },
    { t: "Esprit de Corps", th: "ความสามัคคี", icon: HeartHandshake, ex: "สร้างความร่วมมือและความเป็นหนึ่งเดียวในทีม" },
  ];
  return (
    <div>
      <SectionTitle
        eyebrow="บทที่ 02 — Henri Fayol"
        title="14 หลักการของการบริหาร"
        sub="Henri Fayol เสนอหน้าที่ผู้บริหาร 5 ด้าน (Planning, Organizing, Staffing, Controlling, Directing) และหลักการบริหาร 14 ข้อที่ยังใช้อ้างอิงจนถึงปัจจุบัน — กดที่การ์ดเพื่อดูตัวอย่างจากงาน IT"
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14 }}>
        {principles.map((p, i) => {
          const isOpen = open === i;
          return (
            <div
              key={p.t}
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                background: isOpen ? COLORS.surface2 : COLORS.surface,
                border: `1px solid ${isOpen ? COLORS.gold : COLORS.border}`,
                borderRadius: 14, padding: 18, cursor: "pointer",
                transition: "all 0.3s ease", minHeight: 118,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ ...fontMono, color: COLORS.gold, fontSize: 11 }}>{String(i + 1).padStart(2, "0")}</div>
                <ChevronDown size={16} color={COLORS.muted} style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
              </div>
              <p.icon size={22} color={COLORS.teal} style={{ marginTop: 8, marginBottom: 8 }} />
              <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 14.5 }}>{p.th}</div>
              <div style={{ ...fontMono, color: COLORS.muted, fontSize: 10.5, marginTop: 2 }}>{p.t}</div>
              {isOpen && (
                <div style={{ ...fontBody, color: COLORS.muted, fontSize: 12.5, marginTop: 10, lineHeight: 1.6, animation: "fadeSlide 0.3s ease" }}>
                  {p.ex}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- LEVELS & TYPES ---------- */
function Levels() {
  return (
    <div>
      <SectionTitle eyebrow="บทที่ 03" title="ระดับและประเภทของผู้บริหาร" />
      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>ระดับผู้บริหาร 3 ชั้น</div>
      <div style={{ position: "relative", marginBottom: 48 }}>
        {[
          { t: "Top Management / ผู้บริหารระดับสูง", th: "ผู้บริหารระดับสูง", d: "กำหนดวิสัยทัศน์และกลยุทธ์", ex: "CEO, President, Managing Director", w: "60%", color: COLORS.gold },
          { t: "Middle Management / ผู้บริหารระดับกลาง", th: "ผู้บริหารระดับกลาง", d: "แปลงกลยุทธ์เป็นแผนปฏิบัติ", ex: "Department Manager, Project Manager, IT Manager", w: "78%", color: COLORS.teal },
          { t: "First-line Management / ผู้บริหารระดับต้น", th: "ผู้บริหารระดับต้น", d: "ควบคุมและสนับสนุนงานประจำวัน", ex: "Team Leader, Supervisor", w: "96%", color: "#E08A4A" },
        ].map((lv, i) => (
          <div key={lv.t} style={{ width: lv.w, margin: "0 auto 14px", background: COLORS.surface, border: `1px solid ${lv.color}`, borderRadius: 12, padding: "16px 22px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <div>
                <div style={{ ...fontDisplay, color: COLORS.text, fontWeight: 700, fontSize: 17 }}>{lv.th}</div>
                <div style={{ ...fontMono, color: lv.color, fontSize: 11 }}>{lv.t}</div>
              </div>
              <div style={{ ...fontBody, color: COLORS.muted, fontSize: 12.5, textAlign: "right" }}>{lv.ex}</div>
            </div>
            <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13, marginTop: 6 }}>{lv.d}</div>
          </div>
        ))}
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>ประเภทของการบริหาร</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16 }}>
        {[
          { t: "ภาครัฐ", icon: Landmark, d: "ประโยชน์สาธารณะ กฎหมาย ความโปร่งใส" },
          { t: "ธุรกิจ", icon: TrendingUp, d: "สร้างคุณค่า รายได้ ความสามารถแข่งขัน" },
          { t: "องค์กร", icon: Building2, d: "โครงสร้าง คน วัฒนธรรม กระบวนการ" },
          { t: "โครงการ", icon: ClipboardList, d: "Scope + Time + Cost + Quality" },
        ].map((tp) => (
          <Card key={tp.t}>
            <IconBadge Icon={tp.icon} color={COLORS.teal} />
            <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 15, marginTop: 10 }}>{tp.t}</div>
            <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13, marginTop: 4, lineHeight: 1.6 }}>{tp.d}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
/* ---------- CASE STUDIES ---------- */
function Cases() {
  const [tab, setTab] = useState("toyota");
  const data = {
    toyota: {
      name: "Toyota", color: "#D9544C", icon: Factory,
      tag: "Process & Quality / กระบวนการและคุณภาพ",
      points: [
        { t: "Jidoka", d: "Automation with a human touch — หยุดกระบวนการทันทีเมื่อพบความผิดปกติ ป้องกันของเสียหลุดไปต่อ" },
        { t: "Just-in-Time", d: "ผลิตสิ่งที่ต้องการ เมื่อจำเป็น และในจำนวนที่ต้องการ ลด Stock และ Waste" },
        { t: "Muda / Mura / Muri", d: "ความสูญเปล่า ความไม่สม่ำเสมอ และการทำงานหนักเกินกำลัง — สามศัตรูที่ต้องกำจัด" },
      ],
    },
    google: {
      name: "Google", color: "#4F8FE0", icon: Search,
      tag: "Team & Data / ทีมและข้อมูล",
      points: [
        { t: "Psychological Safety", d: "สมาชิกกล้าพูดความเห็นหรือยอมรับผิดพลาดโดยไม่กลัวถูกลงโทษ" },
        { t: "Dependability & Clarity", d: "ทำสิ่งที่รับผิดชอบให้สำเร็จ และเข้าใจเป้าหมาย บทบาท กระบวนการตัดสินใจ" },
        { t: "Meaning & Impact", d: "งานมีความหมายต่อตนเอง และเห็นผลต่อเป้าหมายองค์กรชัดเจน" },
      ],
    },
    amazon: {
      name: "Amazon", color: "#E0A94F", icon: ShoppingCart,
      tag: "Customer & Execution / ลูกค้าและการปฏิบัติ",
      points: [
        { t: "Customer Obsession", d: "เริ่มต้นทุกการตัดสินใจจากความต้องการของลูกค้า" },
        { t: "Ownership", d: "รับผิดชอบต่อผลลัพธ์ ไม่คิดว่า “ไม่ใช่งานของฉัน”" },
        { t: "Have Backbone; Disagree and Commit", d: "คัดค้านอย่างมีเหตุผลได้ แต่เมื่อตัดสินใจแล้วต้องร่วมมือทำให้สำเร็จ" },
      ],
    },
  };
  const d = data[tab];
  return (
    <div>
      <SectionTitle eyebrow="บทที่ 04" title="กรณีศึกษาองค์กรระดับโลก" sub="สามองค์กรที่มีวิธีบริหารต่างกัน แต่ล้วนผ่านวงจร กำหนดเป้าหมาย → จัดทรัพยากร → ทำงาน → วัดผล → ปรับปรุง" />
      <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
        {Object.entries(data).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            style={{
              ...fontBody, display: "flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 10, cursor: "pointer",
              border: `1px solid ${tab === k ? v.color : COLORS.border}`,
              background: tab === k ? `${v.color}22` : "transparent",
              color: tab === k ? v.color : COLORS.muted, fontWeight: 700, fontSize: 14.5,
              transition: "all 0.25s ease",
            }}
          >
            <v.icon size={16} /> {v.name}
          </button>
        ))}
      </div>
      <Card key={tab} style={{ borderColor: d.color, animation: "fadeSlide 0.35s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <IconBadge Icon={d.icon} color={d.color} size={26} />
          <div>
            <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 22, fontWeight: 700 }}>{d.name}</div>
            <div style={{ ...fontMono, color: d.color, fontSize: 11.5, letterSpacing: 1 }}>{d.tag}</div>
          </div>
        </div>
        <div style={{ display: "grid", gap: 14 }}>
          {d.points.map((p) => (
            <div key={p.t} style={{ display: "flex", gap: 12, padding: 14, background: COLORS.surface2, borderRadius: 10 }}>
              <CheckCircle2 size={18} color={d.color} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 14.5 }}>{p.t}</div>
                <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13.5, marginTop: 3, lineHeight: 1.6 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ marginTop: 32, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
          <thead>
            <tr>
              {["ประเด็น", "Toyota", "Google", "Amazon"].map((h) => (
                <th key={h} style={{ ...fontMono, color: COLORS.gold, fontSize: 12, textAlign: "left", padding: "10px 14px", borderBottom: `1px solid ${COLORS.border}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["จุดเด่น", "Process / กระบวนการ", "Team & Data / ทีมและข้อมูล", "Customer & Execution / ลูกค้าและการปฏิบัติ"],
              ["วิธีคิด", "Lean / ลีน", "Data / Experiment / ข้อมูล / ทดลอง", "Leadership Principles / หลักการผู้นำ"],
              ["การปรับปรุง", "Kaizen / ไคเซ็น", "Experiment / Learning / ทดลอง / เรียนรู้", "Learn & Improve / เรียนรู้และปรับปรุง"],
              ["การควบคุม", "Quality / คุณภาพ", "Metrics / ตัวชี้วัด", "Metrics / Results / ตัวชี้วัด / ผลลัพธ์"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((c, i) => (
                  <td key={i} style={{ ...fontBody, color: i === 0 ? COLORS.text : COLORS.muted, fontWeight: i === 0 ? 700 : 400, fontSize: 13.5, padding: "10px 14px", borderBottom: `1px solid ${COLORS.border}` }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
/* ---------- IT ---------- */
function ITSection() {
  const [kanbanCol, setKanbanCol] = useState(null);
  const agile = [
    { t: "คนและการสื่อสาร", sub: "มากกว่ากระบวนการและเครื่องมือ" },
    { t: "ซอฟต์แวร์ที่ใช้งานได้จริง", sub: "มากกว่าเอกสารจำนวนมาก" },
    { t: "ร่วมมือกับลูกค้า", sub: "มากกว่ายึดติดกับสัญญา" },
    { t: "ตอบสนองการเปลี่ยนแปลง", sub: "มากกว่าทำตามแผนเดิมทุกอย่าง" },
  ];
  const kanban = {
    "To Do / ต้องทำ": ["ออกแบบ Wireframe", "เขียน API Spec"],
    "Doing / กำลังทำ": ["พัฒนา Login Module"],
    "Testing / ทดสอบ": ["ทดสอบ Payment Flow"],
    "Done / เสร็จแล้ว": ["ตั้งค่า CI/CD", "ปรับ UI หน้าแรก"],
  };
  const workflow = ["Idea", "Requirement", "Backlog", "Prioritize", "Sprint", "Development", "Testing", "Release", "Feedback", "Improvement"];
  return (
    <div>
      <SectionTitle eyebrow="บทที่ 05" title="การบริหารในสาย IT" sub="สาย IT เปลี่ยนแปลงเร็ว จึงต้องใช้แนวทางที่ยืดหยุ่นกว่าการบริหารแบบดั้งเดิม" />

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>Agile Manifesto — 4 ค่านิยมหลัก</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 14, marginBottom: 40 }}>
        {agile.map((a, i) => (
          <Card key={a.t}>
            <div style={{ ...fontMono, color: COLORS.teal, fontSize: 11 }}>{i + 1}</div>
            <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 15, marginTop: 6 }}>{a.t}</div>
            <div style={{ ...fontBody, color: COLORS.muted, fontSize: 12.5, marginTop: 4 }}>{a.sub}</div>
          </Card>
        ))}
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>Scrum — บทบาทหลัก</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14, marginBottom: 16 }}>
        {[
          { t: "Product Owner / ผู้รับผิดชอบผลิตภัณฑ์", d: "รับผิดชอบคุณค่าของ Product และ Backlog", icon: Target },
          { t: "Scrum Master / ผู้ดูแล Scrum", d: "ช่วยให้ Scrum ถูกนำไปใช้ และขจัดอุปสรรค", icon: Shield },
          { t: "Developers / ผู้พัฒนา", d: "สร้าง Increment ของผลิตภัณฑ์", icon: Code2 },
        ].map((r) => (
          <Card key={r.t} style={{ display: "flex", gap: 12 }}>
            <IconBadge Icon={r.icon} color={COLORS.teal} />
            <div>
              <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 14.5 }}>{r.t}</div>
              <div style={{ ...fontBody, color: COLORS.muted, fontSize: 12.5, marginTop: 3 }}>{r.d}</div>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
        {["Sprint", "Sprint Planning", "Daily Scrum", "Sprint Review", "Sprint Retrospective"].map((e) => (
          <span key={e} style={{ ...fontMono, fontSize: 12, color: COLORS.gold, border: `1px solid ${COLORS.gold}55`, padding: "6px 12px", borderRadius: 20 }}>{e}</span>
        ))}
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>Kanban Board ตัวอย่าง</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12, marginBottom: 40 }}>
        {Object.entries(kanban).map(([col, items]) => (
          <div key={col} style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 12 }}>
            <div style={{ ...fontMono, color: COLORS.muted, fontSize: 11, letterSpacing: 1, marginBottom: 10, display: "flex", justifyContent: "space-between" }}>
              {col} <span style={{ color: COLORS.teal }}>{items.length}</span>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {items.map((it) => (
                <div key={it} style={{ background: COLORS.surface2, borderRadius: 8, padding: "8px 10px", ...fontBody, color: COLORS.text, fontSize: 12.5 }}>{it}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>เครื่องมือบริหารทีม IT</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 14, marginBottom: 40 }}>
        {[
          { t: "Source Control / ควบคุมซอร์ส", d: "Version control, Pull request, Code review / ควบคุมเวอร์ชัน, ดึงคำขอ, ตรวจโค้ด", icon: GitBranch },
          { t: "Project Tracking / ติดตามโครงการ", d: "Scrum, Kanban, Issue tracking, Sprint / สครัม, คัมบัง, ติดตามบั๊ก, สปรินต์", icon: ClipboardList },
          { t: "Simple Boards / บอร์ดเรียบง่าย", d: "To Do → Doing → Done แบบเรียบง่าย / ต้องทำ → กำลังทำ → เสร็จแล้ว", icon: TrelloIcon },
          { t: "Team Chat / แชททีม", d: "Chat, Meeting, File sharing / แชท, ประชุม, แบ่งปันไฟล์", icon: MessageCircle },
        ].map((tool) => (
          <Card key={tool.t} style={{ textAlign: "center" }}>
            <tool.icon size={22} color={COLORS.teal} style={{ margin: "0 auto 10px" }} />
            <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 13.5 }}>{tool.t}</div>
            <div style={{ ...fontBody, color: COLORS.muted, fontSize: 11.5, marginTop: 4 }}>{tool.d}</div>
          </Card>
        ))}
      </div>

      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>Workflow บริหารโครงการ IT (Continuous Improvement)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        {workflow.map((w, i) => (
          <React.Fragment key={w}>
            <span style={{ ...fontBody, background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 20, padding: "8px 14px", fontSize: 12.5, color: COLORS.text }}>
              {i + 1}. {w}
            </span>
            {i < workflow.length - 1 && <ChevronRight size={14} color={COLORS.muted} />}
          </React.Fragment>
        ))}
        <ChevronRight size={14} color={COLORS.gold} />
        <span style={{ ...fontMono, color: COLORS.gold, fontSize: 12 }}>กลับสู่ Backlog ↻</span>
      </div>
    </div>
  );
}

/* ---------- ETHICS ---------- */
function Ethics() {
  return (
    <div>
      <SectionTitle
        eyebrow="Chapter 06"
        title="คุณธรรมในการบริหาร"
        sub="การบริหารที่ดีไม่ได้วัดจากประสิทธิภาพเพียงอย่างเดียว แต่ต้องมีคุณธรรมกำกับ — นี่คือมุมมองเชิงประยุกต์จากหลักอิสลามและพุทธศาสนา"
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24, marginBottom: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <IconBadge Icon={Feather} color="#4FB0A5" />
            <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 20, fontWeight: 700 }}>หลักอิสลาม</div>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { t: "อามานะฮ์ (Amanah)", d: "ความไว้วางใจและความรับผิดชอบต่อสิ่งที่ได้รับมอบหมาย — ผู้บริหารไม่ควรใช้อำนาจเพื่อผลประโยชน์ส่วนตัว", icon: Feather },
              { t: "อดุล (Adl)", d: "ความยุติธรรมในการประเมิน เลื่อนตำแหน่ง แบ่งงาน และให้รางวัลอย่างเป็นธรรม", icon: Scale },
              { t: "ชูรอ (Shura)", d: "การปรึกษาหารือร่วมกันก่อนตัดสินใจ แทนการตัดสินใจเพียงลำพัง", icon: MessageSquare },
            ].map((p) => (
              <Card key={p.t} style={{ display: "flex", gap: 12 }}>
                <IconBadge Icon={p.icon} color="#4FB0A5" />
                <div>
                  <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 14.5 }}>{p.t}</div>
                  <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13, marginTop: 4, lineHeight: 1.6 }}>{p.d}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <IconBadge Icon={Leaf} color="#E0A94F" />
            <div style={{ ...fontDisplay, color: COLORS.text, fontSize: 20, fontWeight: 700 }}>หลักพุทธศาสนา</div>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { t: "อิทธิบาท 4", d: "ฉันทะ วิริยะ จิตตะ วิมังสา — แนวทางสู่ความสำเร็จผ่านความพอใจ ความเพียร ความใส่ใจ และการทบทวนปรับปรุง", icon: Flame },
              { t: "พรหมวิหาร 4", d: "เมตตา กรุณา มุทิตา อุเบกขา — หลักการบริหารคนด้วยความปรารถนาดีและเป็นธรรม", icon: HeartHandshake },
              { t: "สังคหวัตถุ 4", d: "ทาน ปิยวาจา อัตถจริยา สมานัตตตา — หลักสร้างความสัมพันธ์และทำงานร่วมกับผู้อื่น", icon: Wind },
            ].map((p) => (
              <Card key={p.t} style={{ display: "flex", gap: 12 }}>
                <IconBadge Icon={p.icon} color="#E0A94F" />
                <div>
                  <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 14.5 }}>{p.t}</div>
                  <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13, marginTop: 4, lineHeight: 1.6 }}>{p.d}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card style={{ background: `linear-gradient(135deg, ${COLORS.surface2}, ${COLORS.surface})`, marginBottom: 32 }}>
        <div style={{ display: "flex", gap: 12 }}>
          <QuoteIcon size={22} color={COLORS.gold} style={{ flexShrink: 0 }} />
          <div style={{ ...fontBody, color: COLORS.muted, fontSize: 13.5, lineHeight: 1.8 }}>
            แนวคิดเรื่องการคืนความไว้วางใจให้แก่ผู้มีสิทธิและการตัดสินด้วยความยุติธรรมปรากฏอยู่ในอัลกุรอาน 4:58
            ส่วนแนวคิดเรื่องการปรึกษาหารือร่วมกันปรากฏอยู่ในอัลกุรอาน 42:38 — ทั้งสองแนวคิดสอดคล้องกับหลักธรรมาภิบาลสมัยใหม่เรื่องความรับผิดชอบและการมีส่วนร่วมในการตัดสินใจ
          </div>
        </div>
      </Card>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
          <thead>
            <tr>
              {["ด้าน", "อิสลาม", "พุทธ"].map((h) => (
                <th key={h} style={{ ...fontMono, color: COLORS.gold, fontSize: 12, textAlign: "left", padding: "10px 14px", borderBottom: `1px solid ${COLORS.border}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["ความรับผิดชอบ", "อามานะฮ์", "อิทธิบาท"],
              ["ความยุติธรรม", "อดุล", "อุเบกขา"],
              ["การปรึกษา", "ชูรอ", "การรับฟังและประสานสัมพันธ์"],
              ["การบริหารคน", "ความยุติธรรม", "พรหมวิหาร 4"],
              ["Teamwork", "ชูรอ", "สังคหวัตถุ 4"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((c, i) => (
                  <td key={i} style={{ ...fontBody, color: i === 0 ? COLORS.text : COLORS.muted, fontWeight: i === 0 ? 700 : 400, fontSize: 13.5, padding: "10px 14px", borderBottom: `1px solid ${COLORS.border}` }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ ...fontBody, color: COLORS.muted, fontSize: 12.5, marginTop: 14, lineHeight: 1.7, fontStyle: "italic" }}>
        * ตารางนี้เป็นการประยุกต์เชิงบริหารเท่านั้น ไม่ได้หมายความว่าหลักธรรมทั้งสองศาสนามีความหมายเหมือนกันทุกประการ แต่ละหลักมีบริบททางศาสนาและปรัชญาของตนเอง
      </p>
    </div>
  );
}

/* ---------- FUTURE ---------- */
function Future() {
  const skills = [
    { t: "Communication / การสื่อสาร", icon: MessageCircle }, { t: "Critical Thinking / คิดวิเคราะห์", icon: Brain },
    { t: "Problem Solving / แก้ปัญหา", icon: Lightbulb }, { t: "Decision Making / ตัดสินใจ", icon: Target },
    { t: "Digital Literacy / ทักษะดิจิทัล", icon: Cpu }, { t: "Emotional Intelligence / อารมณ์อัจฉริยะ", icon: HeartHandshake },
    { t: "Adaptability / ปรับตัว", icon: RefreshCw }, { t: "Team Management / บริหารทีม", icon: Users },
  ];
  return (
    <div>
      <SectionTitle eyebrow="บทที่ 07" title="ทักษะผู้บริหารยุคใหม่ & Data-Driven Management" sub="โลกที่เปลี่ยนเร็วต้องการผู้บริหารที่ปรับตัวได้ และใช้ข้อมูลประกอบการตัดสินใจแทนความรู้สึก" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 14, marginBottom: 44 }}>
        {skills.map((s) => (
          <Card key={s.t} style={{ textAlign: "center" }}>
            <s.icon size={22} color={COLORS.gold} style={{ margin: "0 auto 10px" }} />
            <div style={{ ...fontBody, color: COLORS.text, fontSize: 13, fontWeight: 600 }}>{s.t}</div>
          </Card>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
        <Card>
          <div style={{ ...fontMono, color: COLORS.teal, fontSize: 12, letterSpacing: 2, marginBottom: 12 }}>DIGITAL TRANSFORMATION</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Data", "Decision", "Action", "Feedback", "Improvement"].map((s, i, arr) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${COLORS.teal}22`, color: COLORS.teal, display: "flex", alignItems: "center", justifyContent: "center", ...fontMono, fontSize: 12 }}>{i + 1}</div>
                <span style={{ ...fontBody, color: COLORS.text, fontSize: 14 }}>{s}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{ ...fontMono, color: COLORS.gold, fontSize: 12, letterSpacing: 2, marginBottom: 12 }}>DATA-DRIVEN DECISION</div>
          <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
            <BarChart3 size={20} color={COLORS.gold} />
            <span style={{ ...fontBody, color: COLORS.muted, fontSize: 13.5 }}>ใช้ Usage Data, Conversion Rate, A/B Testing แทนความรู้สึก "คิดว่าลูกค้าน่าจะชอบ"</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Usage Data", "Feedback", "Conversion Rate", "A/B Testing", "Survey"].map((d) => (
              <span key={d} style={{ ...fontMono, fontSize: 11, color: COLORS.gold, border: `1px solid ${COLORS.gold}55`, borderRadius: 20, padding: "5px 10px" }}>{d}</span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ---------- OUTRO ---------- */
function Outro() {
  const refs = [
    "OpenStax — Principles of Management",
    "Toyota Motor Corporation — Toyota Production System",
    "Google re:Work — Team Effectiveness",
    "Amazon — Leadership Principles",
    "Agile Manifesto / Scrum Guide 2020",
    "อัลกุรอาน 4:58, 42:38",
    "สำนักงานพระพุทธศาสนาแห่งชาติ",
  ];
  return (
    <div>
      <SectionTitle eyebrow="บทที่ 08" title="บทสรุป" />
      <Card style={{ marginBottom: 32, background: `linear-gradient(135deg, ${COLORS.surface2}, ${COLORS.surface})` }}>
        <p style={{ ...fontBody, color: COLORS.text, fontSize: 16, lineHeight: 2 }}>
          การบริหารคือกระบวนการทำให้องค์กรใช้คน ทรัพยากร ข้อมูล และเทคโนโลยีอย่างเป็นระบบ
          เพื่อบรรลุเป้าหมายที่กำหนดไว้ การบริหารแบบดั้งเดิมของ Fayol เน้นโครงสร้าง อำนาจ และการควบคุม
          ขณะที่การบริหารสมัยใหม่ให้ความสำคัญกับความยืดหยุ่น ข้อมูล นวัตกรรม และการปรับตัว
          กรณีศึกษา Toyota, Google และ Amazon แสดงให้เห็นว่าไม่มีรูปแบบเดียวที่เหมาะกับทุกองค์กร
          และท้ายที่สุด การบริหารที่ดีต้องคำนึงถึงความรับผิดชอบ ความยุติธรรม และจริยธรรม
          ควบคู่ไปกับประสิทธิภาพและผลกำไรเสมอ
        </p>
      </Card>
      <div style={{ ...fontMono, color: COLORS.gold, fontSize: 13, letterSpacing: 3, marginBottom: 16 }}>แหล่งอ้างอิง</div>
      <div style={{ display: "grid", gap: 10 }}>
        {refs.map((r) => (
          <div key={r} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 10 }}>
            <BookOpen size={16} color={COLORS.teal} style={{ flexShrink: 0 }} />
            <span style={{ ...fontBody, color: COLORS.muted, fontSize: 13.5 }}>{r}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36, padding: 24, background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 20 }}>
        <div style={{ ...fontMono, color: COLORS.gold, fontSize: 12, letterSpacing: 2, marginBottom: 18 }}>จัดทำโดย</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {[
            { name: "นายซาการียา ม่านแดงเห่", id: "69409010003", role: "ป.ตรี ปี 1 เทคโนโลยีสารสนเทศ", image: "sakareeya.jpg" },
            { name: "นายครรชิตพล เพ็งเอียด", id: "69409010003", role: "ป.ตรี ปี 1 เทคโนโลยีสารสนเทศ", image: "khanchit.jpg" },
          ].map((person) => (
            <div key={person.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: 18, background: COLORS.bg, border: `1px solid ${COLORS.border}`, borderRadius: 16 }}>
              <img src={person.image} alt={person.name} style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `2px solid ${COLORS.gold}` }} />
              <div>
                <div style={{ ...fontDisplay, fontSize: 16, color: COLORS.text, fontWeight: 700 }}>{person.name}</div>
                <div style={{ ...fontMono, color: COLORS.muted, fontSize: 12, margin: "6px 0 0" }}>{person.role}</div>
                <div style={{ ...fontBody, color: COLORS.goldSoft, fontSize: 13, marginTop: 8 }}>{person.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- APP ---------- */
export default function App() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const idx = NAV.findIndex((n) => n.id === active);
  const progress = ((idx + 1) / NAV.length) * 100;

  const goTo = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  const render = () => {
    switch (active) {
      case "hero": return <Hero goTo={goTo} />;
      case "intro": return <Intro />;
      case "pdca": return <PdcaFull />;
      case "fayol": return <Fayol />;
      case "levels": return <Levels />;
      case "cases": return <Cases />;
      case "it": return <ITSection />;
      case "ethics": return <Ethics />;
      case "future": return <Future />;
      case "outro": return <Outro />;
      default: return null;
    }
  };

  return (
    <div style={{ ...fontBody, background: COLORS.bg, minHeight: "100vh", color: COLORS.text }}>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes fadeSlide { from { opacity:0; transform: translateY(14px);} to { opacity:1; transform: translateY(0);} }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 4px; }
        button:focus-visible, div[tabindex]:focus-visible { outline: 2px solid ${COLORS.gold}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        }
      `}</style>

      {/* Top progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: COLORS.surface, zIndex: 60 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.teal})`, transition: "width 0.4s ease" }} />
      </div>

      {/* Mobile header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: `1px solid ${COLORS.border}`, position: "sticky", top: 0, background: COLORS.bg, zIndex: 50 }} className="mobile-header">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Compass size={18} color={COLORS.gold} />
          <span style={{ ...fontDisplay, fontWeight: 700, fontSize: 15 }}>ชุดนำเสนอการบริหาร</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: COLORS.text, cursor: "pointer" }} className="menu-btn">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div style={{ display: "flex", maxWidth: 1280, margin: "0 auto" }}>
        {/* Sidebar */}
        <div
          style={{
            width: 260, flexShrink: 0, padding: "28px 16px", position: "sticky", top: 0,
            height: "100vh", overflowY: "auto", borderRight: `1px solid ${COLORS.border}`,
          }}
          className="sidebar"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 10px 24px", marginBottom: 10, borderBottom: `1px solid ${COLORS.border}` }}>
            <Compass size={20} color={COLORS.gold} />
            <div>
              <div style={{ ...fontDisplay, fontWeight: 700, fontSize: 15 }}>Management / การบริหาร</div>
              <div style={{ ...fontMono, color: COLORS.muted, fontSize: 10 }}>Presentation Deck / ชุดนำเสนอ</div>
            </div>
          </div>
          {NAV.map((n, i) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 12, width: "100%",
                  padding: "11px 12px", borderRadius: 10, border: "none", marginBottom: 4,
                  background: isActive ? COLORS.surface2 : "transparent",
                  color: isActive ? COLORS.gold : COLORS.muted,
                  cursor: "pointer", textAlign: "left", transition: "all 0.25s ease",
                  borderLeft: isActive ? `2px solid ${COLORS.gold}` : "2px solid transparent",
                }}
              >
                <n.icon size={17} />
                <span style={{ ...fontBody, fontSize: 13.5, fontWeight: isActive ? 700 : 500 }}>{n.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 55 }} onClick={() => setMenuOpen(false)}>
            <div style={{ width: 260, height: "100%", background: COLORS.bg, padding: "70px 16px 16px", borderRight: `1px solid ${COLORS.border}` }} onClick={(e) => e.stopPropagation()}>
              {NAV.map((n) => {
                const isActive = active === n.id;
                return (
                  <button
                    key={n.id}
                    onClick={() => goTo(n.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: 12, width: "100%",
                      padding: "12px", borderRadius: 10, border: "none", marginBottom: 4,
                      background: isActive ? COLORS.surface2 : "transparent",
                      color: isActive ? COLORS.gold : COLORS.muted, cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <n.icon size={17} />
                    <span style={{ fontSize: 14 }}>{n.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main content */}
        <div style={{ flex: 1, padding: "48px 40px 100px", minWidth: 0 }} className="main-content">
          <div key={active} style={{ animation: "fadeSlide 0.5s ease" }}>
            {render()}
          </div>

          {/* Prev/Next */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 60, paddingTop: 24, borderTop: `1px solid ${COLORS.border}`, gap: 12, flexWrap: "wrap" }}>
            <button
              disabled={idx === 0}
              onClick={() => goTo(NAV[idx - 1].id)}
              style={{
                ...fontBody, display: "flex", alignItems: "center", gap: 8, background: "transparent",
                border: `1px solid ${COLORS.border}`, color: idx === 0 ? COLORS.border : COLORS.text,
                padding: "10px 18px", borderRadius: 10, cursor: idx === 0 ? "default" : "pointer", fontSize: 13.5,
              }}
            >
              <ChevronRight size={15} style={{ transform: "rotate(180deg)" }} />
              {idx > 0 ? NAV[idx - 1].label : "ก่อนหน้า"}
            </button>
            <button
              disabled={idx === NAV.length - 1}
              onClick={() => goTo(NAV[idx + 1].id)}
              style={{
                ...fontBody, display: "flex", alignItems: "center", gap: 8,
                background: idx === NAV.length - 1 ? "transparent" : COLORS.gold,
                border: `1px solid ${idx === NAV.length - 1 ? COLORS.border : COLORS.gold}`,
                color: idx === NAV.length - 1 ? COLORS.border : COLORS.bg,
                padding: "10px 18px", borderRadius: 10, cursor: idx === NAV.length - 1 ? "default" : "pointer",
                fontSize: 13.5, fontWeight: 700,
              }}
            >
              {idx < NAV.length - 1 ? NAV[idx + 1].label : "จบ"}
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .sidebar { display: none; }
          .mobile-header { display: flex !important; }
          .main-content { padding: 28px 18px 80px !important; }
        }
        @media (min-width: 861px) {
          .mobile-header { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function PdcaFull() {
  const steps = [
    { t: "Planning — วางแผน", d: "กำหนดว่าจะทำอะไร ทำไม เมื่อไร ใครทำ งบเท่าไร ใช้ทรัพยากรอะไร เช่น การวางแผนพัฒนา Mobile App ภายใน 3 เดือน ต้องกำหนด Scope, งบประมาณ, ทีมงาน, Timeline และ Technology", icon: Target, color: COLORS.gold },
    { t: "Organizing — จัดองค์การ", d: "จัดระบบว่าใครทำอะไร เช่นทีมพัฒนาระบบมี Project Manager คุมทีม UX/UI, Front-end, Back-end, Database, QA และ DevOps ช่วยให้หน้าที่ชัดเจน ลดความซ้ำซ้อน", icon: Users, color: COLORS.teal },
    { t: "Leading — การนำ", d: "ไม่ใช่แค่สั่งงาน แต่ต้องสื่อสาร สร้างแรงจูงใจ แก้ความขัดแย้ง และสร้างวิสัยทัศน์ร่วม เช่น อธิบายเหตุผลของ deadline แทนการสั่งเฉย ๆ", icon: Flame, color: "#E08A4A" },
    { t: "Controlling — การควบคุม", d: "ตรวจสอบผลงานเทียบกับเป้าหมาย เช่น กำหนด Uptime 99.9% แล้วตรวจสอบจริง หากต่ำกว่าเป้าต้องหาสาเหตุและปรับปรุงระบบ", icon: Eye, color: "#7C93D9" },
  ];
  return (
    <div>
      <SectionTitle eyebrow="บทที่ 01.5" title="วงจรการบริหาร: Plan → Organize → Lead → Control" sub="แนวคิดพื้นฐานของการบริหารที่หมุนวนต่อเนื่อง แต่ละขั้นตอนเชื่อมโยงกันเพื่อขับเคลื่อนองค์กรไปสู่เป้าหมาย" />
      <div style={{ display: "grid", justifyItems: "center", marginBottom: 40 }}>
        <PDCAWheel />
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {steps.map((s, i) => (
          <Card key={s.t} style={{ display: "flex", gap: 18, borderLeft: `3px solid ${s.color}` }}>
            <div style={{ ...fontMono, color: s.color, fontSize: 20, fontWeight: 700, minWidth: 30 }}>{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <s.icon size={18} color={s.color} />
                <div style={{ ...fontBody, color: COLORS.text, fontWeight: 700, fontSize: 16 }}>{s.t}</div>
              </div>
              <div style={{ ...fontBody, color: COLORS.muted, fontSize: 14, lineHeight: 1.8 }}>{s.d}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
