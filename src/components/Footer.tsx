import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold text-orange-500 mb-4 cursor-pointer"
            >
              NEXTBYTES
            </motion.h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light max-w-md">
              Pioneering the future of web development with AI-powered solutions 
              that transform businesses and drive unprecedented growth.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-medium text-white mb-6">Navigation</h4>
            <nav className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Pricing'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ x: 4, color: '#FF6A00' }}
                  className="block text-gray-300 hover:text-orange-500 transition-all duration-300 text-left font-light"
                >
                  {item}
                </motion.button>
              ))}
              <button
                onClick={onContactClick}
                className="block text-gray-300 hover:text-orange-500 transition-all duration-300 text-left font-light"
              >
                Contact
              </button>
            </nav>
          </motion.div>

          {/* Connect Section (Email Only) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-medium text-white mb-6">Connect</h4>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <span className="text-gray-300">support@turbobytes.in</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;