import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface StickyContactProps {
  onContactClick: () => void;
}

const StickyContact: React.FC<StickyContactProps> = ({ onContactClick }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        onClick={onContactClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative bg-orange-500 text-white p-4 shadow-lg border-2 border-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-300"
      >
        {/* Pulsing Ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-orange-500"
        />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5 }}
          className="relative z-10"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute bottom-full right-0 mb-4 px-3 py-2 bg-gray-900 text-white text-sm whitespace-nowrap font-medium shadow-lg"
        >
          Talk to an Expert
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default StickyContact;