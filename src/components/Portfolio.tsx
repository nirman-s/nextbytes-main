import React, { useState } from 'react';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  const demos = [
    {
      title: 'E-Commerce Revolution',
      category: 'Retail Tech',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Next-generation e-commerce platform with AI-powered product recommendations, dynamic pricing, and seamless checkout experience that increased conversions by 340%.',
      features: ['AI Product Recommendations', 'Dynamic Pricing Engine', 'One-Click Checkout', 'Real-time Inventory'],
      tech: ['React', 'Node.js', 'AI/ML', 'Stripe'],
      metrics: { conversion: '+340%', revenue: '+280%', speed: '0.8s' }
    },
    {
      title: 'Café Digital Experience',
      category: 'Hospitality',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Immersive café website with AR menu previews, smart ordering system, and loyalty program integration that transformed customer engagement.',
      features: ['AR Menu Experience', 'Smart Ordering System', 'Loyalty Integration', 'Real-time Updates'],
      tech: ['Vue.js', 'WebAR', 'PWA', 'Firebase'],
      metrics: { orders: '+450%', retention: '+220%', satisfaction: '98%' }
    },
    {
      title: 'Enterprise Solutions',
      category: 'B2B Platform',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive B2B platform with AI-driven analytics, automated workflows, and enterprise-grade security for Fortune 500 companies.',
      features: ['AI Analytics Dashboard', 'Workflow Automation', 'Enterprise Security', 'API Integration'],
      tech: ['Angular', 'Python', 'TensorFlow', 'AWS'],
      metrics: { efficiency: '+380%', costs: '-45%', uptime: '99.9%' }
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 diagonal-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Portfolio
            <br />
            <span className="text-orange-500">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Witness the future of web development in action
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer bg-white border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedDemo(index)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-sm font-medium">
                  {demo.category}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-orange-500/20 flex items-center justify-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {demo.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {demo.description.slice(0, 120)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedDemo !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedDemo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <img
                    src={demos[selectedDemo].image}
                    alt={demos[selectedDemo].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedDemo(null)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-orange-500 text-sm font-medium">
                        {demos[selectedDemo].category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900 mt-1">
                        {demos[selectedDemo].title}
                      </h3>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 font-medium hover:bg-white hover:text-orange-500 hover:border-orange-500 border-2 border-orange-500 transition-all duration-300"
                      onClick={() => {
                        setSelectedDemo(null);
                        window.location.href = '/';
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                    {demos[selectedDemo].description}
                  </p>

                  {/* Metrics */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {Object.entries(demos[selectedDemo].metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 bg-gray-50 border border-gray-200"
                      >
                        <div className="text-2xl font-bold text-orange-500 mb-1">{value}</div>
                        <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Features & Tech */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {demos[selectedDemo].features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center gap-3 text-gray-700 font-light"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {demos[selectedDemo].tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            className="bg-orange-500 text-white px-3 py-1 text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;