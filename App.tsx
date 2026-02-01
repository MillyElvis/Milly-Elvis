import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Introduction from './components/Introduction';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrintableCV from './components/PrintableCV';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'en' | 'fr'>('fr');
  const [view, setView] = useState<'home' | 'cv'>('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Listen for hash changes to allow back button navigation from CV
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#cv') setView('cv');
      else setView('home');
    };
    window.addEventListener('popstate', handleHash);
    return () => window.removeEventListener('popstate', handleHash);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en');
  
  const openCV = () => {
    window.location.hash = 'cv';
    setView('cv');
    window.scrollTo(0, 0);
  };

  const closeCV = () => {
    window.location.hash = '';
    setView('home');
    window.scrollTo(0, 0);
  };

  if (view === 'cv') {
    return <PrintableCV lang={lang} onClose={closeCV} />;
  }

  return (
    <div className="relative min-h-screen tech-grid bg-[#F8FAFC]">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8FAFC]"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-[2px] bg-[#1e1b4b] mb-8"
            />
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl serif tracking-[0.3em] text-[#0F172A]"
            >
              MILLICENT ELVIS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 mono text-[10px] tracking-widest text-[#64748B]"
            >
              {lang === 'en' ? 'INITIALIZING ELITE_CORE_' : 'INITIALISATION_SYSTÈME_'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#1e1b4b] origin-left z-[60]" 
        style={{ scaleX }} 
      />
      
      <Header lang={lang} toggleLang={toggleLang} onPrintCV={openCV} />
      
      <main>
        <Hero lang={lang} onPrintCV={openCV} />
        <Stats lang={lang} />
        <Introduction lang={lang} />
        <Expertise lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Skills lang={lang} />
        <Interests lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
};

export default App;