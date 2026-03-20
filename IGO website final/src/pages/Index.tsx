import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wheat, Fish, Tractor, Droplets, Leaf, Shield, Hammer } from "lucide-react";
import { stats, projects, services, navLinks } from "@/data/siteData";
import { motion, Variants } from "framer-motion";

const HERO_IMAGE = "/assets/tesla_agri_hero_1773740814701.png";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const HeroSection = () => (
  <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-black text-white">
    <motion.div 
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.7 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <img 
        src={HERO_IMAGE} 
        alt="Future of Farming" 
        className="w-full h-full object-cover"
      />
    </motion.div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.2 } }
        }}
        className="max-w-4xl mx-auto"
      >
        <motion.p 
          variants={fader} 
          className="inline-block px-5 py-1.5 mb-8 text-[11px] font-black uppercase tracking-[0.25em] text-primary-foreground bg-primary rounded-full shadow-lg"
        >
          India's Leading Agri Engineering & Agri Consulting Brand
        </motion.p>
        <motion.h1 variants={fader} className="text-white mb-10 tracking-tight leading-[0.95] text-5xl md:text-7xl font-black">
          Building Profitable <br /> Smart Farms.
        </motion.h1>
        <motion.div variants={fader} className="flex flex-wrap justify-center gap-6">
          <Link to="/projects" className="px-12 py-4 bg-white text-black text-xs font-semibold rounded-full hover:bg-white/90 transition-all uppercase tracking-widest">
            View Projects
          </Link>
          <Link to="/contact" className="px-12 py-4 bg-transparent border border-white/30 text-white text-xs font-semibold rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest">
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <div className="w-px h-16 bg-white/20 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white" />
      </div>
    </motion.div>
  </section>
);

const useCounter = (target: number, duration = 2000, startCounting: boolean = false) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
};

const tickerItems = [
  "15+ Years of Excellence", "10,000+ Successful Projects", "2000+ Team Members",
  "75+ Winning Awards", "Pan-India Presence", "Precision Farming Experts",
  "ISO Certified Organisation", "Trusted by 6000+ Farmers"
];

const TickerBanner = () => (
  <div className="bg-primary overflow-hidden py-3 flex">
    <motion.div
      className="flex items-center gap-0 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    >
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span key={i} className="text-white text-xs font-bold uppercase tracking-widest px-8 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

const MiniStatCard = ({ value, label }: { value: string; label: string }) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const numericTarget = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(numericTarget, 2000, inView);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#F4F8F4] border border-[#e0ede0] rounded-2xl p-6 flex flex-col gap-1 hover:shadow-md transition-shadow">
      <div className="text-4xl font-black tracking-tighter text-black leading-none">
        {count.toLocaleString()}<span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm text-black/50 font-medium mt-1">{label}</div>
    </div>
  );
};

const WhyChooseSection = () => (
  <section className="py-24 bg-white">
    <TickerBanner />
    <div className="container mx-auto px-6 mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5">
              Why Choose IGO
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5">
              Innovation & Profitable Growth
            </h2>
            <p className="text-black/50 text-base leading-relaxed max-w-lg">
              At IGO Agritech Farms, we don’t just build farms — we build profitable agricultural
              ecosystems designed for the future. At IGO Agritech Farms, we offer a range of
              innovative and sustainable agricultural solutions, including polyhouse projects,
              hydroponics projects, open cultivation, floriculture, goat farming, aquaculture,
              vertical farming, gardening, and rooftop gardens.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MiniStatCard value="15+"   label="Years of Experience" />
            <MiniStatCard value="10,000+" label="Successful Projects" />
            <MiniStatCard value="2,000+" label="Team Members" />
            <MiniStatCard value="75+"   label="Winning Awards" />
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 w-fit px-8 py-3.5 border-2 border-black text-sm font-bold rounded-full hover:bg-black hover:text-white transition-all"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
        >
          <img
            src="/assets/award_ceremony_ceo.png"
            alt="Agriculture Innovation Award"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const BusinessSectorsSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 mb-20"
      >
        <div className="flex items-center gap-4 text-[#C5A03F] font-bold text-xs uppercase tracking-[0.3em]">
          <div className="w-10 h-[1px] bg-[#C5A03F]" />
          Core Business Sectors
          <div className="w-10 h-[1px] bg-[#C5A03F]" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
          Core Business Sectors
        </h2>
        <div className="flex gap-1.5 mt-2">
          <div className="w-12 h-1.5 bg-[#1F4529] rounded-full" />
          <div className="w-4 h-1.5 bg-[#C5A03F] rounded-full" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: "Agri Farming Projects", 
            icon: <img src="/assets/projects/agri_farming.jpg" alt="Agri Farming Projects" className="w-full h-full object-cover" />, 
            desc: "From polyhouses to open-field plantations, we design and execute..",
            link: "/projects/agri-farming"
          },
          { 
            title: "Aquaculture Farming Projects", 
            icon: <img src="/assets/core bussiness picture/aquatic_plants.jpg" alt="Aquaculture Farming Projects" className="w-full h-full object-cover" />, 
            desc: "Comprehensive aquaculture farm setups from biofloc systems to...", 
            link: "/projects/aquaculture"
          },
          { 
            title: "Livestock Farming Projects", 
            icon: <img src="/assets/core bussiness picture/livestock.jpg" alt="Livestock Farming Projects" className="w-full h-full object-cover" />, 
            desc: "Turn-key livestock farm projects including goat farms, dairy setups,...",
            link: "/projects/livestock"
          },
          { 
            title: "Farm Engineering Projects", 
            icon: <img src="/assets/core bussiness picture/farm_engineering.jpg" alt="Farm Engineering Projects" className="w-full h-full object-cover" />, 
            desc: "Infrastructure, water management, solar technology, and land..",
            link: "/projects/farm-engineering"
          }
        ].map((sector, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden p-10 rounded-[2rem] text-left transition-all duration-500 hover:-translate-y-2 border-2 
              bg-[#F8FAF8] border-[#F1F3F1] hover:bg-[#1F4529] hover:border-[#1F4529] hover:shadow-2xl hover:shadow-[#1F4529]/20"
          >
            <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 
              bg-white shadow-lg shadow-black/5 group-hover:bg-[#C5A03F] group-hover:scale-110 overflow-hidden">
              {sector.icon}
            </div>
            <h3 className="relative z-10 text-xl font-black mb-4 leading-tight text-[#1A1A1A] group-hover:text-white transition-colors duration-500">
              {sector.title}
            </h3>
            <p className="relative z-10 text-sm leading-relaxed mb-8 text-black/50 group-hover:text-white/70 transition-colors duration-500">
              {sector.desc}
            </p>
            <Link 
              to={sector.link}
              className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider group/link
                text-primary hover:text-black group-hover:text-[#C5A03F] group-hover:hover:text-white transition-colors duration-500"
            >
              Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Featured Projects Gallery (Overlapping Cards) ──────────────────────────
const ProjectGallerySection = () => {
  const gallProjects = [
    {
      id: "01",
      title: "Agri farming projects",
      bg: "bg-[#F5F5F7]",
      hoverBg: "hover:bg-[#E8F5E9]",
      image: "/assets/projects/agri_farming.jpg",
      href: "/projects/agri"
    },
    {
      id: "02",
      title: "Aquaculture project",
      bg: "bg-[#F5F5F7]",
      hoverBg: "hover:bg-[#E8F5E9]",
      image: "/assets/projects/aquaculture.jpg",
      href: "/projects/aquaculture"
    },
    {
      id: "03",
      title: "Livestocks project",
      bg: "bg-[#F5F5F7]",
      hoverBg: "hover:bg-[#E8F5E9]",
      image: "/assets/projects/livestock.jpg",
      href: "/projects/livestock"
    },
    {
      id: "04",
      title: "Farm engineering projects",
      bg: "bg-[#F5F5F7]",
      hoverBg: "hover:bg-[#E8F5E9]",
      image: "/assets/projects/farm_engineering.jpg",
      href: "/projects/engineering"
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-20 text-center"
        >
          <div className="flex items-center gap-4 text-[#C5A03F] font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em]">
            <div className="w-6 sm:w-10 h-[1px] bg-[#C5A03F]" />
            Featured Projects
            <div className="w-6 sm:w-10 h-[1px] bg-[#C5A03F]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Featured Projects
          </h2>
          <div className="flex gap-1.5 mt-2">
            <div className="w-12 h-1.5 bg-[#1F4529] rounded-full" />
            <div className="w-4 h-1.5 bg-[#C5A03F] rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {gallProjects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => window.location.href = p.href}
              className={`group relative ${p.bg} ${p.hoverBg} rounded-[2rem] p-8 min-h-[480px] flex flex-col border border-black/5 hover:border-primary/20 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden`}
            >
              <div className="text-xl font-bold text-black/20 mb-6 tracking-widest">{p.id}</div>
              <div className="max-w-[80%] relative z-10">
                <h3 className="text-2xl font-black text-black leading-tight mb-4 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/40 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              {/* Overlapping Image at bottom with soft-organic merge mask */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[65%] pointer-events-none"
                style={{
                  maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)",
                }}
              >
                <motion.img
                  src={p.image}
                  alt={p.title}
                  whileHover={{ scale: 1.08 }}
                  className="w-full h-full object-cover object-bottom transition-transform duration-1000 select-none"
                  style={{ filter: "drop-shadow(0 -5px 15px rgba(0,0,0,0.05))" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const serviceLinks = navLinks.find(l => l.label === "Services")?.children || [];
  
  return (
    <section className="py-32 bg-[#F5F5F7] overflow-hidden selection:bg-[#E8F5E9] selection:text-[#1A4231]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 text-[#C5A03F] font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6">
            <div className="w-8 sm:w-12 h-[1px] bg-[#C5A03F]" />
            OUR EXPERTISE
            <div className="w-8 sm:w-12 h-[1px] bg-[#C5A03F]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-8 leading-tight">
            Professional Agri <span className="italic text-[#1A4231]">Expertise.</span>
          </h2>
          <div className="flex gap-1.5 justify-center">
            <div className="w-10 h-1 bg-[#1A4231]" />
            <div className="w-2 h-1 bg-[#1A4231]/30" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {serviceLinks.map((s: any, i: number) => {
            const Icon = i === 0 ? Tractor : i === 1 ? Droplets : i === 2 ? Shield : Hammer;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-10 min-h-[460px] md:min-h-[550px] flex flex-col border border-black/5 hover:border-[#C5A03F]/20 transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] cursor-pointer overflow-hidden"
              >
                <Link to={s.href} className="absolute inset-0 z-20" />
                
                {/* Title & Index Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A4231]/5 flex items-center justify-center group-hover:bg-[#C5A03F]/10 transition-colors">
                    <Icon className="w-5 h-5 text-[#1A4231] group-hover:text-[#C5A03F] transition-colors" />
                  </div>
                  <div className="text-xl font-bold text-black/20 tracking-widest">0{i + 1}</div>
                </div>

                <div className="relative z-10 flex-1">
                  <h2 className="text-2xl font-black text-[#C5A03F] mb-6 leading-tight group-hover:text-[#1A4231] transition-colors duration-300 min-h-[5rem]">
                    {s.label}
                  </h2>
                  
                  {/* Layer Previews (Sub-categories) */}
                  <div className="space-y-3 mb-8 min-h-[140px]">
                     {s.children?.slice(0, 4).map((child: any) => (
                       <div key={child.label} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                          <div className="w-1 h-1 rounded-full bg-[#1A4231]/40" />
                          <span className="text-[12px] font-bold text-black/50 group-hover:text-black/80 transition-colors uppercase tracking-[0.15em] line-clamp-1">
                            {child.label}
                          </span>
                       </div>
                     ))}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center text-black/40 group-hover:bg-[#C5A03F] group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Overlapping Bottom Image - CLEAR, NO MIST */}
                <div className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none rounded-t-[2rem] overflow-hidden border-t border-black/5 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
                  <motion.img
                    src={s.icon && typeof s.icon === 'string' ? s.icon : "/assets/projects/agri_farming.jpg"}
                    alt={s.label}
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 select-none opacity-100"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProductEcosystem = () => {
  const productLinks = navLinks.find(l => l.label === "Products")?.children || [];
  
  return (
    <section className="py-40 bg-white overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              <div className="w-12 h-[1px] bg-primary/30" />
              PRODUCT INFRASTRUCTURE
            </div>
            <h2 className="text-4xl md:text-7xl font-serif text-[#1A1A1A] leading-[1.05]">
              High-Performance <br /> <span className="italic text-primary">Agri Inputs.</span>
            </h2>
          </div>
          <Link to="/products" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-black">
             Explore All <span className="hidden sm:inline">Products</span> 
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <ArrowRight className="w-5 h-5" />
             </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {productLinks.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-slate-100 border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <Link to={cat.href} className="absolute inset-0 z-20" />
              <img 
                src={cat.icon && typeof cat.icon === 'string' ? cat.icon : "/assets/projects/agri_farming.jpg"}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-500 opacity-90 group-hover:opacity-100">
                 <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-3 block">Product Sector {i+1}</span>
                 <h3 className="text-3xl font-black text-white mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-500 drop-shadow-lg">{cat.label}</h3>
                 <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#C5A03F] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    View Catalog <ArrowRight className="w-4 h-4" />
                 </div>
              </div>

              <div className="absolute top-10 right-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                 <Leaf className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-64 bg-white text-center">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-7xl mb-12 font-black tracking-tight">Your vision, <br /> our engineering.</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/contact" className="px-16 py-5 bg-black text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity uppercase tracking-widest">
            Request Consultation
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const BarleyBannerSection = () => (
  <section className="overflow-hidden bg-white pb-0">
    {/* Full-width barley image */}
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden"
    >
      <img
        src="/assets/barley_hero_clean.png"
        alt="IGO Agritech Farms — Innovating the Future of Farming"
        className="w-full object-cover object-center"
        style={{ width: "100%" }}
      />
    </motion.div>
  </section>
);

const Index = () => (
  <div className="bg-white min-h-screen selection:bg-[#E8F5E9] selection:text-[#1A4231] overflow-x-hidden">
    <HeroSection />
    <WhyChooseSection />
    <BusinessSectorsSection />
    <ProjectGallerySection />
    <BarleyBannerSection />
    <FeatureSection />
    <ProductEcosystem />
    <CTASection />
  </div>
);

export default Index;
