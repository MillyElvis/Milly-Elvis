import React from 'react';
import { motion } from 'framer-motion';

const educationData = {
  en: [
    { school: 'Purdue University', degree: 'MSc in Artificial Intelligence (Distance)', years: '2024 - 2025' },
    { school: 'Purdue University', degree: 'PgD in Business Analysis (Distance)', years: '2023 - 2023' },
    { school: 'University College London', degree: 'CIM/CAM Diploma in Digital Marketing', years: '2014 - 2015' },
    { school: 'Plymouth University', degree: 'BSc in Management & Information Technologies', years: '2007 - 2010' }
  ],
  fr: [
    { school: 'Purdue University', degree: 'MSc en Ingénierie de l’Intelligence Artificielle', years: '2024 - 2025' },
    { school: 'Purdue University', degree: 'PgD en Business Analysis', years: '2023 - 2023' },
    { school: 'University College London', degree: 'Diplôme CIM/CAM en Digital Marketing', years: '2014 - 2015' },
    { school: 'Plymouth University', degree: 'BSc en Management & Technologies de l’Information', years: '2007 - 2010' }
  ]
};

interface EducationProps {
  lang: 'en' | 'fr';
}

const Education: React.FC<EducationProps> = ({ lang }) => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.4em] font-bold uppercase">
            Academic_Background
          </div>
          <h2 className="text-4xl md:text-6xl serif text-[#0F172A]">
            {lang === 'en' ? 'Education' : 'Formation'}.
          </h2>
          <div className="w-12 h-[1px] bg-[#E2E8F0] mt-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {educationData[lang].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col border-b border-[#F1F5F9] pb-6 group"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl serif font-bold text-[#0F172A] group-hover:text-[#1e1b4b] transition-colors">
                  {item.school}
                </h3>
                <span className="mono text-[10px] text-[#64748B]">{item.years}</span>
              </div>
              <p className="text-[#475569] font-light italic">{item.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;