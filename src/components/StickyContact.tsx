import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyContact: React.FC = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          onClick={() => setIsMessageOpen(true)}
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

      {/* Contact Message Modal */}
      <AnimatePresence>
        {isMessageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsMessageOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMessageOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Contact Message */}
              <div className="text-gray-700 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Contact Us</h2>
                
                <p>
                  At NextBytes Innovations, we're always ready to connect with you. Whether you have questions about our services, need support, or just want to discuss your website requirements — feel free to reach out.
                </p>
                
                <p>
                  We're based in Odisha, India, and available every day of the week to assist you.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">📧 Email us at:</p>
                  <a 
                    href="mailto:support@turbobytes.in" 
                    className="text-orange-600 hover:text-orange-800 font-medium text-lg"
                  >
                    support@turbobytes.in
                  </a>
                </div>
                
                <p className="text-sm text-gray-600">
                  We typically respond within a few hours. If your query is urgent or related to an ongoing project, please mention that in your email subject line for faster assistance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyContact;