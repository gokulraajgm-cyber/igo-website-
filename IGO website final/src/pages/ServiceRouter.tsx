import React from "react";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, TrendingUp } from "lucide-react";
import { navLinks } from "@/data/siteData";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// Helper: Traverse navLinks completely
const findNavItemByHref = (href: string) => {
  let found: any = null;
  const search = (items: any[]) => {
    for (const item of items) {
      if (item.href === href) {
        found = item;
        return;
      }
      if (item.children) search(item.children);
    }
  };
  search(navLinks);
  return found;
};

// Mappings from the assets/subcategories/types folder
const exactImageMap: Record<string, string> = {
  // Agri Farming
  "Farm Business Planning": "/assets/subcategories/types/farm bussiness planning .jpg",
  "Agri Investment Consulting": "/assets/subcategories/types/agri investment consulting .jpg",
  "Polyhouse Installation": "/assets/subcategories/types/polyhouse installations .jpg",
  "Hydroponic Setup": "/assets/subcategories/types/hydroponic setup .jpg",
  "Vertical Farming Setup": "/assets/subcategories/types/verticall farming setup .jpg",
  "Crop Selection Consulting": "/assets/subcategories/types/crop selection consulting .jpg",
  "Farm Layout Design": "/assets/subcategories/types/farm layout design.jpg",

  // Aquaculture
  "Fish Farming Setup": "/assets/subcategories/types/fish farming setup .jpg",
  "Biofloc Installation": "/assets/subcategories/types/bioflock insatllation .jpg",
  "Aquaculture Pond Construction": "/assets/subcategories/types/pon construction .jpg",
  "Aquaponics Setup": "/assets/subcategories/types/aquaponics_setup.png",
  "Aquaculture Consulting": "/assets/subcategories/types/auqculture consulting .jpg",

  // Livestock
  "Goat Farm Setup": "/assets/subcategories/types/goat_farm_setup.png",
  "Dairy Farm Setup": "/assets/subcategories/types/dairy farm setup .jpg",
  "Sheep Farm Setup": "/assets/subcategories/types/sheep farm setup.jpg",
  "Poultry Farm Setup": "/assets/subcategories/types/poultry farm set up .jpg",
  "Livestock Shed Construction": "/assets/subcategories/types/livestock shed construction .jpg",

  // Engineering
  "Cold Storage Construction": "/assets/subcategories/types/cold storage consturation.jpg",
  "Packhouse Construction": "/assets/subcategories/types/pack house construction .jpg",
  "Farm Building Design": "/assets/subcategories/types/farm building desigin .jpg",
  "Drip Irrigation Installation": "/assets/subcategories/types/drip irrigation installation .jpg",
  "Sprinkler Irrigation Systems": "/assets/subcategories/types/sprinkeler irrigation installations .jpg",
  "Water Pump Systems": "/assets/subcategories/types/water pump system .jpg",
  "Land Surveying": "/assets/subcategories/types/Land Surveyors.jpg",
  "GIS Mapping": "/assets/subcategories/types/gis mapping.jpg",
  "Land Leveling": "/assets/subcategories/types/land leveling .jpg",
  "Polyhouse AMC": "/assets/subcategories/types/polyhouse AMC .jpg",
  "Hydroponic System AMC": "/assets/subcategories/types/hydroponic system AMC .jpg",
  "Farm Equipment Maintenance": "/assets/subcategories/types/farm equipament  maintance .jpg",

  // Category fallbacks
  "Agri Farming Services": "/assets/projects/agri_farming.jpg",
  "Aquaculture Services": "/assets/projects/aquaculture.jpg",
  "Livestock Services": "/assets/projects/livestock.jpg",
  "Farm Engineering Services": "/assets/projects/farm_engineering.jpg"
};

const getFallbackImage = (href: string, label: string) => {
  const l = label.toLowerCase();
  if (exactImageMap[label]) return exactImageMap[label];
  
  if (l.includes("hydroponic")) return "/assets/projects/hydroponic_nft_enterprise_1773750839362.png";
  if (l.includes("vertical")) return "/assets/projects/vertical_farming_futuristic_1773750768705.png";
  if (l.includes("polyhouse") || l.includes("protected")) return "/assets/projects/polyhouse_premium_wide_1773750820281.png";
  if (l.includes("solar")) return "/assets/projects/solar_agri_premium_1773750927133.png";
  if (l.includes("irrigation") || l.includes("water") || l.includes("pump")) return "/assets/projects/pond_liner_engineering_1773750874112.png";
  if (l.includes("livestock") || l.includes("dairy") || l.includes("poultry") || l.includes("sheep")) return "/assets/projects/livestock.jpg";
  if (l.includes("aquaculture") || l.includes("fish") || l.includes("pond")) return "/assets/projects/aquaculture.jpg";
  if (l.includes("consulting") || l.includes("planning")) return "/assets/projects/joint_venture_premium_1773750685382.png";
  if (l.includes("engineering") || l.includes("construction") || l.includes("building")) return "/assets/projects/farm_engineering.jpg";

  return "/assets/projects/agri_farming.jpg";
};

const getServiceDeliverables = (label: string, category: string) => {
  const c = category.toLowerCase();
  if (c === "agri") {
    return [
      { title: "Project Report", desc: "Detailed technical & financial feasibility study." },
      { title: "Design Layout", desc: "Professional architectural and structural blueprints." },
      { title: "Setup Support", desc: "End-to-end installation by expert engineering teams." },
      { title: "Training", desc: "Staff training on modern agricultural techniques." }
    ];
  }
  return [
    { title: "Site Survey", desc: "Comprehensive assessment of land and water resources." },
    { title: "Implementation", desc: "Step-by-step setup of the farm ecosystem." },
    { title: "Quality Check", desc: "Rigorous testing of systems before handover." },
    { title: "Certificates", desc: "Assistance in obtaining necessary agri-certifications." }
  ];
};

const ServiceRouter = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  const currentItem = findNavItemByHref(pathname);

  if (!currentItem) {
    return <Navigate to="/services" />;
  }

  const isDetail = !currentItem.children || currentItem.children.length === 0;
  const parentPaths = segments.slice(0, -1).join("/");
  const parentItem = findNavItemByHref("/" + parentPaths);
  const parentTitle = parentItem ? parentItem.label : "Category";
  
  const specificImage = currentItem.icon && typeof currentItem.icon === 'string' && currentItem.icon.startsWith('/')
    ? currentItem.icon 
    : getFallbackImage(pathname, currentItem.label);

  if (isDetail) {
    // LAYER 4: Detail Page
    return (
      <div className="bg-white min-h-screen selection:bg-[#E8F5E9] selection:text-[#1A4231] pt-32">
        <section className="pb-32 container mx-auto px-6">
          <Link to={"/" + parentPaths} className="inline-flex items-center gap-2 text-[#C5A03F] font-bold text-xs uppercase tracking-widest mb-12 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to {parentTitle}
          </Link>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <motion.div variants={fader} className="flex items-center gap-3">
                   <div className="w-8 h-[1px] bg-[#C5A03F]" />
                   <p className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.4em]">Expert Service Execution</p>
                </motion.div>
                <motion.h1 variants={fader} className="text-5xl md:text-8xl leading-[0.9] font-serif tracking-tight text-[#1A1A1A]">
                  {currentItem.label}
                </motion.h1>
              </div>
              
              <motion.p variants={fader} className="text-black/60 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                IGO Agritech Farms delivers industrial-grade expertise for <strong>{currentItem.label}</strong>. Our professional implementation combines technical precision with deep agricultural knowledge to ensure maximum efficiency and sustainability.
              </motion.p>
              
              <motion.div variants={fader} className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="px-10 py-5 bg-[#1A4231] text-white text-[10px] font-bold rounded-full hover:bg-black transition-all uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-lg shadow-[#1A4231]/20">
                  Enquire Service <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 px-6 border-l border-black/10">
                   <div>
                      <p className="text-[10px] text-black/40 uppercase tracking-widest font-bold">Advisory</p>
                      <p className="text-sm font-serif text-black/80">Professional Consulting</p>
                   </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-[#C5A03F]/5 rounded-[40px] blur-2xl group-hover:bg-[#C5A03F]/10 transition-colors" />
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl relative border border-black/5">
                <img src={specificImage} alt={currentItem.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 border-t border-black/5 pt-32"
          >
            <div className="flex items-center gap-4 text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.4em] mb-16">
              <div className="w-12 h-[1px] bg-[#C5A03F]" />
              SERVICE DELIVERABLES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getServiceDeliverables(currentItem.label, segments[1]).map((item, i) => (
                <div key={i} className="p-10 bg-[#FDFDFD] rounded-[2.5rem] border border-black/[0.03] hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                   <div className="w-10 h-10 rounded-full bg-[#C5A03F]/10 flex items-center justify-center text-[#C5A03F] mb-8">
                      <CheckCircle2 className="w-5 h-5" />
                   </div>
                   <h5 className="text-2xl font-serif text-black mb-3">{item.title}</h5>
                   <p className="text-black/40 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-40 bg-[#0A0A0A] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[#1A4231]/10 blur-[120px] rounded-full translate-x-1/2" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <p className="text-[#C5A03F] font-bold text-xs uppercase tracking-[0.4em] mb-8">Standard of Excellence</p>
                  <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">Professional <br />Turnkey Implementation</h2>
                  <div className="space-y-12">
                     {[
                       { title: "Strategic Analysis", desc: "Rigorous feasibility assessment and site-specific engineering design." },
                       { title: "Expert Installation", desc: "Professional on-site execution using institutional-grade materials and precision tech." },
                       { title: "Operational Excellence", desc: "Comprehensive handover with expert training and long-term maintenance support." }
                     ].map((step, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="text-6xl font-serif text-white/5 group-hover:text-[#C5A03F]/20 transition-colors">{i+1}</div>
                          <div className="pt-2">
                             <h4 className="text-2xl font-serif text-white mb-3">{step.title}</h4>
                             <p className="text-white/40 leading-relaxed font-light">{step.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6 pt-12">
                     <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-[#C5A03F]/20 flex items-center justify-center">
                           <Shield className="w-5 h-5 text-[#C5A03F]" />
                        </div>
                        <p className="text-sm font-light text-white/60 leading-relaxed">Institutional-grade safety & performance standards</p>
                     </div>
                     <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#1A4231] to-[#0D2118] p-8 flex flex-col justify-end">
                        <p className="text-3xl font-serif text-white mb-2">Efficiency</p>
                        <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Maximum Output Focus</p>
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="aspect-[3/4] rounded-3xl overflow-hidden transition-all duration-700">
                        <img src={specificImage} className="w-full h-full object-cover" alt="Detail" />
                     </div>
                     <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-[#C5A03F]/20 flex items-center justify-center">
                           <TrendingUp className="w-5 h-5 text-[#C5A03F]" />
                        </div>
                        <p className="text-sm font-light text-white/60 leading-relaxed">Scalable solutions for commercial growth</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // LAYER 2 or 3: Category / Subcategory Page
  return (
    <div className="bg-[#FDFDFD] min-h-screen selection:bg-[#E8F5E9] selection:text-[#1A4231] pt-40">
      <section className="pb-24 container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-5xl"
        >
          {segments.length > 2 && (
             <Link to={"/" + parentPaths} className="inline-flex items-center gap-3 text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.3em] mb-12 hover:translate-x-[-8px] transition-transform">
               <ArrowLeft className="w-3 h-3" /> Back
             </Link>
          )}
          
          <motion.div variants={fader} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#C5A03F]" />
            <span className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.5em]">
              {segments.length === 2 ? "Service Discipline" : "Specialization"}
            </span>
          </motion.div>
          
          <motion.h1 variants={fader} className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight mb-10 text-[#1A1A1A]">
            {currentItem.label}
          </motion.h1>
          
          <motion.p variants={fader} className="text-black/50 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            An elite suite of professional agricultural services. We provide the technical framework and institutional expertise required for {currentItem.label}.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-40 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentItem.children?.map((child: any, i: number) => {
            const childImage = child.icon && typeof child.icon === 'string' && child.icon.startsWith('/')
              ? child.icon 
              : getFallbackImage(child.href, child.label);
            return (
              <motion.div
                key={child.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={child.href} className="group block h-full">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden relative mb-8 shadow-lg shadow-black/5 border border-black/5">
                    <img src={childImage} alt={child.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      <ArrowRight className="w-5 h-5 text-[#1A4231]" />
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                       <div className="w-6 h-[1px] bg-[#C5A03F]" />
                       <span className="text-[10px] text-[#C5A03F] font-bold uppercase tracking-widest">Explore Service</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] group-hover:text-[#1A4231] transition-colors leading-[1.1]">
                      {child.label}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  );
};

export default ServiceRouter;
