import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, delay }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericPart = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      let current = 0;
      
      const timer = setInterval(() => {
        current += Math.ceil(numericPart / 50);
        if (current >= numericPart) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current + suffix);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="relative group p-6"
    >
      <div className="absolute -top-0 -left-0 w-8 h-8 border-l border-t border-[#1e1b4b]/20 group-hover:border-[#1e1b4b]/50 transition-colors" />
      <h3 className="text-4xl md:text-6xl serif text-[#1e1b4b] mb-3">{displayValue}</h3>
      <p className="text-[9px] uppercase tracking-[0.3em] text-[#64748B] font-bold mono">{label}</p>
    </motion.div>
  );
};

interface StatsProps {
  lang: 'en' | 'fr';
}

const Stats: React.FC<StatsProps> = ({ lang }) => {
  const stats = {
    en: [
      { label: 'Capital Ops Support', value: '$360M' },
      { label: 'Global Customers', value: '85K+' },
      { label: 'Growth Variance', value: '+72%' },
      { label: 'Strategic Years', value: '7+' }
    ],
    fr: [
      { label: 'Support Ops Capital', value: '360M$' },
      { label: 'Clients Mondiaux', value: '85K+' },
      { label: 'Variance Croissance', value: '+72%' },
      { label: 'Années Stratégiques', value: '7+' }
    ]
  };

  return (
    <section className="bg-white py-24 px-6 border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          {stats[lang].map((stat, idx) => (
            <StatItem 
              key={stat.label} 
              label={stat.label} 
              value={stat.value} 
              delay={idx * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;