import { motion, Variants } from "framer-motion";
import { ArrowRight, Rocket, Target, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const StartupPlatform = () => (
  <div className="bg-white min-h-screen selection:bg-black selection:text-white pt-32">
    <section className="pb-32 container mx-auto px-6">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-4xl"
      >
        <motion.p variants={fader} className="text-luxury mb-8 text-primary">Venture Architecture</motion.p>
        <motion.h1 variants={fader} className="text-8xl leading-[0.95] tracking-tight mb-12">
          Agri Startup <br /> Platform.
        </motion.h1>
        <motion.p variants={fader} className="text-black/50 text-2xl leading-relaxed max-w-2xl font-light">
          We empower the next generation of agri-entrepreneurs with modular technology, institutional capital, and strategic domain expertise.
        </motion.p>
      </motion.div>
    </section>

    <section className="py-40 bg-agri-earth-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Rocket className="w-8 h-8" />, title: "Launchpad", desc: "End-to-end support for new agri-ventures." },
            { icon: <Target className="w-8 h-8" />, title: "Precision", desc: "Data-driven strategies for market entry." },
            { icon: <Shield className="w-8 h-8" />, title: "Security", desc: "Institutional-grade risk management." },
            { icon: <Zap className="w-8 h-8" />, title: "Scale", desc: "Accelerated growth through IGO ecosystem." },
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white rounded-3xl border border-black/[0.03] space-y-8">
              <div className="text-primary">{item.icon}</div>
              <h3 className="text-2xl font-medium">{item.title}</h3>
              <p className="text-black/50 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-64 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-7xl mb-12 tracking-tight">Begin your <br /> legacy today.</h2>
        <Link to="/contact" className="px-16 py-5 bg-black text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity uppercase tracking-widest">
          Join the Platform
        </Link>
      </div>
    </section>
  </div>
);

export default StartupPlatform;
