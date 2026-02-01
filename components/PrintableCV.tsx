import React from 'react';
import { Mail, Linkedin, MapPin, Phone, Globe, Award, CheckCircle } from 'lucide-react';

interface PrintableCVProps {
  lang: 'en' | 'fr';
  onClose: () => void;
}

const PrintableCV: React.FC<PrintableCVProps> = ({ lang, onClose }) => {
  const content = {
    en: {
      title: "Millicent Elvis",
      subtitle: "AI-Powered Growth Strategist | Project Lead | E-Comm Expert",
      location: "Paris / London / Remote",
      summary: "Strategic leader with over 7 years of experience bridging the gap between luxury brand equity and modern AI implementation. Expert in scaling international e-commerce ventures and architecting data-driven growth systems. Founder's mindset with technical precision in GenAI, RAG, and digital transformation.",
      sections: {
        experience: "Professional Experience",
        education: "Education & Certifications",
        skills: "Technical & Strategic Skills",
        expertise: "Core Expertise Areas",
        languages: "Languages",
        projects: "Key Projects & Impacts"
      },
      expertise: [
        { title: "AI Strategy", desc: "GenAI, RAG architectures, and custom LLM workflows." },
        { title: "E-Comm Growth", desc: "Data-driven acquisition and high-LTV funnels." },
        { title: "Product Ops", desc: "Agile project architecture and technical leadership." }
      ],
      experiences: [
        {
          role: "Independent Consultant, AI & Digital Strategy",
          company: "Freelance",
          location: "Paris / London",
          date: "Jan 2023 - Present",
          points: [
            "Advising innovation-led luxury brands on generative AI adoption and system integration.",
            "Designing strategic product frameworks and accelerating digital growth via data-driven architectures.",
            "Architecting custom RAG (Retrieval-Augmented Generation) workflows for enterprise scale.",
            "Optimizing customer acquisition costs (CAC) through AI-powered personalization tools."
          ]
        },
        {
          role: "Sales Consultant & Operational Support",
          company: "Le Bon Marché (Pop-up Brands)",
          location: "Paris",
          date: "Nov 2025 - Dec 2025",
          points: [
            "Provided personalized premium client support in high-end luxury environments.",
            "Managed a bespoke voice-first digital solution for internal management and real-time stock coordination.",
            "Bridged traditional luxury retail service with modern digital operational efficiency."
          ]
        },
        {
          role: "Founder & CEO",
          company: "The Lingerie Lab & Box of Intimates",
          location: "London / New York",
          date: "Jan 2015 - Jan 2021",
          points: [
            "Launched and scaled two international e-commerce platforms with a global footprint.",
            "Achieved a consistent 72% year-over-year sales growth with a database of 85,000+ customers.",
            "Managed end-to-end digital strategy, international supply chains, and investor relations.",
            "Successfully exited the venture after establishing it as a recognized name in the niche market."
          ]
        },
        {
          role: "Strategic Ops & Ecosystem Support",
          company: "SingularityNET (AI & Blockchain)",
          location: "London / International",
          date: "Aug 2017 - Jan 2018",
          points: [
            "Supported the founding team during a record-breaking $360M capital raise.",
            "Coordinated high-visibility public robotics demonstrations (Sophia the Robot) globally.",
            "Developed strategic partnerships to expand the decentralised AI ecosystem."
          ]
        }
      ],
      skills: {
        tech: ["Python", "SQL", "HTML/CSS", "Tableau", "Azure AI", "Prompt Engineering", "RAG Systems", "MLOps"],
        growth: ["Shopify Plus", "Google Analytics 4", "SEO/SEA/GEO", "CRM (Mailchimp/GHL)", "CRO", "LTV Optimization"],
        strategy: ["Agile/Scrum", "Venture Capital Ops", "Stakeholder Mgmt", "Luxury Branding", "Business Analysis"]
      },
      education: [
        { school: "Purdue University", degree: "MSc in Artificial Intelligence", years: "2024 - 2025" },
        { school: "Purdue University", degree: "PgD in Business Analysis", years: "2023" },
        { school: "University College London", degree: "Digital Marketing Diploma (CIM/CAM)", years: "2014 - 2015" },
        { school: "Plymouth University", degree: "BSc in Management & Information Technologies", years: "2007 - 2010" }
      ]
    },
    fr: {
      title: "Millicent Elvis",
      subtitle: "Stratège Croissance IA | Lead Projet | Experte E-Commerce",
      location: "Paris / Londres / Remote",
      summary: "Leader stratégique avec plus de 7 ans d'expérience faisant le pont entre l'équité des marques de luxe et l'implémentation de l'IA moderne. Experte dans le développement d'entreprises e-commerce internationales et la conception de systèmes de croissance pilotés par les données. Esprit entrepreneurial allié à une précision technique en IA Générative et transformation digitale.",
      sections: {
        experience: "Expérience Professionnelle",
        education: "Formation & Diplômes",
        skills: "Compétences Techniques & Stratégiques",
        expertise: "Domaines d'Expertise",
        languages: "Langues",
        projects: "Projets Clés & Impacts"
      },
      expertise: [
        { title: "Stratégie IA", desc: "IA Générative, architectures RAG et workflows LLM." },
        { title: "Croissance E-Comm", desc: "Acquisition de données et funnels à haute LTV." },
        { title: "Ops Produit", desc: "Architecture de projet Agile et leadership technique." }
      ],
      experiences: [
        {
          role: "Consultante Indépendante, Stratégie IA & Digitale",
          company: "Freelance",
          location: "Paris / Londres",
          date: "Jan 2023 - Présent",
          points: [
            "Conseil auprès de marques de luxe sur l'adoption de l'IA générative et l'intégration de systèmes.",
            "Conception de frameworks produits stratégiques et accélération de la croissance digitale via des architectures de données.",
            "Mise en place de workflows RAG (Retrieval-Augmented Generation) personnalisés pour l'entreprise.",
            "Optimisation des coûts d'acquisition client (CAC) via des outils de personnalisation pilotés par l'IA."
          ]
        },
        {
          role: "Conseillère de Vente & Support Opérationnel",
          company: "Le Bon Marché (Pop-up Brands)",
          location: "Paris",
          date: "Nov 2025 - Déc 2025",
          points: [
            "Accompagnement personnalisé d'une clientèle haut de gamme dans un environnement de luxe.",
            "Gestion d'une solution digitale voice-first sur mesure pour la gestion interne et la coordination des stocks.",
            "Lien entre le service retail luxe traditionnel et l'efficacité opérationnelle digitale moderne."
          ]
        },
        {
          role: "Fondatrice & CEO",
          company: "The Lingerie Lab & Box of Intimates",
          location: "Londres / New York",
          date: "Jan 2015 - Jan 2021",
          points: [
            "Lancement et développement de deux plateformes e-commerce internationales avec une présence mondiale.",
            "Atteinte d'une croissance annuelle constante des ventes de 72% avec une base de 85 000+ clients.",
            "Direction de la stratégie digitale de bout en bout, de la logistique internationale et des relations investisseurs.",
            "Sortie réussie de l'entreprise (exit) après l'avoir établie comme une référence sur son marché de niche."
          ]
        },
        {
          role: "Support Ops Stratégique & Écosystème",
          company: "SingularityNET (IA & Blockchain)",
          location: "Londres / International",
          date: "Août 2017 - Jan 2018",
          points: [
            "Soutien à l'équipe fondatrice lors d'une levée de fonds record de 360 millions de dollars.",
            "Coordination de démonstrations robotiques publiques mondiales (Sophia the Robot).",
            "Développement de partenariats stratégiques pour étendre l'écosystème d'IA décentralisée."
          ]
        }
      ],
      skills: {
        tech: ["Python", "SQL", "HTML/CSS", "Tableau", "Azure AI", "Prompt Engineering", "Systèmes RAG", "MLOps"],
        growth: ["Shopify Plus", "Google Analytics 4", "SEO/SEA/GEO", "CRM (Mailchimp/GHL)", "CRO", "Optimisation LTV"],
        strategy: ["Agile/Scrum", "Ops Venture Capital", "Gestion Stakeholders", "Branding Luxe", "Business Analysis"]
      },
      education: [
        { school: "Purdue University", degree: "MSc en Intelligence Artificielle", years: "2024 - 2025" },
        { school: "Purdue University", degree: "PgD en Business Analysis", years: "2023" },
        { school: "University College London", degree: "Diplôme Digital Marketing (CIM/CAM)", years: "2014 - 2015" },
        { school: "Plymouth University", degree: "BSc en Management & Technologies de l'Information", years: "2007 - 2010" }
      ]
    }
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-neutral-200 py-12 px-4 flex flex-col items-center print:bg-white print:py-0 print:px-0">
      {/* Action Bar */}
      <div className="max-w-[210mm] w-full mb-8 flex justify-between items-center print:hidden">
        <button 
          onClick={onClose}
          className="text-xs font-bold mono text-[#1e1b4b] hover:bg-white/50 px-4 py-2 rounded transition-all flex items-center gap-2"
        >
          ← {lang === 'en' ? 'BACK TO PORTFOLIO' : 'RETOUR AU PORTFOLIO'}
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-[#1e1b4b] text-white px-8 py-3 text-[10px] uppercase tracking-widest font-bold shadow-xl hover:bg-black transition-all flex items-center gap-3"
        >
          {lang === 'en' ? 'Download PDF or Print' : 'Télécharger PDF ou Imprimer'}
        </button>
      </div>

      {/* CV Document Container */}
      <div className="space-y-8 print:space-y-0">
        
        {/* PAGE 1 */}
        <div className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] p-[15mm] md:p-[20mm] print:shadow-none print:m-0 printable-document relative page-break-after">
          
          {/* Header */}
          <header className="border-b-4 border-[#1e1b4b] pb-10 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex-1">
              <h1 className="text-5xl serif font-bold text-[#0F172A] tracking-tighter mb-3">{current.title}</h1>
              <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#1e1b4b] mono mb-4">{current.subtitle}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-[#64748B] mono">
                <span className="flex items-center gap-2"><Mail size={12} className="text-[#1e1b4b]" /> millyai.master@gmail.com</span>
                <span className="flex items-center gap-2"><MapPin size={12} className="text-[#1e1b4b]" /> {current.location}</span>
                <span className="flex items-center gap-2"><Globe size={12} className="text-[#1e1b4b]" /> linkedin.com/in/MillyElvis</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="bg-[#1e1b4b] text-white px-4 py-2 text-[9px] font-bold uppercase tracking-widest">
                {lang === 'en' ? 'Confidential - Senior Level' : 'Confidentiel - Senior'}
              </div>
              <div className="text-[10px] mono text-[#94A3B8]">Ref: ME_CV_2026_V2</div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-4 border-b border-slate-100 pb-1">Executive Summary</h2>
            <p className="text-[13px] leading-relaxed text-[#475569] font-light text-justify">
              {current.summary}
            </p>
          </section>

          {/* Expertise Pillars */}
          <section className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-6 border-b border-slate-100 pb-1">{current.sections.expertise}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.expertise.map((item, idx) => (
                <div key={idx} className="bg-[#F8FAFC] p-4 border-l-2 border-[#1e1b4b]">
                  <h3 className="text-sm serif font-bold text-[#0F172A] mb-1">{item.title}</h3>
                  <p className="text-[11px] text-[#64748B] font-light leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section - Start */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-8 border-b border-slate-100 pb-1">{current.sections.experience}</h2>
            <div className="space-y-12">
              {current.experiences.slice(0, 3).map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl serif font-bold text-[#0F172A]">{exp.role}</h3>
                    <span className="mono text-[11px] font-bold text-[#1e1b4b]">{exp.date}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx} className="text-[12px] text-[#475569] font-light pl-6 relative leading-relaxed">
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-[#1e1b4b] rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Page Number */}
          <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] mono text-slate-300">
            Page 01 / 02
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] p-[15mm] md:p-[20mm] print:shadow-none print:m-0 printable-document relative">
          
          {/* Experience Continued */}
          <section className="mb-16 pt-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-8 border-b border-slate-100 pb-1">{current.sections.experience} (Continued)</h2>
            <div className="space-y-12">
              {current.experiences.slice(3).map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl serif font-bold text-[#0F172A]">{exp.role}</h3>
                    <span className="mono text-[11px] font-bold text-[#1e1b4b]">{exp.date}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx} className="text-[12px] text-[#475569] font-light pl-6 relative leading-relaxed">
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-[#1e1b4b] rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Col: Skills */}
            <div className="md:col-span-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-6 border-b border-slate-100 pb-1">{current.sections.skills}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[10px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-3">AI & Data Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {current.skills.tech.map(s => (
                      <span key={s} className="text-[10px] px-2.5 py-1.5 bg-[#F8FAFC] border border-slate-200 text-[#475569] mono font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-3">Growth & E-Commerce</h3>
                  <div className="flex flex-wrap gap-2">
                    {current.skills.growth.map(s => (
                      <span key={s} className="text-[10px] px-2.5 py-1.5 bg-[#F8FAFC] border border-slate-200 text-[#475569] mono font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-[#1e1b4b] uppercase tracking-widest mb-3">Strategy & Ops</h3>
                  <div className="flex flex-wrap gap-2">
                    {current.skills.strategy.map(s => (
                      <span key={s} className="text-[10px] px-2.5 py-1.5 bg-[#F8FAFC] border border-slate-200 text-[#475569] mono font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Education & Languages */}
            <div className="md:col-span-5 flex flex-col gap-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-6 border-b border-slate-100 pb-1">{current.sections.education}</h2>
                <div className="space-y-6">
                  {current.education.map((edu, idx) => (
                    <div key={idx} className="group">
                      <p className="text-[12px] font-bold text-[#0F172A] leading-tight mb-0.5">{edu.degree}</p>
                      <p className="text-[11px] text-[#64748B] italic leading-tight">{edu.school}</p>
                      <p className="text-[9px] mono text-[#94A3B8] mt-1 uppercase tracking-widest">{edu.years}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#1e1b4b] mb-6 border-b border-slate-100 pb-1">{current.sections.languages}</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="text-[#475569]">English</span>
                    <span className="font-bold text-[#1e1b4b] mono tracking-widest">BILINGUAL</span>
                  </div>
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="text-[#475569]">French</span>
                    <span className="font-bold text-[#1e1b4b] mono tracking-widest">BILINGUAL</span>
                  </div>
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="text-[#475569]">Italian</span>
                    <span className="font-bold text-[#94A3B8] mono tracking-widest uppercase">Intermediate</span>
                  </div>
                </div>
              </section>

              {/* Call to Action Box */}
              <div className="mt-auto p-6 bg-[#1e1b4b] text-white">
                 <p className="text-[10px] uppercase tracking-[0.4em] mb-3 font-bold opacity-80">{lang === 'en' ? 'Let\'s build the future' : 'Bâtissons le futur'}</p>
                 <p className="text-[11px] leading-relaxed font-light mb-4">
                   {lang === 'en' 
                     ? 'Strategically positioning your organization for the next era of growth through intelligent AI systems and digital excellence.' 
                     : 'Positionnement stratégique de votre organisation pour la prochaine ère de croissance grâce à l\'IA et l\'excellence digitale.'}
                 </p>
                 <div className="flex items-center gap-2 text-[10px] font-bold mono">
                    <CheckCircle size={14} className="text-green-400" /> {lang === 'en' ? 'OPEN TO NEW CHALLENGES' : 'OUVERTE AUX DÉFIS'}
                 </div>
              </div>
            </div>
          </div>

          {/* Final Footer Info */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-end">
             <div className="text-[10px] mono text-slate-400 uppercase tracking-widest">
                Millicent Elvis — 2026 Portfolio
             </div>
             <div className="text-[10px] mono text-[#1e1b4b] font-bold">
                W: milly-elvis.vercel.app
             </div>
          </div>

          {/* Page Number */}
          <div className="absolute bottom-10 left-0 right-0 text-center text-[10px] mono text-slate-300">
            Page 02 / 02
          </div>
        </div>

        {/* Global Print Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media print {
            body { 
              background: white !important; 
              color: black !important;
            }
            .tech-grid, .grain, .custom-cursor, .action-bar { display: none !important; }
            .printable-document { 
              padding: 0 !important; 
              margin: 0 !important; 
              box-shadow: none !important; 
              width: 100% !important;
              min-height: auto !important;
            }
            .page-break-after {
              page-break-after: always;
            }
            @page {
              size: A4;
              margin: 0mm;
            }
          }
          @media (max-width: 1024px) {
            .printable-document {
               padding: 20px !important;
            }
          }
        `}} />
      </div>
    </div>
  );
};

export default PrintableCV;