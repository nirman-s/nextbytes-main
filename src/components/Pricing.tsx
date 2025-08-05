import React from 'react';
import { Star, Check, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingProps {
  onContactClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  const packages = [
    {
      name: 'Basic',
      price: '₹3,499',
      icon: <Check className="w-6 h-6" />,
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      features: [
        'Custom five-page website design',
        'Mobile-responsive',
        'SEO-friendly',
        '3 revisions',
        '2 months maintenance',
        'Free backup',
        '2 day delivery'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Premium',
      price: '₹5,799',
      icon: <Zap className="w-6 h-6" />,
      description: 'Ideal for growing businesses that need more features and faster delivery.',
      features: [
        'Up to 10 pages',
        'Mobile-first design',
        'Contact forms',
        'E-commerce up to 20 products',
        'SEO + analytics',
        '5 revisions',
        '1 year maintenance',
        'Free hosting & backup',
        '2 day delivery'
      ],
      popular: true,
      color: 'orange'
    },
    {
      name: 'Pro',
      price: '₹6,999',
      icon: <Crown className="w-6 h-6" />,
      description: 'Complete solution for established businesses requiring advanced features and unlimited scalability.',
      features: [
        'Unlimited pages',
        'Advanced e-commerce',
        'AI chatbot',
        'Custom APIs',
        'Advanced SEO',
        '3 revisions',
        '60 days support',
        'Free hosting, backup, and domain',
        '1 day delivery'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-lg p-8 shadow-xl border-2 ${
                pkg.popular 
                  ? 'border-orange-500 scale-105 shadow-2xl' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  pkg.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  pkg.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">✅ What's Included:</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className={`text-sm mt-1 ${
                        pkg.color === 'blue' ? 'text-blue-500' :
                        pkg.color === 'orange' ? 'text-orange-500' :
                        'text-purple-500'
                      }`}>🔸</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="text-center mb-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600 ml-2 text-sm">(One-Time Payment)</span>
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
                onClick={onContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                  pkg.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                  pkg.color === 'orange' ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                  'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                Get Started Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;