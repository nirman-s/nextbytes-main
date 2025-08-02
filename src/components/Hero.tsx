import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onViewDemos: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewDemos, onContactClick }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Launch, Optimize & Scale Instantly';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 diagonal-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-none tracking-tight">
            AI-POWERED
            <br />
            <span className="text-orange-500">
              WEB DESIGN
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Transform your business with sleek, AI-powered websites that convert. 
            Same-day delivery, mobile-first design, and unbeatable pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange-500 text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500 transition-all duration-300 flex items-center gap-3 shadow-lg"
          >
            Get Audit
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={onViewDemos}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-gray-700 border-2 border-gray-300 px-8 py-4 font-medium text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center gap-3"
          >
            <Play className="w-5 h-5" />
            View Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;