import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Pricing
            <br />
            <span className="text-orange-500">That Scales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Transparent, competitive pricing for every business size
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-orange-500 rounded-lg p-8 shadow-xl relative"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ⚡ Turbo Complete Website
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A full-fledged, professional website at an unbeatable price – ideal for small businesses, creators, startups, and anyone looking to go digital without breaking the bank.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">✅ What's Included:</h4>
              <ul className="space-y-3">
                {[
                  'Up to 10 Pages',
                  'Mobile-Responsive Design',
                  'Free Domain Setup & Hosting',
                  'Basic SEO Setup',
                  'Contact Form Integration',
                  'Social Media Linking',
                  '2 Free Revisions',
                  'Delivery Within 1 Day'
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-orange-500">🔸</span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center mb-6">
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$7 or ₹499</span>
                <span className="text-gray-600 ml-2">(One-Time Payment)</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Payment via:</strong> Razorpay
              </p>
              <p className="text-sm text-gray-600">
                <strong>Support Email:</strong>{' '}
                <a 
                                      href="mailto:support@turbobytes.in" 
                  className="text-orange-600 hover:text-orange-800"
                >
                                      support@turbobytes.in
                </a>
              </p>
            </div>

            <motion.button
              onClick={() => window.location.href = '/contact'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;