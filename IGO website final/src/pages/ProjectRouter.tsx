import React from "react";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { navLinks, projects } from "@/data/siteData";

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

// Exact mappings from the public assets folder
const exactImageMap: Record<string, string> = {
  // Main Subcategories
  "Protected Farming Projects": "/assets/project subcategories/protected farming .png",
  "Hydroponic Farming Projects": "/assets/project subcategories/hydroponic farming .jpg",
  "Vertical Farming Projects": "/assets/project subcategories/Vertical  farming .jpg",
  "Open Field Cultivation Projects": "/assets/project subcategories/open field cultivation .jpg",
  "Vegetable Cultivation Projects": "/assets/project subcategories/vegetable cultivations .jpg",
  "Medicinal Crop Projects": "/assets/project subcategories/medicinal crop .jpg",
  "Floriculture Projects": "/assets/project subcategories/flooriculture project .jpg",
  "Mushroom Farming Projects": "/assets/project subcategories/mushroom farming .jpg",
  "Urban Farming Projects": "/assets/project subcategories/urban farming .jpg",
  "Nursery Projects": "/assets/project subcategories/nursery projcts .jpg",
  "Fish Farming Projects": "/assets/project subcategories/fish farming .jpg",
  "Biofloc Farming Projects": "/assets/project subcategories/biofloc farming .jpg",
  "Shrimp Farming Projects": "/assets/project subcategories/shrimp farming .jpg",
  "Crab Farming Projects": "/assets/project subcategories/crab farming .jpg",
  "Integrated Aquaculture": "/assets/project subcategories/integarated farming .jpg",
  "Goat Farming": "/assets/project subcategories/goat farming .jpg",
  "Sheep Farming": "/assets/project subcategories/sheep farming .jpg",
  "Dairy Farming": "/assets/project subcategories/dairy farming .jpg",
  "Poultry Farming": "/assets/project subcategories/poultry farming .jpg",
  "Integrated Livestock Farming": "/assets/project subcategories/intergarated live stock farming .jpg",
  "Farm Infrastructure Projects": "/assets/project subcategories/farm infrastructure .jpg",
  "Water Management Projects": "/assets/project subcategories/water management .jpg",
  "Solar Agriculture Projects": "/assets/project subcategories/solar agriculture project .jpg",
  "Farm Development Projects": "/assets/project subcategories/farm devedlopment project .jpg",

  // Types - Agri
  "Naturally Ventilated Polyhouse": "/assets/project subcategories/types/naturally ventilated polyhouse .jpg",
  "Climate Controlled Polyhouse": "/assets/project subcategories/types/climate controlled polyhouse .jpg",
  "Polycarbonate Greenhouse": "/assets/project subcategories/types/polycarbonate green house .png",
  "Shade Net House": "/assets/project subcategories/types/shade net house .jpg",
  "Mist Chamber": "/assets/project subcategories/types/mist chamber .jpg",
  "NFT Hydroponic System": "/assets/project subcategories/types/NFT hydroponic system .jpg",
  "Deep Water Culture System": "/assets/project subcategories/types/Deep Water Culture (DWC)_ What Is It And How To Get Started.jpg",
  "Vertical Hydroponic Towers": "/assets/project subcategories/types/vertical hydroponic towers .jpg",
  "Commercial Hydroponic Farms": "/assets/project subcategories/types/commercial hydroponic farms .jpg",
  "Indoor Hydroponic Units": "/assets/project subcategories/types/indoor hydroponic farm .jpg",
  "Indoor Vertical Farms": "/assets/project subcategories/types/indoor vertical farming .jpg",
  "Commercial Vertical Farming Units": "/assets/project subcategories/types/commercial farming .jpg",
  "Smart Grow Room Systems": "/assets/project subcategories/types/indoor vertical farming .jpg",
  "Dragon Fruit Plantation": "/assets/project subcategories/types/dragon fruit plantation .jpg",
  "Guava Plantation": "/assets/project subcategories/types/guva plantation .jpg",
  "Mango Plantation": "/assets/project subcategories/types/mango plantantion .jpg",
  "Papaya Plantation": "/assets/project subcategories/types/papaya plantantion .jpg",
  "Fig Plantation": "/assets/project subcategories/types/fig plantation .jpg",
  "Blueberry Plantation": "/assets/project subcategories/types/blueberry plantation.jpg",
  "Cucumber Farming": "/assets/project subcategories/types/cucumber farming .jpg",
  "Capsicum Farming": "/assets/project subcategories/types/capsicum poject .jpg",
  "Tomato Farming": "/assets/project subcategories/types/tamato farming .jpg",
  "Chilli Farming": "/assets/project subcategories/types/chilli farming .jpg",
  "Muskmelon Farming": "/assets/project subcategories/types/muskmelon farming .jpg",
  "Watermelon Farming": "/assets/project subcategories/types/watermelon farming .jpg",
  "Aloe Vera Farming": "/assets/project subcategories/types/aloe vera farming .jpg",
  "Moringa Plantation": "/assets/project subcategories/types/moringa plantantnion .jpg",
  "Ginger Farming": "/assets/project subcategories/types/ginger farming .jpg",
  "Turmeric Farming": "/assets/project subcategories/types/turmeric farming .jpg",
  "Tapioca Cultivation": "/assets/project subcategories/types/tapacio cultivation .jpg",
  "Rose Farming": "/assets/project subcategories/types/rose famring .jpg",
  "Jasmine Farming": "/assets/project subcategories/types/jasmine farming .jpg",
  "Marigold Farming": "/assets/project subcategories/types/exotic farming.jpg",
  "Exotic Flower Farming": "/assets/project subcategories/types/exotic farming.jpg",
  "Oyster Mushroom Units": "/assets/project subcategories/types/Oyster Mushroom Cultivation.jpg",
  "Button Mushroom Units": "/assets/project subcategories/types/button mushroom farming.jpg",
  "Commercial Mushroom Farms": "/assets/project subcategories/types/mushroom farming .jpg",
  "Rooftop Gardening Projects": "/assets/project subcategories/types/ooftopnfarming.jpg",
  "Terrace Farming Projects": "/assets/project subcategories/types/terrece farminng.jpg",
  "Kitchen Garden Projects": "/assets/project subcategories/types/kitchen gardening projects .jpg",
  "Microgreens Production Units": "/assets/project subcategories/types/Microgreens productions.jpg",
  "Commercial Plant Nursery": "/assets/project subcategories/types/commercial plant nursery.jpg",
  "Seedling Production Units": "/assets/project subcategories/types/seedling productu .jpg",
  "Tissue Culture Plant Nursery": "/assets/project subcategories/types/Tissue Culture Plant Propagation Modern Agricultural Education.jpg",

  // Types - Aquaculture
  "Traditional Fish Farming": "/assets/project subcategories/types/traditional fish farming .jpg",
  "Intensive Fish Farming": "/assets/project subcategories/types/intensive fish farming .jpg",
  "Cage Fish Farming": "/assets/project subcategories/types/cage fish farming .jpg",
  "Biofloc Fish Farming": "/assets/project subcategories/types/biofloc fish farming .jpg",
  "Biofloc Shrimp Farming": "/assets/project subcategories/types/bioflock shrimp farming.jpg",
  "Vannamei Shrimp Farming": "/assets/project subcategories/types/bioflock shrimp farming.jpg",
  "Freshwater Prawn Farming": "/assets/project subcategories/types/freshwater prawn farming .jpg",
  "Mud Crab Farming": "/assets/project subcategories/types/mud crab farming .jpg",
  "Aquaponics Systems": "/assets/project subcategories/types/aquaponics system .jpg",
  "Integrated Fish + Crop Farming": "/assets/project subcategories/types/intergrated farming .jpg",

  // Types - Livestock
  "Commercial Goat Farming": "/assets/project subcategories/types/commercial goat farming .jpg",
  "Integrated Goat Farming": "/assets/project subcategories/types/intergrated goat farming .jpg",
  "Commercial Sheep Farming": "/assets/project subcategories/types/commercial sheep farming .jpg",
  "Dairy Farm Setup": "/assets/project subcategories/types/dairy farming .jpg",
  "Automated Dairy Systems": "/assets/project subcategories/types/dairy farming .jpg",
  "Broiler Chicken Farms": "/assets/project subcategories/types/poultry farming .jpg",
  "Layer Chicken Farms": "/assets/project subcategories/types/poultry farming .jpg",
  "Goat + Fish Farming": "/assets/project subcategories/types/intergrated farming .jpg",
  "Dairy + Crop Farming": "/assets/project subcategories/types/intergrated farming .jpg",

  // Types - Engineering
  "Cold Storage": "/assets/project subcategories/types/cold storage .jpg",
  "Pack House": "/assets/project subcategories/types/packn=house .jpg",
  "Farm Buildings": "/assets/project subcategories/types/farm buildings .jpg",
  "Farm Roads": "/assets/project subcategories/types/farm infrastructure .jpg",
  "Rainwater Harvesting": "/assets/project subcategories/types/Rainwater Harvesting.jpg",
  "Pond Liner Installation": "/assets/project subcategories/types/pond liner installation.jpg",
  "Farm Irrigation Systems": "/assets/project subcategories/types/farm irrigation system .jpg",
  "Borewell & Water Storage Systems": "/assets/project subcategories/types/borewell .jpg",
  "Solar Crop Dryer": "/assets/project subcategories/types/solar crop dryer .jpg",
  "Solar Heater": "/assets/project subcategories/types/solary heater .jpg",
  "Solar Fencing": "/assets/project subcategories/types/solar fencing.jpg",
  "Solar Lighting": "/assets/project subcategories/types/solar lighting '.jpg",
  "Land Surveying": "/assets/project subcategories/types/land surveing .jpg",
  "Topographic Mapping": "/assets/project subcategories/types/topographis mappin g.jpg",
  "Contour Mapping": "/assets/project subcategories/types/contour mapping .jpg",
  "Land Leveling": "/assets/project subcategories/types/landleveling .jpg",

  // Fallbacks from core folder
  "Farm Engineering Projects": "/assets/core bussiness picture/farm_engineering.jpg",
  "Livestock Farming Projects": "/assets/core bussiness picture/livestock.jpg",
  "Agri Farming Projects": "/assets/projects/agri_farming.jpg",
  "Aquaculture Farming Projects": "/assets/projects/aquaculture.jpg"
};

// Fallback images depending on category keyword if no exact image found
const getFallbackImage = (href: string, label: string) => {
  if (exactImageMap[label]) return exactImageMap[label];
  if (href.includes("hydroponic") || href.includes("nft") || href.includes("dwc")) return "/assets/projects/hydroponic_nft_enterprise_1773750839362.png";
  if (href.includes("vertical") || href.includes("multi-tier")) return "/assets/projects/vertical_farming_futuristic_1773750768705.png";
  if (href.includes("polyhouse") || href.includes("protected")) return "/assets/projects/polyhouse_premium_wide_1773750820281.png";
  if (href.includes("mushroom")) return "/assets/projects/mushroom_industrial_premium_1773750798076.png";
  if (href.includes("rooftop") || href.includes("urban")) return "/assets/projects/rooftop_farming_corporate_1773750857107.png";
  if (href.includes("open-field") || href.includes("plantation") || href.includes("dragon") || href.includes("guava") || href.includes("mango")) return "/assets/projects/open_cultivation_precision_1773750986052.png";
  if (href.includes("floriculture") || href.includes("flower") || href.includes("rose")) return "/assets/projects/floriculture_high_tech_1773750708446.png";
  if (href.includes("medicinal") || href.includes("crop")) return "/assets/projects/open_cultivation_precision_1773750986052.png";
  if (href.includes("nursery")) return "/assets/projects/nursery_modern_minimalist_1773750946194.png";
  if (href.includes("vegetable")) return "/assets/projects/open_cultivation_precision_1773750986052.png";
  
  // Aquaculture
  if (href.includes("aquaculture") || href.includes("fish") || href.includes("biofloc") || href.includes("shrimp") || href.includes("crab")) return "/assets/projects/aquaculture.jpg";
  
  // Livestock
  if (href.includes("livestock") || href.includes("goat") || href.includes("dairy") || href.includes("poultry") || href.includes("sheep")) return "/assets/projects/livestock.jpg";
  
  // Engineering
  if (href.includes("engineering") || href.includes("solar") || href.includes("water") || href.includes("harvesting") || href.includes("irrigation") || href.includes("surveying")) return "/assets/projects/farm_engineering.jpg";
  
  return "/assets/projects/agri_farming.jpg";
};


const ProjectRouter = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean); // e.g. ["projects", "agri", "protected"]

  const currentItem = findNavItemByHref(pathname);

  if (!currentItem) {
    return <Navigate to="/projects" />;
  }

  const isDetail = !currentItem.children || currentItem.children.length === 0;
  const parentPaths = segments.slice(0, -1).join("/");
  const parentItem = findNavItemByHref("/" + parentPaths);
  const parentTitle = parentItem ? parentItem.label : "Category";
  
  const specificImage = currentItem.icon && typeof currentItem.icon === 'string' 
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
                   <p className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.4em]">Project Execution</p>
                </motion.div>
                <motion.h1 variants={fader} className="text-5xl md:text-8xl leading-[0.9] font-serif tracking-tight text-[#1A1A1A]">
                  {currentItem.label}
                </motion.h1>
              </div>
              
              <motion.p variants={fader} className="text-black/60 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                IGO Agritech Farms delivers world-class industrial engineering for <strong>{currentItem.label}</strong>. Our turnkey implementation combines precision technology with sustainable agricultural practices to ensure maximum ROI and long-term viability.
              </motion.p>
              
              <motion.div variants={fader} className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="px-10 py-5 bg-[#1A4231] text-white text-[10px] font-bold rounded-full hover:bg-black transition-all uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-lg shadow-[#1A4231]/20">
                  Enquire Project <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 px-6 border-l border-black/10">
                   <div>
                      <p className="text-[10px] text-black/40 uppercase tracking-widest font-bold">Consultation</p>
                      <p className="text-sm font-serif text-black/80">Expert Advisory Available</p>
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
        </section>

        <section className="py-40 bg-[#0A0A0A] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[#1A4231]/10 blur-[120px] rounded-full translate-x-1/2" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <p className="text-[#C5A03F] font-bold text-xs uppercase tracking-[0.4em] mb-8">Service Standard</p>
                  <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">Professional <br />Turnkey Workflow</h2>
                  <div className="space-y-12">
                     {[
                       { title: "Technical Feasibility", desc: "Rigorous site assessment and precision engineering design tailored to your climate." },
                       { title: "Rapid Installation", desc: "Expert on-site execution using institutional-grade materials and smart automation." },
                       { title: "Operational Training", desc: "Comprehensive handover with expert training on system management and crop cycles." }
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
                        <p className="text-sm font-light text-white/60 leading-relaxed">Guaranteed structural integrity for 10+ years</p>
                     </div>
                     <div className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#1A4231] to-[#0D2118] p-8 flex flex-col justify-end">
                        <p className="text-3xl font-serif text-white mb-2">ROI Focus</p>
                        <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Market Driven Yield</p>
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
                        <p className="text-sm font-light text-white/60 leading-relaxed">Optimized for maximum commercial scalability</p>
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
              {segments.length === 2 ? "Sector Overview" : "Specialization"}
            </span>
          </motion.div>
          
          <motion.h1 variants={fader} className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight mb-10 text-[#1A1A1A]">
            {currentItem.label}
          </motion.h1>
          
          <motion.p variants={fader} className="text-black/50 text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            An elite portfolio of turnkey agricultural solutions. We provide the institutional framework and technical expertise required for large-scale precision farming under {currentItem.label}.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-40 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentItem.children?.map((child: any, i: number) => {
            const childImage = child.icon && typeof child.icon === 'string' 
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
                       <span className="text-[10px] text-[#C5A03F] font-bold uppercase tracking-widest">Explore Project</span>
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

export default ProjectRouter;
