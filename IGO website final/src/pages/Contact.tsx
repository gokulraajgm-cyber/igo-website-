import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { companyInfo } from "@/data/siteData";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { motion, Variants } from "framer-motion";

const fader: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contacts").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      subject: formData.subject.trim() || null,
      message: formData.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error("Failed to send message.");
    } else {
      setSubmitted(true);
      toast.success("Message sent.");
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white pt-32">
      {/* Minimalist Hero */}
      <section className="pb-32 container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl"
        >
          <motion.p variants={fader} className="text-luxury mb-8">Connect</motion.p>
          <motion.h1 variants={fader} className="text-8xl leading-[0.95] tracking-tight mb-12">
            Let's build <br /> something <br /> lasting.
          </motion.h1>
          <motion.p variants={fader} className="text-black/50 text-2xl leading-relaxed max-w-2xl font-light">
            Our experts are ready to collaborate on your next agricultural milestone.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-40 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32">
          {/* Info Side */}
          <div className="space-y-24">
            <div className="space-y-12">
              <p className="text-luxury">Institutional Access</p>
              <div className="grid gap-12">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Inquiries", value: companyInfo.email },
                  { icon: <Phone className="w-5 h-5" />, label: "Consultation", value: companyInfo.phone },
                  { icon: <MapPin className="w-5 h-5" />, label: "Headquarters", value: companyInfo.address },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center transition-colors group-hover:bg-black group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-luxury mb-1">{item.label}</p>
                      <p className="text-xl font-medium tracking-tight uppercase">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 pt-12 border-t border-black/5">
              <p className="text-luxury uppercase tracking-widest text-[10px]">Regional Offices</p>
              <div className="grid gap-8 text-black/40 text-sm leading-relaxed max-w-xs">
                <p>Regional Office: Mysore, Karnataka</p>
                <p>Training Center: Mysore-Coorg Highway, Karnataka</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-20 bg-[#F5F5F7] rounded-3xl text-center"
              >
                <h3 className="text-4xl mb-6 tracking-tight">Transmission Received.</h3>
                <p className="text-black/50 leading-relaxed mb-12 max-w-xs">
                  A verification specialist will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-12 py-4 border border-black text-xs font-semibold rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <label className="text-luxury">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors"
                      placeholder="Name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-luxury">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors"
                      placeholder="Email"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-luxury">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                      className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors"
                      placeholder="+91..."
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-luxury">Project Type</label>
                  <select 
                    value={formData.subject} 
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })} 
                    className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a Sector</option>
                    <option value="Precision Agri">Precision Agriculture</option>
                    <option value="Aquaculture">Module Aquaculture</option>
                    <option value="Livestock">Smart Livestock</option>
                    <option value="Consulting">Strategic Consulting</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-luxury">Brief Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors resize-none"
                    placeholder="Describe your vision..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full py-6 bg-black text-white text-xs font-semibold rounded-full hover:opacity-90 transition-all uppercase tracking-widest flex items-center justify-center gap-4 group"
                >
                  {loading ? "Processing..." : "Submit Inquiry"} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section - B&W */}
      <section className="h-[50vh] w-full bg-[#f0f0f0] grayscale contrast-125 filter invert">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15592.17647249117!2d76.62013895!3d12.29227585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba629734e0046b9%3A0x6a6d6e6a6a6a6a6a!2sIGO%20Agri%20Tech%20Farms!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          className="grayscale saturate-0 brightness-150 contrast-150"
        />
      </section>
    </div>
  );
};

export default Contact;
