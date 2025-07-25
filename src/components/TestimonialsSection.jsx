import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMessageSquare } = FiIcons;

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Abdullah Al-Otaibi",
      role: "Meat Importer, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=300&h=300&fit=crop&crop=face",
      quote: "Pak Meat Traders has consistently delivered the highest quality halal beef to our business in Riyadh. Their commitment to Islamic standards and product freshness is unmatched.",
      stars: 5
    },
    {
      name: "Mohammed Al-Farsi",
      role: "Restaurant Chain Owner, Dubai",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face",
      quote: "We've been importing beef from Pak Meat Traders for over two years. Their products maintain exceptional quality even after air delivery to UAE. Highly recommended!",
      stars: 5
    },
    {
      name: "Fatima Al-Sabah",
      role: "Wholesale Distributor, Kuwait",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      quote: "The attention to detail in their halal certification process gives us complete confidence when distributing their products. Our customers consistently praise the quality.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by international importers and distributors across the Middle East for our premium quality halal beef products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary opacity-20">
                <SafeIcon icon={FiMessageSquare} className="h-12 w-12" />
              </div>

              {/* Star Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic mb-8">"{testimonial.quote}"</p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '50+', label: 'Satisfied Clients' },
            { number: '3+', label: 'Countries Served' },
            { number: '100%', label: 'Halal Certified' },
            { number: '5+', label: 'Years of Excellence' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;