import React, { useState } from 'react';
import { X, Send, CheckCircle, User, Mail, Building, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'audit' | 'quote';
}

interface FormData {
  name: string;
  email: string;
  company: string;
  projectBrief: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title, type }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectBrief: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.projectBrief.trim()) newErrors.projectBrief = 'Project brief is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const resetAndClose = () => {
    setFormData({ name: '', email: '', company: '', projectBrief: '' });
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={resetAndClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-8 bg-orange-500">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={resetAndClose}
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-2 hover:bg-white hover:text-orange-500 transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </motion.button>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 mt-2 font-light"
            >
              Let's build something extraordinary together
            </motion.p>
          </div>

          {/* Content */}
          <div className="p-8">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name Field */}
                <div className="relative">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 font-light ${
                        errors.name ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                      }`}
                      placeholder="Full Name"
                    />
                    <motion.label
                      initial={false}
                      animate={{
                        top: formData.name ? -8 : 12,
                        fontSize: formData.name ? '12px' : '16px',
                        color: formData.name ? '#FF6A00' : '#9CA3AF'
                      }}
                      className="absolute left-10 pointer-events-none transition-all duration-300 bg-white px-2 font-light"
                    >
                      {formData.name ? 'Full Name' : ''}
                    </motion.label>
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 ml-1 font-light"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 font-light ${
                        errors.email ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                      }`}
                      placeholder="Email Address"
                    />
                    <motion.label
                      initial={false}
                      animate={{
                        top: formData.email ? -8 : 12,
                        fontSize: formData.email ? '12px' : '16px',
                        color: formData.email ? '#FF6A00' : '#9CA3AF'
                      }}
                      className="absolute left-10 pointer-events-none transition-all duration-300 bg-white px-2 font-light"
                    >
                      {formData.email ? 'Email Address' : ''}
                    </motion.label>
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 ml-1 font-light"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Company Field */}
                <div className="relative">
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 font-light ${
                        errors.company ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                      }`}
                      placeholder="Company Name"
                    />
                    <motion.label
                      initial={false}
                      animate={{
                        top: formData.company ? -8 : 12,
                        fontSize: formData.company ? '12px' : '16px',
                        color: formData.company ? '#FF6A00' : '#9CA3AF'
                      }}
                      className="absolute left-10 pointer-events-none transition-all duration-300 bg-white px-2 font-light"
                    >
                      {formData.company ? 'Company Name' : ''}
                    </motion.label>
                  </div>
                  {errors.company && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 ml-1 font-light"
                    >
                      {errors.company}
                    </motion.p>
                  )}
                </div>

                {/* Project Brief Field */}
                <div className="relative">
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      value={formData.projectBrief}
                      onChange={(e) => handleInputChange('projectBrief', e.target.value)}
                      rows={4}
                      className={`w-full pl-10 pr-4 py-3 border bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none font-light ${
                        errors.projectBrief ? 'border-red-500' : 'border-gray-300 focus:border-orange-500'
                      }`}
                      placeholder={
                        type === 'audit'
                          ? 'Tell us about your current website and goals...'
                          : 'Describe your project requirements and timeline...'
                      }
                    />
                    <motion.label
                      initial={false}
                      animate={{
                        top: formData.projectBrief ? -8 : 12,
                        fontSize: formData.projectBrief ? '12px' : '16px',
                        color: formData.projectBrief ? '#FF6A00' : '#9CA3AF'
                      }}
                      className="absolute left-10 pointer-events-none transition-all duration-300 bg-white px-2 font-light"
                    >
                      {formData.projectBrief ? 'Project Brief' : ''}
                    </motion.label>
                  </div>
                  {errors.projectBrief && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1 ml-1 font-light"
                    >
                      {errors.projectBrief}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 text-white py-3 font-medium text-lg transition-all duration-300 disabled:opacity-70 disabled:transform-none flex items-center justify-center gap-3 hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {type === 'audit' ? 'Get Audit' : 'Request Quote'}
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                </motion.div>
                
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  Success!
                </motion.h4>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-8 text-lg font-light"
                >
                  We'll contact you within 24 hours with your {type === 'audit' ? 'free audit' : 'custom quote'}.
                </motion.p>
                
                <motion.button
                  onClick={resetAndClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-orange-500 text-white px-6 py-2 font-medium hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500 transition-all duration-300"
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;