import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  lang: 'en' | 'fr';
}

const skillCategories = [
  {
    name: 'TECHNOLOGIES_CORE',
    skills: ['Python', 'SQL', 'HTLM', 'Tableau', 'Azure', 'Generative AI', 'RAG (Retrieval-Augmented Generation)', 'Prompt Engineering']
  },
  {
    name: 'COMMERCE_MANAGEMENT',
    skills: ['Shopify Experts', 'Catalogue Management', 'Merchandising', 'SEO / SEA', 'GEO / AEO Strategy', 'Analyse Trafic']
  },
  {
    name: 'GROWTH_MARKETING',
    skills: ['CRM & Comm (Mailchimp, Brevot, GHL)', 'Digital Marketing (UCL)', 'Growth Reporting', 'Suivi KPIs', 'Conversion Optimization']
  },
  {
    name: 'STRATEGY_UX',
    skills: ['Relation client haut de gamme', 'Personnalisation IA', 'Coordination Projets Multidisciplinaire', 'Venture Capital Ops', 'Bilingue (FR/EN)']
  }
];

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.4em] font-bold uppercase">
            {lang === 'en' ? 'Technical_Capabilities' : 'Capacités_Techniques'}
          </div>
          <h2 className="text-4xl md:text-6xl serif text-[#0F172A]">
            {lang === 'en' ? 'Skills' : 'Compétences'} <span className="italic">{lang === 'en' ? '& Tools.' : '& Outils.'}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 border border-[#E2E8F0] hover:border-[#1e1b4b]/50 transition-colors group bg-white"
            >
              <div className="absolute top-[-8px] left-4 bg-white px-2 mono text-[10px] font-bold text-[#1e1b4b]">
                {cat.name}
              </div>
              <ul className="space-y-4 pt-4">
                {cat.skills.map((skill, sIdx) => (
                  <li key={skill} className="flex items-center gap-3 text-[#64748B] text-sm group-hover:text-[#0F172A] transition-colors">
                    <span className="w-1 h-1 bg-[#1e1b4b] rounded-full opacity-40" />
                    <span className="font-light">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;