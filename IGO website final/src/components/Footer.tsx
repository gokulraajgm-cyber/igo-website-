import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { companyInfo, navLinks, services } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 rounded-t-[5rem] overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(26,66,49,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Section */}
          <div className="space-y-10">
            <Link to="/" className="block">
              <img src={companyInfo.logo} alt={companyInfo.name} className="h-16 invert brightness-0" />
            </Link>
            <p className="text-white/50 text-base leading-relaxed max-w-xs italic">
              "{companyInfo.vision}"
            </p>
            <div className="flex gap-4">
              {Object.entries(companyInfo.social).map(([platform, url]) => {
                const Icon = platform === 'facebook' ? Facebook : 
                            platform === 'twitter' ? Twitter : 
                            platform === 'instagram' ? Instagram : 
                            platform === 'linkedin' ? Linkedin : Youtube;
                return (
                  <a 
                    key={platform}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                  >
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Dimensions</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Endeavors</h4>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group">
                    {service.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global HQ */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Global HQ</h4>
            <div className="space-y-8">
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin className="w-4 h-4 text-white/40 group-hover:text-white" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{companyInfo.address}</p>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4 text-white/40 group-hover:text-white" />
                </div>
                <p className="text-white/60 text-sm">{companyInfo.phone}</p>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4 text-white/40 group-hover:text-white" />
                </div>
                <p className="text-white/60 text-sm break-all">{companyInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {companyInfo.name}. Strategic Excellence in Agritech.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Charter</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Operational Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
