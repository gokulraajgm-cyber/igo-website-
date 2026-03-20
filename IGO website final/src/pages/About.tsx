import { stats, companyInfo } from "@/data/siteData";
import { motion, Variants } from "framer-motion";

const ENG_IMAGE = "/assets/minimalist_farm_engineering_1773740848836.png";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const About = () => (
  <div className="bg-white min-h-screen selection:bg-black selection:text-white pt-32">
    {/* Minimalist Hero */}
    <section className="pb-32 container mx-auto px-6">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-4xl"
      >
        <motion.p variants={fader} className="text-luxury mb-8">Established 2014</motion.p>
        <motion.h1 variants={fader} className="text-8xl leading-[0.95] tracking-tight mb-12">
          Engineering the <br /> New Agricultural <br /> Paradigm.
        </motion.h1>
        <motion.p variants={fader} className="text-black/50 text-2xl leading-relaxed max-w-2xl font-light">
          {companyInfo.description}
        </motion.p>
      </motion.div>
    </section>

    {/* Narrative Section 01 */}
    <section className="py-40 bg-[#F5F5F7]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <p className="text-luxury">The Mission</p>
            <h2 className="text-6xl leading-[1.1]">Precision <br /> Rural Tech.</h2>
            <p className="text-black/50 text-xl leading-relaxed max-w-md">
              {companyInfo.vision}
              <br /><br />
              {companyInfo.mission}
            </p>
            <div className="grid grid-cols-2 gap-12 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-medium tracking-tighter mb-1">{s.value}</div>
                  <div className="text-luxury text-[10px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src={ENG_IMAGE} 
              alt="Engineering Excellence" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>

    {/* Founder's Vision - Specifically for the CEO */}
    <section className="py-64 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <p className="text-luxury text-white/40 uppercase tracking-[0.3em]">Founder's Vision</p>
          <h2 className="text-6xl md:text-8xl leading-[1.05] tracking-tight">
            "We are not just <br /> 
            <span className="text-white/40 italic">cultivating land</span>, <br />
            we are building <br /> lasting legacies."
          </h2>
          <div className="pt-12">
            <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
            <p className="text-xl font-light tracking-wide text-white/60">
              Leading India towards a sustainable and high-tech agricultural future.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values / Principles */}
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <p className="text-luxury mb-4">Core Principles</p>
          <h2 className="text-5xl">The IGO Standard.</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { title: "Sustainability", desc: "Long-term ecological balance in every project." },
            { title: "Innovation", desc: "Pushing the boundaries of scientific agriculture." },
            { title: "Collaboration", desc: "Building strong partnerships for rural growth." },
            { title: "Excellence", desc: "Uncompromising quality in engineering and service." },
          ].map((v) => (
            <div key={v.title} className="space-y-6">
              <div className="h-px bg-black/10 w-full" />
              <h4 className="text-2xl font-medium">{v.title}</h4>
              <p className="text-black/50 leading-relaxed text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recognition Section */}
    <section className="py-40 bg-[#F5F5F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-luxury mb-4">Recognition</p>
          <h2 className="text-5xl">Industry Excellence.</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-16">
          {companyInfo.awards.map((award) => (
            <div key={award} className="text-luxury text-xl font-medium border-b border-black/10 pb-2">
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
