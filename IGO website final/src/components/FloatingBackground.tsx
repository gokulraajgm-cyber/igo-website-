import { motion } from "framer-motion";

const icons = [
  { emoji: "🌾", x: "8%", y: "15%", size: "text-3xl", delay: 0, duration: 12 },
  { emoji: "🚜", x: "85%", y: "25%", size: "text-2xl", delay: 2, duration: 14 },
  { emoji: "🌳", x: "20%", y: "70%", size: "text-4xl", delay: 1, duration: 10 },
  { emoji: "🌽", x: "75%", y: "60%", size: "text-2xl", delay: 3, duration: 13 },
  { emoji: "🐄", x: "50%", y: "80%", size: "text-3xl", delay: 4, duration: 11 },
  { emoji: "🌻", x: "90%", y: "75%", size: "text-xl", delay: 1.5, duration: 15 },
  { emoji: "💧", x: "15%", y: "45%", size: "text-xl", delay: 2.5, duration: 9 },
  { emoji: "🌱", x: "65%", y: "10%", size: "text-2xl", delay: 0.5, duration: 12 },
  { emoji: "🏡", x: "40%", y: "35%", size: "text-xl", delay: 3.5, duration: 14 },
  { emoji: "☀️", x: "55%", y: "90%", size: "text-2xl", delay: 1, duration: 10 },
];

const FloatingBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {icons.map((icon, i) => (
      <motion.div
        key={i}
        className={`absolute ${icon.size} opacity-[0.06] select-none`}
        style={{ left: icon.x, top: icon.y }}
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: icon.duration,
          delay: icon.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {icon.emoji}
      </motion.div>
    ))}
  </div>
);

export default FloatingBackground;
