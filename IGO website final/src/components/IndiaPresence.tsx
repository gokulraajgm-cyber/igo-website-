import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, CheckCircle2 } from "lucide-react";
import { indiaPresence } from "@/data/siteData";

// ─── Coordinate System ────────────────────────────────────────────────────────
//
//  The PNG (/assets/home page map .png) is 2760 × 1504 px, RGBA.
//  Pixel-scan revealed the India map content bounds:
//    left=1024px (37.1%)  right=2758px (99.9%)
//    top= 356px  (23.7%)  bottom=1500px (99.7%)
//
//  Geographic bounds of India:
//    longitude: 68°E → 97°E  (span = 29°)
//    latitude:  37°N → 8°N   (span = 29°)
//
//  Conversion (geographic → image pixel):
//    img_x = 1024 + (lon − 68) / 29 × 1734
//    img_y =  356 + (37 − lat) / 29 × 1144
//
//  The SVG overlay uses viewBox="0 0 2760 1504" + preserveAspectRatio="xMidYMid meet"
//  which is IDENTICAL to how the PNG is displayed (object-contain, centered).
//  → Pin SVG coords == Pin image coords → perfect alignment on every screen size.
//
// ─────────────────────────────────────────────────────────────────────────────

const GEO = {
  IMG_W: 2760, IMG_H: 1504,
  MAP_LEFT: 1024, MAP_TOP: 356,
  MAP_W: 1734, MAP_H: 1144,
  LON_MIN: 68, LON_MAX: 97,
  LAT_MIN: 8,  LAT_MAX: 37,
} as const;

/** Convert real latitude/longitude to SVG/image pixel coordinates */
function geo(lon: number, lat: number): { cx: number; cy: number } {
  const cx = GEO.MAP_LEFT + ((lon - GEO.LON_MIN) / (GEO.LON_MAX - GEO.LON_MIN)) * GEO.MAP_W;
  const cy = GEO.MAP_TOP  + ((GEO.LAT_MAX - lat) / (GEO.LAT_MAX - GEO.LAT_MIN)) * GEO.MAP_H;
  return { cx: Math.round(cx), cy: Math.round(cy) };
}

// ─── Pin Dataset ──────────────────────────────────────────────────────────────
// lon/lat from official geographic centroids of each state.
const PINS = [
  { name: "Jammu & Kashmir",   lon: 76.0, lat: 34.0, isHub: false },
  { name: "Punjab",            lon: 75.3, lat: 31.1, isHub: false },
  { name: "Delhi / NCR",       lon: 77.1, lat: 28.7, isHub: true  },
  { name: "Rajasthan",         lon: 73.9, lat: 27.0, isHub: false },
  { name: "Uttar Pradesh",     lon: 80.9, lat: 26.8, isHub: true  },
  { name: "Bihar",             lon: 85.3, lat: 25.1, isHub: false },
  { name: "West Bengal",       lon: 87.9, lat: 23.0, isHub: false },
  { name: "Assam & NE States", lon: 92.9, lat: 26.2, isHub: false },
  { name: "Gujarat",           lon: 71.5, lat: 22.3, isHub: false },
  { name: "Madhya Pradesh",    lon: 78.6, lat: 23.5, isHub: false },
  { name: "Chhattisgarh",      lon: 81.9, lat: 21.3, isHub: false },
  { name: "Odisha",            lon: 85.1, lat: 20.4, isHub: false },
  { name: "Maharashtra",       lon: 75.7, lat: 19.7, isHub: true  },
  { name: "Telangana",         lon: 79.5, lat: 18.0, isHub: false },
  { name: "Andhra Pradesh",    lon: 79.7, lat: 15.9, isHub: true  },
  { name: "Karnataka",         lon: 75.7, lat: 15.3, isHub: true  },
  { name: "Tamil Nadu",        lon: 78.7, lat: 11.1, isHub: true  },
  { name: "Kerala",            lon: 76.5, lat: 10.4, isHub: false },
].map((p) => ({ ...p, ...geo(p.lon, p.lat) }));

// ─── SVG Pin ──────────────────────────────────────────────────────────────────
const HUB  = "#b87333";
const BASE = "#1e4d35";

interface PinProps {
  cx: number; cy: number; isHub: boolean; name: string;
  isActive: boolean; onEnter: () => void; onLeave: () => void;
}

const MapPin = ({ cx, cy, isHub, name, isActive, onEnter, onLeave }: PinProps) => {
  const fill = isHub ? HUB : BASE;
  const r    = isHub ? 18 : 13;          // radius in image-pixel space
  const tip  = cy + r * 1.6;            // bottom tip of teardrop
  const tw   = Math.max(name.length * 10 + 20, 90);  // tooltip width

  return (
    <g
      className="cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={onEnter}
      onTouchEnd={onLeave}
      style={{ pointerEvents: "all" }}
    >
      {/* Hub pulse ring */}
      {isHub && (
        <circle cx={cx} cy={cy} r={r + 8} fill="none" stroke={HUB} strokeWidth="3" opacity="0.4">
          <animate attributeName="r"       values={`${r+5};${r+18};${r+5}`} dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5"               dur="2.4s" repeatCount="indefinite" />
        </circle>
      )}

      {/* Teardrop body */}
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#fff" strokeWidth="3" />
      <circle cx={cx} cy={cy} r={r * 0.42} fill="#fff" fillOpacity="0.92" />
      <polygon points={`${cx-5},${cy+r-2} ${cx+5},${cy+r-2} ${cx},${tip}`} fill={fill} />

      {/* Tooltip */}
      {isActive && (
        <g>
          <polygon
            points={`${cx-6},${cy-r-3} ${cx+6},${cy-r-3} ${cx},${cy-r+5}`}
            fill={BASE}
          />
          <rect
            x={cx - tw/2} y={cy - r - 3 - (isHub ? 44 : 30)}
            width={tw} height={isHub ? 42 : 28}
            rx="8" fill={BASE} stroke={HUB} strokeWidth="2"
          />
          <text
            x={cx} y={cy - r - 3 - (isHub ? 44 : 30) + (isHub ? 16 : 18)}
            textAnchor="middle" fill="#fff"
            fontSize="15" fontWeight="700"
            fontFamily="Inter,system-ui,sans-serif"
          >
            {name}
          </text>
          {isHub && (
            <text
              x={cx} y={cy - r - 3 - (isHub ? 44 : 30) + 33}
              textAnchor="middle" fill={HUB}
              fontSize="12" fontWeight="600"
              fontFamily="Inter,system-ui,sans-serif"
            >
              Regional Hub
            </text>
          )}
        </g>
      )}
    </g>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────
const IndiaPresence = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
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
              {/* Parchment grid */}
              <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(180,140,100,0.3) 1px,transparent 1px)," +
                    "linear-gradient(90deg,rgba(180,140,100,0.3) 1px,transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/*
                ── Map container ──────────────────────────────────────────
                padding-bottom = 1504/2760 × 100 = 54.49%  →  natural image ratio.
                No cropping, no letterboxing: the container exactly matches the PNG.
                The SVG overlay shares the same viewBox (0 0 2760 1504) so every
                pin coordinate is in the same space as the image pixels.
              */}
              <div className="relative w-full" style={{ paddingBottom: "54.49%" }}>

                {/* PNG map — displayed at natural ratio (no distortion) */}
                <motion.img
                  src="/assets/home page map .png"
                  alt="IGO Pan-India Presence Map"
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: "fill" }}   // fill = no scaling, matches container exactly
                  animate={{ scale: [1, 1.015, 1] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                  draggable={false}
                />

                {/*
                  SVG overlay — same viewBox as the image pixel space.
                  preserveAspectRatio="none" because the container already
                  has the exact image aspect ratio → no distortion.
                  Pins are placed at geo() coordinates which use the
                  measured image bounds → guaranteed correct state placement.
                */}
                <svg
                  viewBox={`0 0 ${GEO.IMG_W} ${GEO.IMG_H}`}
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                  style={{ overflow: "visible", zIndex: 20 }}
                >
                  {PINS.map((pin) => (
                    <MapPin
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

              {/* Active state badge */}
              <AnimatePresence>
                {activePin && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white shadow-lg z-50 whitespace-nowrap"
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
