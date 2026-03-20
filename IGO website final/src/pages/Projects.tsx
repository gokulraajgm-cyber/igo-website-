import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, navLinks } from "@/data/siteData";
import { Link, useParams } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

type ProjectExtended = typeof projects[0] & { tech?: string[]; benefits?: string[] };

const Projects = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id) as ProjectExtended | undefined;

  if (id && project) {
    return (
      <div className="bg-white min-h-screen selection:bg-[#E8F5E9] selection:text-[#1A4231] pt-32">
        <section className="pb-32 container mx-auto px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-luxury mb-16 hover:opacity-60 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Portfolio
          </Link>
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-12"
            >
              <motion.p variants={fader} className="text-luxury">Sector: Infrastructure</motion.p>
              <motion.h1 variants={fader} className="text-7xl leading-[1] tracking-tight">
                {project.title}
              </motion.h1>
              <motion.p variants={fader} className="text-black/50 text-xl leading-relaxed max-w-md">
                {project.description}
              </motion.p>
              <motion.div variants={fader} className="flex flex-wrap gap-4 pt-8">
                {project.tech?.map((t) => (
                  <span key={t} className="px-6 py-2 bg-[#F5F5F7] text-[10px] font-semibold tracking-widest uppercase rounded-full">
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl bg-secondary"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        <section className="py-40 bg-[#F5F5F7]">
          <div className="container mx-auto px-6">
            <div className="mb-24">
              <p className="text-luxury mb-4">Core Specifications</p>
              <h2 className="text-5xl">Engineering Excellence.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
              {project.benefits?.map((benefit, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-px bg-black/10 w-full" />
                  <h4 className="text-2xl font-medium">{benefit}</h4>
                  <p className="text-black/50 leading-relaxed font-light">
                    Implementing industrial standards for climate control, nutrient delivery, and biosafety protocols.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-64 bg-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl mb-12 tracking-tight">Ready to build your enterprise?</h2>
            <Link to="/contact" className="px-16 py-5 bg-black text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity uppercase tracking-widest inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen selection:bg-[#E8F5E9] selection:text-[#1A4231]">

      {/* ── Page Header ── */}
      <section className="pt-36 pb-16 container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl"
        >
          <motion.div variants={fader} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#C5A03F]" />
            <span className="text-[#C5A03F] font-bold text-[10px] uppercase tracking-[0.3em]">Selected Works</span>
          </motion.div>
          <motion.h1 variants={fader} className="text-7xl md:text-8xl leading-[0.95] tracking-tight mb-10 text-[#1A1A1A]">
            The Gallery of <br /> Sustenance.
          </motion.h1>
          <motion.p variants={fader} className="text-black/50 text-xl leading-relaxed max-w-2xl font-light">
            An archive of institutional implementations across the subcontinent.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Main Categories Grid (Layer 1) ── */}
      <section className="pb-32 container mx-auto px-6 border-b border-black/10 mb-32">
        <div className="mb-16">
          <p className="text-[#C5A03F] font-bold text-xs uppercase tracking-widest mb-4">Core Disciplines</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Select a Project Category</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {navLinks.find(n => n.label === "Projects")?.children?.map((category, i) => (
            <motion.div 
              key={category.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={category.href!} className="group relative block rounded-3xl overflow-hidden aspect-[16/9] shadow-xl">
                <img 
                  // @ts-ignore
                  src={category.icon && typeof category.icon === 'string' ? category.icon : "/assets/projects/agri_farming.jpg"} 
                  alt={category.label} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A4231]/90 via-[#1A4231]/40 to-transparent" />
                <div className="absolute inset-x-8 bottom-8">
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                    {category.label}
                  </h3>
                  <div className="flex items-center gap-2 text-[#C5A03F] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                    Explore Departments <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Legacy Selected Works Grid ── */}
      <section className="pb-40 container mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#C5A03F] font-bold text-xs uppercase tracking-widest mb-4">Historical Archives</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Featured Institutional Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {projects.map((p) => (
            <Link key={p.id} to={`/projects/legacy/${p.id}`} className="group space-y-6 block">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-secondary relative shadow-lg">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
              </div>
              <div className="space-y-4">
                <p className="text-[#1A4231] font-bold text-xs uppercase tracking-widest">{p.category || 'Infrastructure'}</p>
                <h3 className="text-3xl font-serif leading-tight text-[#1A1A1A] group-hover:text-[#C5A03F] transition-colors truncate">
                  {p.title}
                </h3>
                <p className="text-black/60 leading-relaxed max-w-lg line-clamp-2">
                  {p.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1A1A1A] group-hover:text-[#C5A03F] transition-colors pt-4">
                  View Detail <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Projects;
