import React from 'react';
import { Zap, Palette, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'AI Site Build',
      description: 'Lightning-fast development with AI-powered design generation',
      points: [
        'Custom AI-generated layouts',
        'Mobile-first responsive design',
        'Performance-optimized code'
      ]
    },
    {
      icon: Palette,
      title: 'Smart Optimization',
      description: 'Intelligent performance monitoring and enhancement',
      points: [
        'Real-time performance tracking',
        'SEO automation',
        'Conversion rate optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Growth Analytics',
      description: 'Data-driven insights for exponential growth',
      points: [
        'Advanced user behavior analysis',
        'Revenue optimization algorithms',
        'Predictive growth modeling'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Next-Level
            <br />
            <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Cutting-edge AI technology meets world-class design expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group bg-white border border-gray-200 p-8 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIndex * 0.1 }}
                        className="text-gray-700 flex items-start gap-3 font-light"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;