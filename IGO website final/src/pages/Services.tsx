import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { navLinks } from "@/data/siteData";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Services = () => {
  const serviceLinks = navLinks.find(l => l.label === "Services")?.children || [];
  
  return (
    <div className="bg-agri-earth-25 min-h-screen selection:bg-agri-green-50 selection:text-agri-green-800">
      <SEO
        title="Our Services | Agri Engineering & Consulting — IGO Agritech Farms"
        description="Explore IGO Agritech Farms' full range of services — polyhouse construction, hydroponics, vertical farming, mushroom cultivation, biofloc, agri consulting, training & academy, and more across India."
        keywords="polyhouse construction India, hydroponics setup, vertical farming service, mushroom farming setup, biofloc system, agri consulting service, farm engineering India"
        url="/services"
      />
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-agri-green-800 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/assets/polyhouse_wireframe.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fader} className="text-5xl md:text-7xl font-serif tracking-tight mb-8">
              Farm Services & Consulting
            </motion.h1>
            <motion.p variants={fader} className="text-white/80 text-xl md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
              Expert agricultural consulting, infrastructure setup, and engineering services to optimize your farm operations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {serviceLinks.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 border border-black/5 flex flex-col"
            >
              <div className="relative h-[280px] sm:h-[350px] w-full overflow-hidden">
                <img
                  src={(s as any).cardImage || "/assets/service/main page service image/agrifarming projects .jpg"}
                  alt={s.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agri-green-800/90 via-agri-green-800/30 to-transparent" />
                <h2 className="absolute bottom-6 left-8 text-3xl md:text-4xl font-serif text-white leading-tight">
                  {s.label}
                </h2>
              </div>
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <p className="text-black/70 text-lg leading-relaxed mb-10">
                  Professional high-tech agricultural services tailored for {s.label}. We deliver turnkey precision across all facets.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {s.children?.map((child: any, idx: number) => (
                    <span key={idx} className="bg-agri-green-25 text-agri-green-800 px-5 py-2.5 rounded-full text-sm font-medium border border-agri-green-100">
                      {child.label}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-black/5">
                  <Link 
                    to={s.href}
                    className="inline-flex items-center gap-3 text-sm font-bold text-agri-green-800 hover:text-agri-gold-500 transition-colors uppercase tracking-widest group/link"
                  >
                    Explore Full Category <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white border-t border-black/5 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-agri-green-800 mb-8">Ready to revolutionize your farm?</h2>
          <Link 
            to="/contact" 
            className="inline-block bg-gradient-to-r from-agri-gold-500 to-agri-gold-400 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
