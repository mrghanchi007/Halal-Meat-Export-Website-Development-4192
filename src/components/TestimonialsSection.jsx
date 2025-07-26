import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMessageSquare } = FiIcons;

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const sliderImages = [
    '/images/home/PakMeatTraders/Pak Meat Traders (1).jpg',
    '/images/home/PakMeatTraders/Pak Meat Traders (2).jpg',
    '/images/home/PakMeatTraders/Pak Meat Traders (3).jpg',
    '/images/home/PakMeatTraders/Pak Meat Traders (4).jpg',
    '/images/home/PakMeatTraders/Pak Meat Traders (5).jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(testimonialTimer);
  }, []);

  const testimonials = [
    {
      name: "Abdullah Al-Otaibi",
      role: "Meat Importer, Saudi Arabia",
      image: "/images/home/Abdullah Al-Otaibi.jpg",
      quote: "Pak Meat Traders has consistently delivered the highest quality halal beef to our business in Riyadh. Their commitment to Islamic standards and product freshness is unmatched.",
      stars: 5
    },
    {
      name: "Mohammed Al-Farsi",
      role: "Restaurant Chain Owner, Dubai",
      image: "/images/home/Mohammed Al-Farsi.jpg",
      quote: "We've been importing beef from Pak Meat Traders for over two years. Their products maintain exceptional quality even after air delivery to UAE. Highly recommended!",
      stars: 5
    },
    {
      name: "Fatima Al-Sabah",
      role: "Wholesale Distributor, Kuwait",
      image: "/images/home/Fatima Al-Sabah.jpg",
      quote: "The attention to detail in their halal certification process gives us complete confidence when distributing their products. Our customers consistently praise the quality.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by international importers and distributors across the Middle East for our premium quality halal beef products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Slider */}
          <motion.div
            className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {sliderImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={image}
                  alt={`Pak Meat Traders Premium Halal Beef Export Operations ${index + 1} - Fresh Meat Processing Pakistan`}
                  title={`Pak Meat Traders - Professional Halal Beef Export Facility ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                    }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Testimonials Slider */}
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentTestimonial ? 1 : 0,
                  x: index === currentTestimonial ? 0 : 100
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
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
                <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>

                {/* Client Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.role} - Pak Meat Traders Client Testimonial`}
                    title={`${testimonial.name} - Satisfied Customer of Pak Meat Traders Halal Beef Export`}
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Testimonial Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-110' 
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialsSection;