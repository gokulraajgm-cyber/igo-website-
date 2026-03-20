import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/data/siteData";
import agriPattern from "@/assets/agri-pattern.png";
import { Leaf, ArrowRight, GraduationCap, Users, BookOpen, CheckCircle2 } from "lucide-react";

const Academy = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-white border-b border-border relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${agriPattern})`, backgroundSize: "600px", backgroundRepeat: "repeat" }} />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
            India's Premier Agri Training Hub
          </div>
          <h1 className="font-display text-5xl md:text-[84px] font-black text-foreground mb-8 tracking-tight italic leading-tight">IGO <span className="text-primary">Academy</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed font-body">
            Empowering the next generation of Agri-Entrepreneurs with scientific training, practical internship programs, and MSME certified technical courses.
          </p>
        </div>
      </section>

      {/* Academy Streams */}
      <section className="py-32 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              { 
                title: "Professional Training", 
                desc: "Intensive hands-on programs for entrepreneurs and farmers to master high-tech farming systems.",
                icon: <GraduationCap className="w-10 h-10" />,
                color: "text-primary",
                bg: "bg-primary/5"
              },
              { 
                title: "Student Internships", 
                desc: "Real-world industry exposure for agriculture and engineering students at our modern farm facilities.",
                icon: <Users className="w-10 h-10" />,
                color: "text-gold",
                bg: "bg-gold/5"
              },
              { 
                title: "Specialized Courses", 
                desc: "Short-term technical courses covering specific topics like nutrient management, pest control, and more.",
                icon: <BookOpen className="w-10 h-10" />,
                color: "text-blue-600",
                bg: "bg-blue-50"
              }
            ].map((stream, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-border hover:shadow-xl transition-all text-center group">
                <div className={`w-20 h-20 rounded-3xl ${stream.bg} ${stream.color} flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform`}>
                  {stream.icon}
                </div>
                <h3 className="font-display text-2xl font-black mb-4 tracking-tight italic">{stream.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{stream.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeading label="Available Programs" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.map((c) => (
              <div key={c.id} className="bg-white rounded-[32px] p-10 border border-border hover:border-primary/30 transition-all flex flex-col shadow-sm">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-black uppercase tracking-widest mb-6 w-fit">
                  <Leaf className="w-4 h-4" />{c.duration}
                </div>
                <h3 className="font-display text-2xl font-black mb-4 tracking-tight italic">{c.title}</h3>
                <p className="text-muted-foreground text-lg mb-8 flex-1 leading-relaxed font-medium">{c.description}</p>
                <div className="space-y-3 mb-10">
                  {c.topics.map((t) => (
                    <div key={t} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {t}
                    </div>
                  ))}
                </div>
                <a href="#enquiry" className="inline-flex items-center gap-2 text-sm font-black text-primary hover:gap-4 transition-all uppercase tracking-widest">
                  View Schedule <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Enrollment</h2>
            <h3 className="font-display text-4xl font-black italic">Start Your Learning Journey</h3>
          </div>
          
          {submitted ? (
            <div className="text-center py-20 bg-[#fafafa] rounded-[40px] border border-border">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-black mb-4 italic">Enquiry Submitted!</h3>
              <p className="text-muted-foreground text-lg">Our academic counselor will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Enter your name" },
                { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                { name: "phone", label: "Contact Number", type: "tel", placeholder: "Enter your phone number" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-black uppercase tracking-widest text-primary mb-3 italic">{f.label} *</label>
                  <input 
                    type={f.type} 
                    required 
                    placeholder={f.placeholder}
                    value={formData[f.name as keyof typeof formData]} 
                    onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })} 
                    className="w-full px-8 py-5 rounded-2xl border-2 border-border bg-[#fafafa] text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-lg" 
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-black uppercase tracking-widest text-primary mb-3 italic">Program of Interest</label>
                <select 
                  required 
                  value={formData.interest} 
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })} 
                  className="w-full px-8 py-5 rounded-2xl border-2 border-border bg-[#fafafa] text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-lg"
                >
                  <option value="">Choose a program...</option>
                  {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
                  <option value="internship">Student Internship</option>
                </select>
              </div>
              <button type="submit" className="w-full py-6 rounded-full bg-primary text-primary-foreground font-black text-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                Submit Academy Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Academy;
