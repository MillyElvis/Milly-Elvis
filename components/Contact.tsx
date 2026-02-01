import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'fr';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    "Business Development Manager",
    "Partnerships Manager or Lead",
    "Brand Manager / Strategist",
    "Marketing Manager",
    "Strategy Consultant",
    "Program / Innovation Manager",
    "Product Marketing Manager",
    "Startup Operations / General Manager",
    "Product / Project Manager",
    "Corporate Strategy / Operations Manager"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const subject = encodeURIComponent(`Professional Proposal for Millicent Elvis - from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Opportunity Details:\n${formData.message}`
    );
    
    // Trigger the email client
    window.location.href = `mailto:millyai.master@gmail.com?subject=${subject}&body=${body}`;
    
    // Visual feedback
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.4em] font-bold uppercase">
              {lang === 'en' ? 'Direct_Impact' : 'Impact_Direct'}
            </div>
            <h2 className="text-5xl md:text-7xl serif mb-8 leading-tight">
              {lang === 'en' ? "Ready to impact" : 'Prête à booster'} <br/>
              <span className="italic text-[#1e1b4b]">{lang === 'en' ? 'your mission.' : 'votre organisation.'}</span>
            </h2>
            
            <div className="mb-12">
              <p className="text-[#64748B] font-light leading-relaxed text-lg max-w-md mb-6">
                {lang === 'en'
                  ? 'Strategic leader specializing in Project Management, Digital Strategy, and high-stakes operations. Currently seeking full-time opportunities in:'
                  : 'Leader stratégique spécialisée en Management de Projet, Stratégie Digitale et opérations à fort enjeu. Recherche active pour les postes de :'
                }
              </p>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {roles.map((role, idx) => (
                  <span key={idx} className="text-[10px] uppercase tracking-wider px-3 py-1.5 bg-[#F1F5F9] text-[#1e1b4b] border border-[#E2E8F0] font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:millyai.master@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#1e1b4b] group-hover:border-[#1e1b4b] transition-all">
                  <Mail size={16} className="group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] tracking-widest uppercase hover:text-[#1e1b4b] transition-colors font-bold">millyai.master@gmail.com</span>
              </a>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#64748B]">{lang === 'en' ? 'UK' : 'RU'}</span>
                    <span className="text-[10px] tracking-widest uppercase font-bold">+44 (0) 7846118832</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#64748B]">FRANCE</span>
                    <span className="text-[10px] tracking-widest uppercase font-bold">06 51 56 60 54</span>
                  </div>
                </div>

                <a href="https://wa.me/19143615779" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-all">
                    <MessageSquare size={16} className="group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-[#64748B] group-hover:text-[#25D366] transition-colors">USA / WhatsApp</span>
                    <span className="text-[10px] tracking-widest uppercase font-bold group-hover:text-[#25D366] transition-colors">+1 914 361 5779</span>
                  </div>
                </a>
              </div>

              <a href="https://linkedin.com/in/MillyElvis" target="_blank" className="flex items-center gap-4 group pt-4">
                <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#1e1b4b] group-hover:border-[#1e1b4b] transition-all">
                  <Linkedin size={16} className="group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] tracking-widest uppercase hover:text-[#1e1b4b] transition-colors font-bold">LinkedIn / MillyElvis</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span className="text-[10px] tracking-widest uppercase font-bold">
                  {lang === 'en' ? 'Paris / London / Remote' : 'Paris / Londres / Remote'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-[#F1F5F9] p-12 border border-[#E2E8F0] w-full relative">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">
                  {lang === 'en' ? 'Recruiter Name' : 'Votre Nom'}
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#E2E8F0] py-2 focus:border-[#1e1b4b] outline-none transition-colors text-[#0F172A]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">Corporate Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#E2E8F0] py-2 focus:border-[#1e1b4b] outline-none transition-colors text-[#0F172A]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">Opportunity Details</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#E2E8F0] py-2 focus:border-[#1e1b4b] outline-none transition-colors resize-none text-[#0F172A]" 
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#1e1b4b] text-white py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#0f172a] transition-colors relative"
              >
                {lang === 'en' ? 'Send Proposal' : 'Envoyer une Proposition'}
              </button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#F1F5F9] flex flex-col items-center justify-center p-8 text-center z-10"
                >
                  <CheckCircle2 size={48} className="text-[#1e1b4b] mb-4" />
                  <h3 className="text-2xl serif mb-2">
                    {lang === 'en' ? 'Proposal Initiated' : 'Proposition Initiée'}
                  </h3>
                  <p className="text-sm text-[#64748B] font-light">
                    {lang === 'en' 
                      ? 'Your email client should open shortly. Thank you!' 
                      : 'Votre application email va s\'ouvrir sous peu. Merci !'}
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-[10px] uppercase tracking-widest font-bold text-[#1e1b4b] underline"
                  >
                    {lang === 'en' ? 'Close' : 'Fermer'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;