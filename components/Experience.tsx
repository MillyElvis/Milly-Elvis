import React from 'react';
import { motion } from 'framer-motion';

const experiences = {
  en: [
    {
      period: 'JAN 2023 — PRESENT',
      role: 'Independent Consultant, AI & Digital Strategy',
      company: 'Freelance | Paris & London',
      location: 'Paris / London',
      description: 'Advising innovation-led brands on generative AI adoption. Designing strategic product frameworks and accelerating digital growth via data-driven AI architectures.',
      status: 'ACTIVE'
    },
    {
      period: 'NOV 2025 — DEC 2025',
      role: 'Sales Consultant & Operational Support',
      company: 'Le Bon Marché - Pop-up Brands',
      location: 'Paris',
      description: 'Personalized premium client support in luxury environments (MUM OF, My Name is Gigi). Managed a bespoke voice-first digital solution for internal management and stock coordination.',
      status: 'TEMPORARY'
    },
    {
      period: 'JAN 2015 — JAN 2021',
      role: 'Founder & CEO',
      company: 'The Lingerie Lab & Box of Intimates',
      location: 'London / New York',
      description: 'Founded and developed two international e-commerce ventures in fashion. Achieved 72% online sales growth and served 85,000+ global customers. Managed end-to-end digital strategy and fundraising.',
      status: 'EXITED'
    },
    {
      period: 'AUG 2017 — JAN 2018',
      role: 'Strategic Ops & Ecosystem Support (AI / Blockchain)',
      company: 'SingularityNET',
      location: 'London / International',
      description: 'Supported the founding team in a $360M capital raise. Contributed to high-visibility public robotics demonstrations and ecosystem development.',
      status: 'COMPLETED'
    }
  ],
  fr: [
    {
      period: 'JAN 2023 — PRÉSENT',
      role: 'Consultante indépendante, Stratégie IA & Digitale',
      company: 'Indépendante | Paris & Londres',
      location: 'Paris / Londres',
      description: 'Conseil auprès de marques orientées innovation sur l’adoption de l’IA générative et les systèmes de croissance pilotés par la donnée.',
      status: 'ACTIF'
    },
    {
      period: 'NOV 2025 — DÉC 2025',
      role: 'Conseillère de Vente & Support Opérationnel',
      company: 'Le Bon Marché - Marques éphémères',
      location: 'Paris',
      description: 'Accueil et accompagnement personnalisé des clients dans un environnement luxe (MUM OF, My Name is Gigi). Pilotage d’une solution digitale voice-first développée sur-mesure.',
      status: 'TEMPORAIRE'
    },
    {
      period: 'JAN 2015 — JAN 2021',
      role: 'Fondatrice & CEO',
      company: 'The Lingerie Lab & Box of Intimates',
      location: 'Londres / New York',
      description: 'Création et développement de deux entreprises internationales de e-commerce. Croissance de 72 % des ventes et plus de 85 000 clientes servies à l’international.',
      status: 'EXIT'
    },
    {
      period: 'AOÛT 2017 — JAN 2018',
      role: 'Opérations stratégiques & support écosystème (IA / Blockchain)',
      company: 'SingularityNET',
      location: 'Londres / International',
      description: 'Soutien à l’équipe fondatrice (7 membres) dans une levée de 360 M$ auprès d’investisseurs whitelistés.',
      status: 'COMPLÉTÉ'
    }
  ]
};

interface ExperienceProps {
  lang: 'en' | 'fr';
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        <div className="lg:w-1/3">
          <div className="sticky top-40">
            <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.3em] font-bold uppercase">Chronicle_Log</div>
            <h2 className="text-4xl md:text-6xl serif mb-6 text-[#0F172A]">
              {lang === 'en' ? 'Professional' : 'Expérience'} <span className="italic">{lang === 'en' ? 'Experience.' : 'Professionnelle.'}</span>
            </h2>
            <p className="text-[#64748B] font-light leading-relaxed mb-8">
              {lang === 'en' 
                ? "A trajectory of leadership and innovation at the intersection of AI, luxury fashion, and digital systems."
                : "Une trajectoire de décision et d'innovation à l'intersection de l'IA, de la mode de luxe et des systèmes digitaux."
              }
            </p>
            <div className="w-16 h-[1px] bg-[#1e1b4b]" />
          </div>
        </div>
        
        <div className="lg:w-2/3">
          {experiences[lang].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative pb-16 pl-12 border-l border-[#E2E8F0] last:pb-0"
            >
              <div className="absolute left-[-6px] top-0 w-3 h-3 bg-white border border-[#1e1b4b] rounded-full group-hover:bg-[#1e1b4b] group-hover:shadow-[0_0_15px_rgba(30,27,75,0.4)] transition-all duration-300 z-10" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <span className="mono text-[10px] tracking-[0.2em] text-[#1e1b4b] font-bold">{exp.period}</span>
                <span className="mono text-[8px] tracking-widest px-2 py-1 border border-[#E2E8F0] text-slate-400 group-hover:text-[#1e1b4b] group-hover:border-[#1e1b4b]/30 transition-all uppercase">{exp.status}</span>
              </div>
              
              <h3 className="text-3xl serif mb-2 text-[#0F172A] group-hover:text-[#1e1b4b] transition-colors">{exp.role}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-semibold mb-6">{exp.company} — {exp.location}</p>
              
              <p className="text-[#475569] font-light leading-relaxed max-w-2xl group-hover:text-[#0F172A] transition-colors">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;