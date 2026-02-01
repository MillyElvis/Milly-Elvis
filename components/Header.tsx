import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  lang: 'en' | 'fr';
  toggleLang: () => void;
  onPrintCV?: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, toggleLang, onPrintCV }) => {
  const navItems = {
    en: ['Expertise', 'Experience', 'Skills', 'Contact'],
    fr: ['Expertise', 'Expérience', 'Compétences', 'Contact']
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-[#E2E8F0] px-6 py-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className="text-4xl md:text-5xl serif font-bold tracking-tighter text-[#0F172A] group-hover:text-[#1e1b4b] transition-colors leading-none">
            Millicent Elvis
          </span>
        </a>
        
        <div className="flex gap-4 md:gap-10 items-center">
          <div className="hidden md:flex gap-10">
            {navItems[lang].map((item, idx) => (
              <a 
                key={item}
                href={`#${['expertise', 'experience', 'skills', 'contact'][idx]}`}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#64748B] hover:text-[#1e1b4b] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1e1b4b] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button 
            onClick={toggleLang}
            className="mono text-[10px] font-bold tracking-widest px-3 py-1 border border-[#E2E8F0] text-[#64748B] hover:text-[#1e1b4b] hover:border-[#1e1b4b] transition-all"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>

          <button 
            onClick={onPrintCV}
            className="bg-[#0F172A] text-white text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 hover:bg-[#1e1b4b] transition-all font-bold hidden sm:block"
          >
            {lang === 'en' ? 'Hire Me' : "M'embaucher"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;