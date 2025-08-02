import React from 'react';
import { Mail, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow border border-gray-200 flex flex-col items-center relative">
        <button
          onClick={() => navigate('/')}
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
      </div>
    </div>
  );
};

export default ContactPage; 