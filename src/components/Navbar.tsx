import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionDetection = () => {
      const sections = ['home', 'services', 'portfolio', 'pricing'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection
      
      let currentSection = 'home';
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      
      setActiveSection(currentSection);
    };

    const scrollHandler = () => {
      handleScroll();
      requestAnimationFrame(handleSectionDetection);
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // Initial check on mount
    handleScroll();
    handleSectionDetection();
    
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      // Redirect to contact page
      window.location.href = '/contact';
      return;
    }
    
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              NEXT<span className="text-orange-500">BYTES</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-700 font-medium hover:text-orange-500 transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    initial={false}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 35,
                      duration: 0.3
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => window.location.href = '/contact'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block bg-orange-500 text-white px-6 py-2 font-medium hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500 transition-all duration-300"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 4 }}
                  className="block w-full text-left text-gray-700 font-medium py-2 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-orange-500 text-white py-3 font-medium mt-4 hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;