import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { directoryData } from "@/data/directoryData";

const IgoGroupBrands = () => {
  const [activeDivision, setActiveDivision] = useState(directoryData[0].id);
  const selectedDivision = directoryData.find(d => d.id === activeDivision) || directoryData[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Our Brands | IGO Agritech Farms"
        description="Explore the comprehensive network of 6 strategic divisions and 26 specialized brands driving innovation across the agricultural value chain."
        url="/igo-groups"
      />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-agri-green-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,63,0.15),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,66,49,0.8),transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-agri-gold-500/60" />
                <span className="text-agri-gold-500 font-bold text-[10px] uppercase tracking-[0.35em]">The IGO Ecosystem</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tight mb-6">
                Our <span className="italic text-agri-gold-500">Brands.</span>
              </h1>
              <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl bg-black/20 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                Explore our comprehensive network of 6 strategic divisions and 26 specialized brands driving innovation across the agricultural value chain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DIRECTORY ── */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-3">
              {directoryData.map((division, idx) => {
                const Icon = division.icon;
                const isActive = activeDivision === division.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.3 }}
                    key={division.id}
                    onClick={() => setActiveDivision(division.id)}
                    className={`flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 border text-left relative overflow-hidden group ${
                      isActive 
                        ? "bg-white border-agri-gold-500 shadow-xl shadow-agri-gold-500/10" 
                        : "bg-white/80 border-black/5 hover:bg-white hover:border-black/15 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav" 
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-agri-gold-500"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                      isActive ? "bg-agri-gold-500/10 text-agri-gold-500" : "bg-black/5 text-black/40 group-hover:text-black/60 group-hover:bg-black/10"
                    }`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`font-serif text-lg leading-tight mb-1 transition-colors ${isActive ? "text-agri-green-950 font-bold" : "text-black/70 font-medium"}`}>
                        {division.name.replace(/^\d{2}\s/, '')}
                      </h3>
                      <p className="text-xs text-black/40 font-bold uppercase tracking-widest">
                        {division.brands.length} Brands
                      </p>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDivision.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 shadow-2xl shadow-black/[0.03] relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                     <selectedDivision.icon className="w-64 h-64" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                       <div className="w-16 h-16 rounded-2xl bg-agri-gold-500/10 border border-agri-gold-500/20 text-agri-gold-500 flex items-center justify-center shrink-0">
                         <selectedDivision.icon className="w-8 h-8" strokeWidth={1.5} />
                       </div>
                       <div>
                         <p className="text-agri-gold-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-1">
                           Division {selectedDivision.name.split(' ')[0]}
                         </p>
                         <h2 className="text-3xl md:text-4xl font-serif text-agri-green-950 leading-tight">
                           {selectedDivision.name.replace(/^\d{2}\s/, '')}
                         </h2>
                       </div>
                    </div>
                    
                    <p className="text-black/60 text-lg leading-relaxed mb-10 pb-8 border-b border-black/5 font-light">
                      {selectedDivision.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedDivision.brands.map((brand, i) => (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.08 + 0.2 }}
                          key={brand.id} 
                          className="group flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-slate-50/50 hover:bg-white hover:border-agri-gold-500/30 hover:shadow-lg hover:shadow-agri-gold-500/5 transition-all cursor-default"
                        >
                           <div className="w-12 h-12 rounded-lg bg-white border border-black/5 flex items-center justify-center text-black/30 group-hover:text-agri-gold-500 group-hover:bg-agri-gold-500/10 group-hover:border-agri-gold-500/20 transition-colors font-black text-sm shadow-sm">
                             {brand.name.split(' ')[0]}
                           </div>
                           <span className="font-medium text-black/70 group-hover:text-agri-green-950 transition-colors text-[15px]">
                             {brand.name.replace(/^\d{2}\s/, '')}
                           </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-agri-green-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-agri-green-800/70 blur-[130px] rounded-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-agri-gold-500/50" />
              <span className="text-agri-gold-500 font-bold text-[10px] uppercase tracking-[0.4em]">Partner with us</span>
              <div className="h-px w-10 bg-agri-gold-500/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-5 leading-tight">
              Ready to Join the<br />
              <span className="italic text-agri-gold-500">Ecosystem?</span>
            </h2>
            <p className="text-white/50 text-lg font-light max-w-lg mx-auto mb-10">
              Discover unparalleled opportunities within India's fastest-growing agritech network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/startup-enquiry"
                className="inline-flex items-center gap-3 px-10 py-4 bg-agri-gold-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest hover:bg-white hover:text-agri-green-800 transition-all shadow-2xl shadow-agri-gold-500/25 group"
              >
                Become a Partner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IgoGroupBrands;
