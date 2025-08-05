import React from 'react';
import { Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition-colors p-2"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <span role="img" aria-label="Contact">📞</span> Contact Us
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            At NextBytes Innovations, we're always ready to connect with you. Whether you have questions about our services, need support, or just want to discuss your website requirements — feel free to reach out.<br /><br />
            We're based in Odisha, India, and available every day of the week to assist you.
          </p>
          <div className="w-full bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 flex flex-col items-center">
            <span className="text-gray-800 font-medium mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" /> Email us at:
            </span>
            <a href="mailto:support@turbobytes.in" className="text-lg font-bold text-orange-600 hover:underline">support@turbobytes.in</a>
          </div>
          <p className="text-gray-600 text-sm text-center">
            We typically respond within a few hours. If your query is urgent or related to an ongoing project, please mention that in your email subject line for faster assistance.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPage; 