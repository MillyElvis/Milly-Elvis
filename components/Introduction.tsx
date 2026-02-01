import React from 'react';
import { motion } from 'framer-motion';

const Signature = () => (
  <svg 
    width="160" 
    height="80" 
    viewBox="0 0 160 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="mt-2 ml-6 opacity-90 transform -rotate-2"
  >
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
      d="M30 55 C35 10 45 10 60 45 C70 10 80 10 90 55 C100 55 125 10 105 10 C90 10 105 55 135 55"
      stroke="#1e1b4b"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.circle
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 2.4, ease: "backOut" }}
      cx="148"
      cy="55"
      r="3.5"
      fill="#1e1b4b"
    />
  </svg>
);

interface IntroductionProps {
  lang: 'en' | 'fr';
}

const Introduction: React.FC<IntroductionProps> = ({ lang }) => {
  const content = {
    en: {
      title: "Why I Do This Work",
      p1: "I bridge the gap between visionary ideas and operational excellence. With a founder's mindset and technical precision, I spend my time at the intersection of AI, luxury retail, and digital commerce—building systems that don't just scale businesses, but transform connections.",
      p2: "My journey began founding two international ventures in fashion, where I learned that sustainable growth requires intelligent systems and data-driven decision-making. From there, I evolved into AI strategy, working from generative implementations to ML pipeline optimization.",
      p3: "What drives me is solving problems at the messy intersection of strategy, technology, and human experience. Whether designing AI-powered personalization or restructuring digital growth systems, I thrive where creative vision meets execution.",
      quote: "I believe the future belongs to those who can translate technological possibility into human-centered solutions. If you're building that future, let's talk."
    },
    fr: {
      title: "Ma Vision",
      p1: "Je comble l'écart entre les idées visionnaires et l'excellence opérationnelle. Avec un esprit d'entrepreneur et une précision technique, j'évolue à l'intersection de l'IA, du luxe et du commerce digital — en bâtissant des systèmes qui transforment les marques.",
      p2: "Mon parcours a commencé par la fondation de deux entreprises internationales de mode, où j'ai appris que la croissance durable exige des systèmes intelligents et des décisions basées sur la donnée. De là, j'ai évolué vers la stratégie IA, des implémentations génératives à l'optimisation des pipelines ML.",
      p3: "Ce qui me motive, c'est de résoudre des problèmes à l'intersection de la stratégie, de la technologie et de l'expérience humaine. Qu'il s'agisse de concevoir une personnalisation pilotée par l'IA ou de restructurer des systèmes de croissance, je m'épanouis là où la vision rencontre l'exécution.",
      quote: "Je crois que le futur appartient à ceux qui peuvent traduire les possibilités technologiques en solutions centrées sur l'humain. Si vous bâtissez ce futur, discutons-en."
    }
  };

  return (
    <section id="introduction" className="py-24 px-6 md:px-12 bg-[#F1F5F9]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.4em] font-bold uppercase">Mission_Statement</div>
          <h2 className="text-4xl md:text-5xl serif text-[#0F172A] mb-6">{content[lang].title}</h2>
          <div className="w-16 h-[2px] bg-[#1e1b4b] mx-auto" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg leading-relaxed text-[#475569] font-light"
        >
          <p>{content[lang].p1}</p>
          <p>{content[lang].p2}</p>
          <p>{content[lang].p3}</p>
          
          <div className="relative">
            <p className="text-[#0F172A] font-medium italic border-l-2 border-[#1e1b4b]/30 pl-6 py-2">
              "{content[lang].quote}"
            </p>
            <div className="flex justify-start">
              <Signature />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;