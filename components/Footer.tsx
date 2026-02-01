
import React from 'react';

interface FooterProps {
  lang: 'en' | 'fr';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const tagline = {
    en: "Strategizing for your next era of growth.",
    fr: "Prête à piloter votre prochaine ère de croissance."
  };

  return (
    <footer className="py-20 px-6 md:px-12 bg-[#000000] border-t border-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-[#111827]">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-widest text-[#4B5563] font-bold">
              © 2026 Millicent Elvis
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#4B5563]">
              {lang === 'en' ? 'Bilingual: English / French.' : 'Bilingue : Anglais / Français.'}
            </p>
          </div>

          <div className="flex gap-8">
            {['LinkedIn'].map(social => (
              <a 
                key={social} 
                href="https://linkedin.com/in/MillyElvis" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest text-[#4B5563] hover:text-[#1e1b4b] transition-colors font-bold"
              >
                {social}
              </a>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1e1b4b] font-bold italic">
            {tagline[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
