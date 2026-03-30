import { motion } from "framer-motion";

interface IndiaMapSVGProps {
  activeState: string | null;
  onStateHover: (stateName: string | null) => void;
}

const IndiaMapSVG = ({ activeState, onStateHover }: IndiaMapSVGProps) => {
  // SVG paths for India states (simplified/representative)
  // These coordinates are mapped to a 540x620 viewBox
  const states = [
    { name: "Jammu & Kashmir", abbr: "JK", d: "M220,10 L280,10 L310,60 L260,110 L190,90 L180,40 Z", lx: 235, ly: 50 },
    { name: "Ladakh", abbr: "LA", d: "M280,10 L360,30 L380,80 L310,100 L310,60 Z", lx: 330, ly: 55 },
    { name: "Himachal Pradesh", abbr: "HP", d: "M265,110 L315,102 L340,140 L280,160 L250,145 Z", lx: 295, ly: 135 },
    { name: "Punjab", abbr: "PB", d: "M200,100 L255,115 L250,165 L190,160 Z", lx: 220, ly: 140 },
    { name: "Uttarakhand", abbr: "UK", d: "M310,110 L350,140 L330,190 L285,170 Z", lx: 320, ly: 165 },
    { name: "Haryana", abbr: "HR", d: "M210,165 L260,175 L285,215 L230,225 L200,200 Z", lx: 245, ly: 200 },
    { name: "Delhi / NCR", abbr: "DL", d: "M268,188 L285,188 L285,205 L268,205 Z", lx: 276, ly: 198 },
    { name: "Rajasthan", abbr: "RJ", d: "M80,190 L190,180 L220,280 L180,340 L100,330 L60,260 Z", lx: 140, ly: 270 },
    { name: "Uttar Pradesh", abbr: "UP", d: "M290,175 L430,210 L450,290 L380,330 L280,290 L240,230 Z", lx: 350, ly: 260 },
    { name: "Gujarat", abbr: "GJ", d: "M20,330 L110,340 L160,450 L100,470 L30,440 L10,380 Z", lx: 80, ly: 410 },
    { name: "Madhya Pradesh", abbr: "MP", d: "M175,345 L320,310 L390,430 L300,480 L180,460 Z", lx: 280, ly: 400 },
    { name: "Bihar", abbr: "BR", d: "M435,215 L520,230 L530,300 L455,310 Z", lx: 485, ly: 265 },
    { name: "Jharkhand", abbr: "JH", d: "M430,305 L500,315 L510,380 L440,390 Z", lx: 470, ly: 350 },
    { name: "West Bengal", abbr: "WB", d: "M505,320 L550,330 L560,450 L500,410 Z", lx: 530, ly: 380 },
    { name: "Sikkim", abbr: "SK", d: "M525,205 L550,205 L550,230 L525,230 Z", lx: 538, ly: 218 },
    { name: "Chhattisgarh", abbr: "CT", d: "M320,380 L395,350 L435,480 L380,550 L310,480 Z", lx: 380, ly: 460 },
    { name: "Odisha", abbr: "OR", d: "M405,435 L485,410 L520,500 L450,550 L400,530 Z", lx: 460, ly: 480 },
    { name: "Maharashtra", abbr: "MH", d: "M115,455 L280,485 L310,610 L230,660 L140,620 L90,560 Z", lx: 200, ly: 570 },
    { name: "Telangana", abbr: "TG", d: "M290,530 L390,540 L410,650 L340,680 L280,630 Z", lx: 345, ly: 610 },
    { name: "Andhra Pradesh", abbr: "AP", d: "M300,640 L420,660 L440,840 L350,860 L310,750 Z", lx: 380, ly: 760 },
    { name: "Karnataka", abbr: "KA", d: "M150,630 L260,650 L280,830 L180,850 L140,750 Z", lx: 210, ly: 760 },
    { name: "Goa", abbr: "GA", d: "M135,715 L155,715 L155,735 L135,735 Z", lx: 145, ly: 725 },
    { name: "Tamil Nadu", abbr: "TN", d: "M300,840 L390,850 L370,980 L290,980 L270,920 Z", lx: 335, ly: 920 },
    { name: "Kerala", abbr: "KL", d: "M200,865 L275,855 L285,980 L240,990 Z", lx: 245, ly: 935 },
    { name: "Assam", abbr: "AS", d: "M630,250 L710,260 L700,310 L620,300 Z", lx: 665, ly: 280 },
    { name: "Arunachal", abbr: "AR", d: "M670,200 L760,225 L730,270 L660,255 Z", lx: 715, ly: 235 },
    { name: "Nagaland", abbr: "NL", d: "M720,275 L760,285 L750,320 L720,320 Z", lx: 740, ly: 300 },
    { name: "Manipur", abbr: "MN", d: "M715,330 L755,330 L750,370 L710,370 Z", lx: 735, ly: 350 },
    { name: "Mizoram", abbr: "MZ", d: "M690,380 L725,380 L720,430 L690,430 Z", lx: 710, ly: 405 },
    { name: "Tripura", abbr: "TR", d: "M660,360 L685,360 L680,400 L655,400 Z", lx: 673, ly: 380 },
    { name: "Meghalaya", abbr: "ML", d: "M620,310 L680,315 L675,345 L615,340 Z", lx: 650, ly: 330 },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 850 1000"
        className="w-full h-full max-h-[500px] object-contain"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="4" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#shadow)">
          {states.map((state) => {
            const isActive = activeState === state.name;
            return (
              <g
                key={state.name}
                onMouseEnter={() => onStateHover(state.name)}
                onMouseLeave={() => onStateHover(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* State Path */}
                <motion.path
                  d={state.d}
                  initial={{ fill: "#1e4d35", stroke: "rgba(255,255,255,0.1)" }}
                  animate={{
                    fill: isActive ? "#b87333" : "#1e4d35",
                    stroke: isActive ? "#fff" : "rgba(255,255,255,0.1)",
                    strokeWidth: isActive ? 2 : 1,
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* State Abbreviation */}
                <motion.text
                  x={state.lx}
                  y={state.ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  animate={{
                    fill: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                    scale: isActive ? 1.1 : 1,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  style={{
                    fontSize: isActive ? "14px" : "11px",
                    fontWeight: isActive ? 700 : 500,
                    pointerEvents: "none",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {state.abbr}
                </motion.text>
              </g>
            );
          })}
        </g>

        {/* Floating Decorative Elements */}
        <g opacity="0.1">
          <circle cx="100" cy="100" r="2" fill="#b87333" />
          <circle cx="750" cy="150" r="3" fill="#1e4d35" />
          <circle cx="50" cy="850" r="2.5" fill="#b87333" />
          <path d="M700 800 L720 820 M700 820 L720 800" stroke="#1e4d35" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

export default IndiaMapSVG;
