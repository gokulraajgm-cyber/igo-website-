import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, CheckCircle2 } from "lucide-react";
import { indiaPresence } from "@/data/siteData";

// ─── viewBox: 0 0 850 1000 ────────────────────────────────────────────────────
// All state paths AND pin centroids share this coordinate space.
// Pin (cx, cy) = state label centroid from IndiaMapSVG → guaranteed accuracy.
// ─────────────────────────────────────────────────────────────────────────────

const STATES = [
  { name: "Jammu & Kashmir",  d: "M220,10 L280,10 L310,60 L260,110 L190,90 L180,40 Z" },
  { name: "Ladakh",           d: "M280,10 L360,30 L380,80 L310,100 L310,60 Z" },
  { name: "Himachal Pradesh", d: "M265,110 L315,102 L340,140 L280,160 L250,145 Z" },
  { name: "Punjab",           d: "M200,100 L255,115 L250,165 L190,160 Z" },
  { name: "Uttarakhand",      d: "M310,110 L350,140 L330,190 L285,170 Z" },
  { name: "Haryana",          d: "M210,165 L260,175 L285,215 L230,225 L200,200 Z" },
  { name: "Delhi / NCR",      d: "M268,188 L285,188 L285,205 L268,205 Z" },
  { name: "Rajasthan",        d: "M80,190 L190,180 L220,280 L180,340 L100,330 L60,260 Z" },
  { name: "Uttar Pradesh",    d: "M290,175 L430,210 L450,290 L380,330 L280,290 L240,230 Z" },
  { name: "Gujarat",          d: "M20,330 L110,340 L160,450 L100,470 L30,440 L10,380 Z" },
  { name: "Madhya Pradesh",   d: "M175,345 L320,310 L390,430 L300,480 L180,460 Z" },
  { name: "Bihar",            d: "M435,215 L520,230 L530,300 L455,310 Z" },
  { name: "Jharkhand",        d: "M430,305 L500,315 L510,380 L440,390 Z" },
  { name: "West Bengal",      d: "M505,320 L550,330 L560,450 L500,410 Z" },
  { name: "Sikkim",           d: "M525,205 L550,205 L550,230 L525,230 Z" },
  { name: "Chhattisgarh",     d: "M320,380 L395,350 L435,480 L380,550 L310,480 Z" },
  { name: "Odisha",           d: "M405,435 L485,410 L520,500 L450,550 L400,530 Z" },
  { name: "Maharashtra",      d: "M115,455 L280,485 L310,610 L230,660 L140,620 L90,560 Z" },
  { name: "Telangana",        d: "M290,530 L390,540 L410,650 L340,680 L280,630 Z" },
  { name: "Andhra Pradesh",   d: "M300,640 L420,660 L440,840 L350,860 L310,750 Z" },
  { name: "Karnataka",        d: "M150,630 L260,650 L280,830 L180,850 L140,750 Z" },
  { name: "Goa",              d: "M135,715 L155,715 L155,735 L135,735 Z" },
  { name: "Tamil Nadu",       d: "M300,840 L390,850 L370,980 L290,980 L270,920 Z" },
  { name: "Kerala",           d: "M200,865 L275,855 L285,980 L240,990 Z" },
  { name: "Assam",            d: "M630,250 L710,260 L700,310 L620,300 Z" },
  { name: "Arunachal Pradesh",d: "M670,200 L760,225 L730,270 L660,255 Z" },
  { name: "Nagaland",         d: "M720,275 L760,285 L750,320 L720,320 Z" },
  { name: "Manipur",          d: "M715,330 L755,330 L750,370 L710,370 Z" },
  { name: "Mizoram",          d: "M690,380 L725,380 L720,430 L690,430 Z" },
  { name: "Tripura",          d: "M660,360 L685,360 L680,400 L655,400 Z" },
  { name: "Meghalaya",        d: "M620,310 L680,315 L675,345 L615,340 Z" },
];

// cx/cy = exact label centroid from IndiaMapSVG (viewBox 0 0 850 1000).
// Because pins live in the same SVG, placement is pixel-perfect on every screen.
const PINS = [
  { name: "Jammu & Kashmir",   cx: 235, cy:  50, isHub: false },
  { name: "Punjab",            cx: 220, cy: 140, isHub: false },
  { name: "Delhi / NCR",       cx: 276, cy: 198, isHub: true  },
  { name: "Rajasthan",         cx: 140, cy: 270, isHub: false },
  { name: "Uttar Pradesh",     cx: 350, cy: 260, isHub: true  },
  { name: "Bihar",             cx: 485, cy: 265, isHub: false },
  { name: "West Bengal",       cx: 530, cy: 380, isHub: false },
  { name: "Assam & NE States", cx: 665, cy: 280, isHub: false },
  { name: "Gujarat",           cx:  80, cy: 410, isHub: false },
  { name: "Madhya Pradesh",    cx: 280, cy: 400, isHub: false },
  { name: "Chhattisgarh",      cx: 380, cy: 460, isHub: false },
  { name: "Odisha",            cx: 460, cy: 480, isHub: false },
  { name: "Maharashtra",       cx: 200, cy: 570, isHub: true  },
  { name: "Telangana",         cx: 345, cy: 610, isHub: false },
  { name: "Andhra Pradesh",    cx: 380, cy: 760, isHub: true  },
  { name: "Karnataka",         cx: 210, cy: 760, isHub: true  },
  { name: "Tamil Nadu",        cx: 335, cy: 920, isHub: true  },
  { name: "Kerala",            cx: 245, cy: 935, isHub: false },
];

// Hub fill / base fill
const HUB   = "#b87333";
const BASE  = "#1e4d35";
const WHITE = "#ffffff";

// ─── SVG Pin ──────────────────────────────────────────────────────────────────
// Renders entirely inside the SVG → no coordinate-space switching.
const SvgPin = ({
  cx, cy, isHub, name, isActive, onEnter, onLeave,
}: {
  cx: number; cy: number; isHub: boolean; name: string;
  isActive: boolean; onEnter: () => void; onLeave: () => void;
}) => {
  const fill = isHub ? HUB : BASE;
  const r    = isHub ? 9 : 7;

  // Tooltip width sizing
  const labelW  = Math.max(name.length * 5.6 + 16, 70);
  const labelX  = -labelW / 2;
  const hubRows = isHub ? 26 : 18;

  return (
    <g
      className="cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
      style={{ pointerEvents: "all" }}
    >
      {/* Pulse ring (hub only) */}
      {isHub && (
        <circle cx={cx} cy={cy - r} r={r + 5} fill="none" stroke={HUB} strokeWidth="1.5" opacity="0.35">
          <animate attributeName="r" values={`${r + 4};${r + 10};${r + 4}`} dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
        </circle>
      )}

      {/* Pin body (teardrop) */}
      <circle cx={cx} cy={cy - r} r={r} fill={fill} stroke={WHITE} strokeWidth="1.8" />
      <circle cx={cx} cy={cy - r} r={r * 0.45} fill={WHITE} fillOpacity="0.92" />
      {/* tail */}
      <polygon
        points={`${cx - 4},${cy - 2} ${cx + 4},${cy - 2} ${cx},${cy + 8}`}
        fill={fill}
      />

      {/* Tooltip — shown on hover */}
      {isActive && (
        <g>
          {/* Arrow */}
          <polygon
            points={`${cx - 5},${cy - r * 2 - 4} ${cx + 5},${cy - r * 2 - 4} ${cx},${cy - r * 2 + 2}`}
            fill={BASE}
          />
          {/* Box */}
          <rect
            x={cx + labelX} y={cy - r * 2 - 4 - hubRows}
            width={labelW} height={hubRows}
            rx="5" fill={BASE} stroke={HUB} strokeWidth="1"
          />
          <text
            x={cx} y={cy - r * 2 - 4 - hubRows + (isHub ? 9 : 11)}
            textAnchor="middle" fill={WHITE}
            fontSize="8.5" fontWeight="700" fontFamily="Inter, system-ui, sans-serif"
          >
            {name}
          </text>
          {isHub && (
            <text
              x={cx} y={cy - r * 2 - 4 - hubRows + 20}
              textAnchor="middle" fill={HUB}
              fontSize="7" fontWeight="600" fontFamily="Inter, system-ui, sans-serif"
            >
              Regional Hub
            </text>
          )}
        </g>
      )}
    </g>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const IndiaPresence = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Map Card ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Card shell */}
            <div
              className="relative w-full rounded-[2.5rem] border shadow-[0_40px_80px_-20px_rgba(0,0,0,0.18)] overflow-hidden"
              style={{ background: "#f0ece4", borderColor: "#d4b896" }}
            >
              {/* Parchment grid texture */}
              <div
                className="absolute inset-0 z-0 opacity-25 pointer-events-none rounded-[2.5rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(180,140,100,0.3) 1px,transparent 1px)," +
                    "linear-gradient(90deg,rgba(180,140,100,0.3) 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/*
                ── SVG coordinate system ──────────────────────────────────
                padding-bottom = 1000/850 × 100 = 117.6% enforces the exact
                850 × 1000 aspect ratio of the viewBox. With xMidYMid meet,
                the SVG fills the container with zero letterboxing.
                Every state path and every pin share this coordinate space
                → no guessing, no breakpoints needed, responsive by default.
              */}
              <div className="relative w-full" style={{ paddingBottom: "117.6%" }}>
                <div className="absolute inset-0 p-4 md:p-6">
                  <svg
                    viewBox="0 0 850 1000"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ overflow: "visible" }}
                  >
                    {/* ── State fills ── */}
                    <g>
                      {STATES.map((s) => {
                        const isPinned = PINS.some((p) => p.name === s.name || s.name.startsWith(p.name.split(" ")[0]));
                        const isHovered = activePin && (
                          s.name === activePin ||
                          PINS.find((p) => p.name === activePin)?.name.includes(s.name.split(" ")[0])
                        );
                        return (
                          <path
                            key={s.name}
                            d={s.d}
                            fill={isHovered ? HUB : isPinned ? "#234f37" : "#1a3d2a"}
                            stroke="rgba(255,255,255,0.18)"
                            strokeWidth="1"
                            style={{ transition: "fill 0.25s ease" }}
                          />
                        );
                      })}
                    </g>

                    {/* ── Subtle state labels (abbreviations) ── */}
                    <g opacity="0.35" style={{ pointerEvents: "none" }}>
                      {[
                        { abbr: "JK",  x: 235, y:  50 }, { abbr: "PB",  x: 220, y: 140 },
                        { abbr: "DL",  x: 276, y: 200 }, { abbr: "RJ",  x: 140, y: 270 },
                        { abbr: "UP",  x: 350, y: 260 }, { abbr: "BR",  x: 485, y: 265 },
                        { abbr: "WB",  x: 530, y: 380 }, { abbr: "AS",  x: 665, y: 280 },
                        { abbr: "GJ",  x:  80, y: 410 }, { abbr: "MP",  x: 280, y: 400 },
                        { abbr: "CT",  x: 380, y: 460 }, { abbr: "OR",  x: 460, y: 480 },
                        { abbr: "MH",  x: 200, y: 570 }, { abbr: "TG",  x: 345, y: 610 },
                        { abbr: "AP",  x: 380, y: 760 }, { abbr: "KA",  x: 210, y: 760 },
                        { abbr: "TN",  x: 335, y: 920 }, { abbr: "KL",  x: 245, y: 935 },
                      ].map((l) => (
                        <text
                          key={l.abbr} x={l.x} y={l.y}
                          textAnchor="middle" dominantBaseline="middle"
                          fill="white" fontSize="9" fontWeight="600"
                          fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.05em"
                        >{l.abbr}</text>
                      ))}
                    </g>

                    {/* ── Decorative compass rose ── */}
                    <g transform="translate(790,950)" opacity="0.18">
                      <circle r="18" fill="none" stroke={HUB} strokeWidth="1" />
                      <polygon points="0,-14 3,-4 0,-8 -3,-4" fill={HUB} />
                      <polygon points="0,14 3,4 0,8 -3,4"  fill={WHITE} fillOpacity="0.6" />
                      <polygon points="-14,0 -4,3 -8,0 -4,-3" fill={WHITE} fillOpacity="0.6" />
                      <polygon points="14,0 4,3 8,0 4,-3"  fill={WHITE} fillOpacity="0.6" />
                      <text x="0" y="-18" textAnchor="middle" fill={HUB} fontSize="7" fontWeight="700">N</text>
                    </g>

                    {/* ── Pins (always on top) ── */}
                    {PINS.map((pin) => (
                      <SvgPin
                        key={pin.name}
                        cx={pin.cx} cy={pin.cy}
                        isHub={pin.isHub} name={pin.name}
                        isActive={activePin === pin.name}
                        onEnter={() => setActivePin(pin.name)}
                        onLeave={() => setActivePin(null)}
                      />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Active state badge — top-center, HTML layer */}
              <AnimatePresence>
                {activePin && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white shadow-lg z-50 whitespace-nowrap"
                    style={{ background: BASE, border: `1px solid ${HUB}` }}
                  >
                    {activePin}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pan-India callout badge */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-6 md:-right-6 bg-agri-earth-900 p-5 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-white/5 max-w-[210px] z-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-agri-gold-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-agri-gold-500" />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">Pan-India Reach</h4>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">
                Projects across{" "}
                <span className="text-agri-gold-500 font-bold">28+ States</span> with{" "}
                <span className="text-white font-medium">2,000+ professionals</span>.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Content & Stats — UNCHANGED ──────────────────────── */}
          <div className="pl-0 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 text-agri-gold-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
                <div className="w-12 h-px bg-agri-gold-500/30" />
                OUR FOOTPRINT
              </div>
              <h2 className="text-4xl md:text-7xl font-serif text-agri-earth-900 leading-[1.05] mb-8">
                Cultivating <br />
                <span className="italic text-agri-green-800">Bharat's Vision.</span>
              </h2>
              <p className="text-lg text-black/50 font-light mb-12 max-w-xl leading-relaxed">
                From high-tech engineering in the North to commercial transitions in the South,
                IGO is driving India's agricultural sovereignty.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {indiaPresence.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2rem] bg-agri-earth-25 border border-black/5 hover:border-agri-green-800/20 hover:shadow-xl transition-all group overflow-hidden relative"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    <CheckCircle2 className="w-24 h-24 text-agri-green-800" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-agri-earth-900 mb-2 group-hover:text-agri-green-800 transition-colors tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">
                    {stat.label}
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-agri-gold-500" />
                    <span className="text-[9px] font-bold text-agri-gold-600 uppercase tracking-tighter">
                      {stat.sublabel || "Verified Metric"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-agri-earth-25 rounded-2xl border border-black/5"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-agri-earth-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Partner" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-xs font-medium text-black/60 italic leading-relaxed">
                Join{" "}
                <span className="text-agri-green-800 font-bold not-italic">15,000+</span>{" "}
                success stories{" "}
                <br className="hidden sm:block" /> with IGO's high-performance engineering.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndiaPresence;
