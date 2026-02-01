import React from 'react';
import { motion } from 'framer-motion';

interface InterestsProps {
  lang: 'en' | 'fr';
}

const interestsData = {
  en: [
    { emoji: "🌿", title: "Wellness Community (Events)" },
    { emoji: "📈", title: "Finance & Crypto" },
    { emoji: "🏛️", title: "Design & Architecture" },
    { emoji: "🩰", title: "Classical Ballet" },
    { emoji: "🎾", title: "Tennis" },
    { emoji: "🎹", title: "Piano" },
    { emoji: "🇮🇹", title: "Italian" },
    { emoji: "✈️", title: "Cultural Exploration" }
  ],
  fr: [
    { emoji: "🌿", title: "Communauté Wellness (Événements)" },
    { emoji: "📈", title: "Finance & Crypto" },
    { emoji: "🏛️", title: "Design & Architecture" },
    { emoji: "🩰", title: "Danse Classique" },
    { emoji: "🎾", title: "Tennis" },
    { emoji: "🎹", title: "Piano" },
    { emoji: "🇮🇹", title: "Italien" },
    { emoji: "✈️", title: "Exploration" }
  ]
};

const Interests: React.FC<InterestsProps> = ({ lang }) => {
  return (
    <section id="interests" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.4em] font-bold uppercase">
            {lang === 'en' ? 'Beyond_Work' : 'Hors_Travail'}
          </div>
          <h2 className="text-4xl md:text-5xl serif text-[#0F172A]">
            {lang === 'en' ? 'Human Context' : 'Contexte Humain'}
          </h2>
          <div className="w-12 h-[1px] bg-[#E2E8F0] mt-6" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {interestsData[lang].map((interest, idx) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, borderColor: '#1e1b4b' }}
              className="p-5 md:p-6 bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 group shadow-sm flex items-center gap-6 min-h-[80px]"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                {interest.emoji}
              </span>
              <h3 className="text-xl md:text-2xl serif font-bold text-[#0F172A] group-hover:text-[#1e1b4b] transition-colors leading-tight">
                {interest.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;