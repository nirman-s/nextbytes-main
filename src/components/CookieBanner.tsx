import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-white border-2 border-gray-200 p-6 shadow-lg z-50"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-orange-500 flex items-center justify-center"
              >
                <Cookie className="w-4 h-4 text-white" />
              </motion.div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg">Cookies & Privacy</h4>
                <div className="flex items-center gap-2 text-orange-500 text-sm">
                  <Shield className="w-3 h-3" />
                  <span className="font-medium">Secure & Encrypted</span>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>
          
          {/* Content */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
            We use advanced analytics to optimize your experience and deliver personalized content. 
            <motion.a
              href="#"
              whileHover={{ color: '#FF6A00' }}
              className="text-orange-500 hover:underline ml-1 font-medium"
            >
              Learn more
            </motion.a>
          </p>
          
          {/* Actions */}
          <div className="flex gap-3">
            <motion.button
              onClick={handleDecline}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 hover:border-gray-400 hover:text-gray-800 transition-all duration-300 font-medium"
            >
              Decline
            </motion.button>
            <motion.button
              onClick={handleAccept}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2 bg-orange-500 text-white font-medium hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500 transition-all duration-300"
            >
              Accept
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;