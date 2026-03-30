import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 min-h-[100dvh] bg-white flex flex-col items-center justify-center z-50">
      {/* Outer rotating ring */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 rounded-full border-[3px] border-black/5 border-t-agri-gold-500 border-r-agri-green-800"
          style={{ willChange: "transform" }}
        />
        
        {/* Inner reverse rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          className="absolute inset-2 z-10 rounded-full border-2 border-transparent border-t-agri-green-800 opacity-70"
          style={{ willChange: "transform" }}
        />

        {/* Center glowing dot */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-agri-green-800 shadow-[0_0_15px_rgba(26,66,49,0.5)] z-20"
        />
      </div>
      
      {/* Loading text */}
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        className="mt-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-agri-green-800"
      >
        Loading
      </motion.div>
    </div>
  );
};

export default PageLoader;
