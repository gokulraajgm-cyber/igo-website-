import { ArrowRight, Briefcase, CheckCircle2, Mail, MapPin, Users } from "lucide-react";
import agriPattern from "@/assets/agri-pattern.png";
import { companyInfo } from "@/data/siteData";

const Careers = () => (
  <div className="pt-20">
    <section className="py-24 bg-white border-b border-border relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6 border border-primary/20">
          Grow with us
        </div>
        <h1 className="font-display text-5xl md:text-[84px] font-black text-foreground mb-8 tracking-tight italic leading-tight">
          Join our Mission to <br /> <span className="text-primary">Empower 1 Million Farmers</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed font-body max-w-4xl mx-auto">
          We are looking for passionate innovators, engineers, and agricultural experts to help us build the future of farming in India.
        </p>
      </div>
    </section>

    <section className="py-32 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { 
              title: "Engineering", 
              positions: ["Polyhouse Engineer", "Irrigation Specialist", "Site Supervisor"],
              icon: <Briefcase className="w-8 h-8" />
            },
            { 
              title: "Consulting", 
              positions: ["Agri Consultant", "Project Manager", "Business Analyst"],
              icon: <Users className="w-8 h-8" />
            },
            { 
              title: "Field Operations", 
              positions: ["Farm Supervisor", "Maintenance Technician", "Horticulturist"],
              icon: <MapPin className="w-8 h-8" />
            }
          ].map((dept, i) => (
            <div key={i} className="bg-white p-12 rounded-[40px] border border-border shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8">
                {dept.icon}
              </div>
              <h3 className="font-display text-3xl font-black mb-8 italic">{dept.title}</h3>
              <div className="space-y-4 mb-10">
                {dept.positions.map((pos) => (
                  <div key={pos} className="flex items-center justify-between p-4 rounded-2xl bg-[#fafafa] border border-border group hover:border-primary/30 transition-all">
                    <span className="font-bold text-foreground/80">{pos}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                ))}
              </div>
              <button className="w-full py-4 rounded-full bg-primary/5 text-primary font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">
                Apply for Dept
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Application Info */}
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[60px] bg-foreground p-16 md:p-24 text-center relative overflow-hidden text-background">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <Mail className="w-16 h-16 text-primary mx-auto mb-10" />
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight relative z-10 italic">How to Apply</h2>
          <p className="text-background/70 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Interested candidates can send their updated resume and portfolio directly to our careers team.
          </p>
          <div className="inline-block px-12 py-6 rounded-full bg-primary text-primary-foreground font-black text-xl hover:opacity-90 transition-all shadow-2xl shadow-primary/40 relative z-10">
            {companyInfo.email}
          </div>
          <div className="mt-12 text-background/40 font-bold uppercase tracking-[0.3em] text-xs relative z-10">
            Reference: IGO-CAREERS-2024
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Careers;
