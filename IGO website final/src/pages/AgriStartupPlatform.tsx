import { ArrowRight, Briefcase, Landmark, PieChart, Rocket, Users } from "lucide-react";
import agriPattern from "@/assets/agri-pattern.png";
import { Link } from "react-router-dom";

const AgriStartupPlatform = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-24 bg-white border-b border-border relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-primary/20">
          Pioneers of Passive Income in Farming
        </div>
        <h1 className="font-display text-5xl md:text-[84px] font-black text-foreground mb-8 tracking-tight italic leading-tight text-center">
          India's <span className="text-primary">No.1 Integrated</span> <br /> Agri <span className="text-primary italic">Startup</span> Platform
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed font-body max-w-4xl mx-auto text-center">
          Empowering modern farmers and investors with turn-key solutions that generate consistent passive income through precision agriculture and scientific farm management.
        </p>
      </div>
    </section>

    {/* Platform Pillars */}
    <section className="py-32 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { 
              title: "Startup Incubation", 
              desc: "Complete end-to-end guidance for new agri-startups. From business planning to technical implementation and market launch.",
              icon: <Rocket className="w-10 h-10" />,
              color: "text-primary",
              bg: "bg-primary/5"
            },
            { 
              title: "Investor Network", 
              desc: "Connecting promising agricultural ventures with visionary investors. Secure the capital needed to scale your high-tech farm operations.",
              icon: <Landmark className="w-10 h-10" />,
              color: "text-gold",
              bg: "bg-gold/5"
            },
            { 
              title: "Joint Venture Farming", 
              desc: "Partner with IGO Agritech. We provide the technology, expertise, and management while you provide the investment for shared high-yield returns.",
              icon: <Users className="w-10 h-10" />,
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            { 
              title: "Franchise Farming", 
              desc: "Own and operate a verified IGO farming model in your region. Benefit from our established brand, supply chain, and proven high-yield technologies.",
              icon: <Briefcase className="w-10 h-10" />,
              color: "text-purple-600",
              bg: "bg-purple-50"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[40px] border border-border hover:shadow-2xl transition-all duration-500 group">
              <div className={`w-20 h-20 rounded-3xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                {item.icon}
              </div>
              <h3 className="font-display text-3xl font-black mb-6 tracking-tight italic">{item.title}</h3>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-10">
                {item.desc}
              </p>
              <Link to="/startup-enquiry" className="inline-flex items-center gap-2 font-black text-foreground group-hover:gap-4 transition-all underline underline-offset-8 decoration-primary/30">
                Enquire Now <ArrowRight className="w-5 h-5 text-primary" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Success Stories Callout */}
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[60px] bg-foreground p-16 md:p-24 text-center relative overflow-hidden text-background shadow-2xl">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <PieChart className="w-16 h-16 text-primary mx-auto mb-10" />
          <h2 className="font-display text-4xl md:text-6xl font-black mb-10 tracking-tight relative z-10 italic leading-[1.1]">Join India's Fastest Growing Agri-Network</h2>
          <p className="text-background/70 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-body">
            Whether you're an entrepreneur with an idea or an investor seeking sustainable returns, our platform is designed for your success.
          </p>
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            <Link to="/startup-enquiry" className="px-14 py-6 rounded-full bg-primary text-primary-foreground font-black text-xl hover:opacity-90 transition-all hover:scale-[1.05] shadow-2xl shadow-primary/40">
              Apply for Incubation
            </Link>
            <Link to="/contact" className="px-14 py-6 rounded-full border-2 border-background/20 text-background font-black text-xl hover:bg-background/10 transition-all">
              Become an Investor
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AgriStartupPlatform;
