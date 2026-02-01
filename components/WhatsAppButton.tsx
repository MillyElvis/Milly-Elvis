
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  lang: 'en' | 'fr';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ lang }) => {
  const phoneNumber = "19143615779";
  const message = lang === 'en' 
    ? "Hi Milly, I'm reaching out from your CV page. I'd love to discuss this potential role with you: "
    : "Bonjour Milly, je vous contacte depuis votre page CV. J'aimerais discuter de cette opportunité avec vous : ";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label={lang === 'en' ? 'WhatsApp Me' : 'Contactez-moi sur WhatsApp'}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 -z-10"
      />
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 mono text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
        {lang === 'en' ? 'WhatsApp Me' : 'WhatsApp'}
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
