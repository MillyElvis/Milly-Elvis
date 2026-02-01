import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// REMPLACEZ CETTE URL PAR LE LIEN DE VOTRE PROPRE PHOTO
const PROFILE_IMAGE_URL = "https://media.licdn.com/dms/image/v2/D4E03AQGgZHlRDOI-2g/profile-displayphoto-crop_800_800/B4EZmbVwqtGoAI-/0/1759247797635?e=1771459200&v=beta&t=keGdFNc7yipemXhf1jntvQQ9AtULLXeXSnIejVhO2B8";

interface HeroProps {
  lang: 'en' | 'fr';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 25]);

  const [displayText, setDisplayText] = useState('');
  const texts = {
    en: "Architecting Growth at the Intersection of AI & Luxury Commerce.",
    fr: "Architecte de croissance à l'intersection de l'IA et du commerce de luxe."
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(texts[lang].substring(0, i));
      i++;
      if (i > texts[lang].length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [lang]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden min-h-screen flex items-center bg-[#F8FAFC]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] serif font-bold pointer-events-none select-none z-0 whitespace-nowrap"
      >
        MILLICENT
      </motion.div>

      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[-5%] w-[50vw] h-[50vw] bg-[#EFF6FF] rounded-full blur-[120px] -z-10 opacity-60" 
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-[#1e1b4b]" />
              <div className="text-[#1e1b4b] text-[10px] uppercase tracking-[0.4em] font-bold mono flex items-center gap-2">
                <span>{lang === 'en' ? 'AI Strategy' : 'Stratégie IA'}</span>
                <span className="opacity-30 mx-1">|</span>
                <span>{lang === 'en' ? 'Growth Ops' : 'Opérations Croissance'}</span>
                <span className="opacity-30 mx-1">|</span>
                <span>{lang === 'en' ? 'Project Lead' : 'Lead de Projet'}</span>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-8xl serif font-bold text-[#0F172A] mb-8 tracking-tighter"
            >
              Millicent Elvis.
            </motion.h2>

            <h1 className="text-3xl md:text-5xl serif leading-[1.2] mb-8 text-[#475569] min-h-[4em]">
              {displayText}
              <span className="animate-pulse inline-block w-1 h-8 md:h-10 bg-[#1e1b4b] ml-2 align-middle" />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p className="text-[#475569] text-lg font-light leading-relaxed mb-10 max-w-xl">
                {lang === 'en' 
                  ? "Strategic leader with over 7 years of experience in e-commerce, AI implementations, and high-stakes operations. Seeking new challenges in Project Management and Digital Strategy."
                  : "Leader stratégique avec plus de 7 ans d'expérience dans l'e-commerce, les implémentations IA et les opérations à fort impact. À la recherche de nouveaux défis en Gestion de Projet et Stratégie Digitale."
                }
              </p>
              
              <div className="flex flex-wrap gap-8 items-center mb-12">
                <div className="mono text-[11px] text-[#1e1b4b] flex gap-6">
                  <span className="flex items-center gap-2 italic">● Paris / London / Remote</span>
                </div>
                
                <div className="flex items-center gap-3 bg-[#EBFBEE] border border-[#D3F9D8] px-4 py-2 rounded-full">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40C057] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#40C057]"></span>
                  </div>
                  <span className="mono text-[10px] font-bold text-[#2B8A3E] uppercase tracking-widest">
                    {lang === 'en' ? 'Ready to drive innovation' : 'Prête à piloter l\'innovation'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://calendar.app.google/uArDnRcLFKdXPKxG6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1e1b4b] text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[#0f172a] transition-all flex items-center justify-center gap-4 relative group overflow-hidden font-bold"
                >
                  <span className="relative z-10">{lang === 'en' ? 'Schedule Interview' : 'Prendre Rendez-vous'}</span>
                  <span className="relative z-10">→</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.a>
                
                <motion.button 
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border border-[#E2E8F0] text-[#0F172A] px-10 py-5 text-[10px] uppercase tracking-[0.3em] hover:border-[#1e1b4b] hover:text-[#1e1b4b] transition-all flex items-center justify-center gap-4"
                >
                  <span>{lang === 'en' ? 'Download CV' : 'Télécharger CV'}</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative group max-w-sm md:max-w-md">
              <div className="absolute -inset-4 border border-[#1e1b4b]/5 -z-10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700" />
              
              <div className="overflow-hidden rounded-2xl shadow-[0_32px_64px_-16px_rgba(30,27,75,0.1)] bg-[#F1F5F9]">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Millicent Elvis" 
                  className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 border border-[#E2E8F0] shadow-xl hidden md:block">
                <div className="mono text-[8px] text-[#64748B] flex flex-col gap-1">
                  <span className="text-[#1e1b4b] font-bold uppercase tracking-widest">Millicent_Elvis</span>
                  <span>{lang === 'en' ? 'TOP_TIER_CANDIDATE' : 'CANDIDATE_D_ELITE'}</span>
                  <span>SYS_ACTIVE_2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;