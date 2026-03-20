import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "@/components/AnimatedSection";
import { Send, CheckCircle, Rocket, Lightbulb } from "lucide-react";
import { toast } from "sonner";

const AgriStartupEnquiry = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interestAreas = [
    "Polyhouse Startup",
    "Hydroponic Venture",
    "Aquaculture Business",
    "Livestock Farm Setup",
    "Agri-Tech Implementation",
    "Smart Farming Solution",
    "Organic Farming Venture",
    "Export-Oriented Agri Business"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("course_enquiries").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      course: formData.interest, // Mapping to existing DB column for simplicity
      message: formData.message.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Failed to submit enquiry. Please try again.");
    } else {
      setSubmitted(true);
      toast.success("Startup enquiry submitted successfully!");
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-green relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm mb-6">
              <Rocket className="w-4 h-4" /> Start Your Agri Venture
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Agri Startup Enquiry</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Launch your successful agricultural business with our expert guidance and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <AnimatedSection className="text-center py-16">
              <div className="w-20 h-20 rounded-full gradient-green flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-3">Startup Enquiry Submitted!</h2>
              <p className="text-muted-foreground text-lg">Our venture experts will contact you shortly to discuss your agri-startup plan.</p>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
                  { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: true },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-black uppercase tracking-widest text-primary mb-2 italic">{f.label} *</label>
                    <input
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-border bg-white text-foreground focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-lg"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-2">Interest Area</label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Choose your startup interest...</option>
                    {interestAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Venture Details (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your startup idea or available land/capital..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl gradient-green text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : <><Lightbulb className="w-5 h-5" /> Submit Startup Plan</>}
                </button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default AgriStartupEnquiry;
