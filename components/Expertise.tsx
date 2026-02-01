import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Cpu, ShoppingBag, Terminal, Zap } from 'lucide-react';

interface ExpertiseProps {
  lang: 'en' | 'fr';
}

const Expertise: React.FC<ExpertiseProps> = ({ lang }) => {
  const expertises = {
    en: [
      {
        icon: <Brain size={20} />,
        title: 'AI Strategy & Systems',
        description: 'Deploying Generative AI, RAG architectures, and custom LLM workflows for enterprise scale.',
        tags: ['GenAI', 'Prompt Eng.', 'RAG', 'Flows'],
        code: 'import { Agent } from "milly-core"'
      },
      {
        icon: <TrendingUp size={20} />,
        title: 'E-Comm Growth Engine',
        description: 'Scaling luxury brands via data-driven acquisition, high-LTV funnels, and retention systems.',
        tags: ['Shopify', 'Analytics', 'CRO', 'GA4'],
        code: 'query_growth(segment="tier1")'
      },
      {
        icon: <Zap size={20} />,
        title: 'Digital Transformation',
        description: 'Architecting transformation roadmaps that integrate legacy luxury with emerging Web3/IA tech.',
        tags: ['Web3', 'Legacy Ops', 'Future-proof'],
        code: 'git commit -m "innovation"'
      },
      {
        icon: <Terminal size={20} />,
        title: 'Technical Product Ops',
        description: 'Bridging technical engineering with business goals through agile project architecture.',
        tags: ['Agile', 'Python', 'Stakeholder'],
        code: 'while project.running:'
      },
      {
        icon: <ShoppingBag size={20} />,
        title: 'Luxury Retail UX',
        description: 'Designing high-conversion digital experiences that maintain prestige and brand elevation.',
        tags: ['CX Design', 'Premium', 'UGC Strategy'],
        code: 'const prestige = Math.max()'
      },
      {
        icon: <Cpu size={20} />,
        title: 'Data Architecture',
        description: 'Building robust pipelines that turn raw customer data into predictive business intelligence.',
        tags: ['SQL', 'Snowflake', 'ETL', 'MLOps'],
        code: 'SELECT growth FROM data'
      }
    ],
    fr: [
      {
        icon: <Brain size={20} />,
        title: 'Stratégie & Systèmes IA',
        description: 'Déploiement d\'IA générative, architectures RAG et workflows LLM personnalisés à l\'échelle de l\'entreprise.',
        tags: ['GenAI', 'Prompt Eng.', 'RAG', 'Flows'],
        code: 'import { Agent } from "milly-core"'
      },
      {
        icon: <TrendingUp size={20} />,
        title: 'Moteur de Croissance E-Comm',
        description: 'Développement de marques de luxe via l\'acquisition de données, funnels à haute LTV et systèmes de rétention.',
        tags: ['Shopify', 'Analytics', 'CRO', 'GA4'],
        code: 'query_growth(segment="tier1")'
      },
      {
        icon: <Zap size={20} />,
        title: 'Transformation Digitale',
        description: 'Conception de feuilles de route intégrant le luxe traditionnel aux technologies émergentes Web3/IA.',
        tags: ['Web3', 'Legacy Ops', 'Future-proof'],
        code: 'git commit -m "innovation"'
      },
      {
        icon: <Terminal size={20} />,
        title: 'Ops Produit Technique',
        description: 'Faire le pont entre l\'ingénierie technique et les objectifs business via une architecture de projet agile.',
        tags: ['Agile', 'Python', 'Stakeholder'],
        code: 'while project.running:'
      },
      {
        icon: <ShoppingBag size={20} />,
        title: 'UX Retail de Luxe',
        description: 'Conception d\'expériences digitales à haute conversion tout en maintenant le prestige de la marque.',
        tags: ['CX Design', 'Premium', 'UGC Strategy'],
        code: 'const prestige = Math.max()'
      },
      {
        icon: <Cpu size={20} />,
        title: 'Architecture de Données',
        description: 'Construction de pipelines transformant les données brutes en intelligence prédictive pour le business.',
        tags: ['SQL', 'Snowflake', 'ETL', 'MLOps'],
        code: 'SELECT growth FROM data'
      }
    ]
  };

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mono text-[10px] text-[#1e1b4b] mb-4 tracking-[0.3em] font-bold">
              {lang === 'en' ? 'CAPABILITIES_MATRIX' : 'MATRICE_CAPACITÉS'}
            </div>
            <h2 className="text-4xl md:text-6xl serif mb-6 text-[#0F172A]">
              {lang === 'en' ? 'Advanced Growth & Innovation Architectures' : 'Architectures de Croissance & Innovation'}
            </h2>
            <p className="text-[#64748B] font-light leading-relaxed">
              {lang === 'en' 
                ? 'Synthesizing luxury brand equity with the efficiency of modern AI stacks. My approach is modular, data-first, and results-oriented.'
                : 'Synthèse de l\'équité des marques de luxe avec l\'efficacité des stacks IA modernes. Mon approche est modulaire, axée sur les données et orientée résultats.'
              }
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-[#E2E8F0] mb-4 hidden md:block ml-12" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0] border border-[#E2E8F0]">
          {expertises[lang].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-12 bg-white group hover:bg-[#F1F5F9] transition-all relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 mono text-[8px] text-[#1e1b4b] opacity-30 group-hover:opacity-100 transition-opacity">
                {item.code}
              </div>
              
              <div className="w-10 h-10 rounded-full border border-[#1e1b4b]/20 flex items-center justify-center text-[#1e1b4b] mb-8 group-hover:bg-[#1e1b4b] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              
              <h3 className="text-2xl serif mb-4 text-[#0F172A]">{item.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-8 h-12">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-1 bg-[#F1F5F9] text-[#64748B] border border-transparent group-hover:border-[#1e1b4b]/30 group-hover:bg-white transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;