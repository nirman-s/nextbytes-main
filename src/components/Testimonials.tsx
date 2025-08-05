import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  // Animated dots for the message
  const [dots, setDots] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-900 diagonal-pattern">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Client
            <br />
            <span className="text-orange-500">Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Real results from real businesses that trusted NextBytes
          </p>
        </motion.div>
        <div className="flex justify-center items-center min-h-[200px]">
          <motion.span
            className="text-2xl font-semibold text-gray-200 font-mono bg-white/10 px-6 py-4 rounded-lg shadow-md border border-orange-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Updating Soon{dots}
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;