import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoHero from '../components/VideoHero';
import TestimonialsSection from '../components/TestimonialsSection';
import LazyImage from '../components/LazyImage';
import OptimizedImage from '../components/OptimizedImage';
import SEOHead from '../components/SEOHead';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTruck, FiShield, FiHeart, FiCheck } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Fresh Halal Beef',
      description: 'Certified halal beef with 100% manual slaughtering process',
      image: '/images/home/Fresh Halal Beef.jpg'
    },
    {
      icon: FiTruck,
      title: 'Air Delivery',
      description: 'Fast and reliable air delivery to international markets',
      image: '/images/home/Air Delivery.jpg'
    },
    {
      icon: FiHeart,
      title: 'Family-Owned',
      description: 'Family business with traditional values and modern practices',
      image: '/images/home/Family-Owned.jpg'
    }
  ];



  return (
    <div>
      <SEOHead
        title="Pak Meat Traders Pvt - Premium Halal Beef Exporter Pakistan"
        description="Premium Quality Fresh Halal Beef Exporter from Pakistan. Committed to Quality. Trusted Worldwide. Family-owned business serving international markets since 2020."
        keywords="halal beef export, pakistan meat exporter, fresh halal beef, halal meat supplier, beef export pakistan, halal certified beef, international meat trade, family owned business"
        canonical="https://pakmeattraders.com/"
        ogImage="/logo/Pak-meat-traders-Logo-fav.jpg"
      />

      {/* Hero Section */}
      <VideoHero />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Pak Meat Traders Pvt - Premium Halal Beef Exporter Pakistan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to Quality. Trusted Worldwide. We are a family-owned business specializing in premium quality fresh halal beef export, serving international markets with excellence since 2020.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center overflow-hidden rounded-xl shadow-lg bg-gray-50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white">
                    <SafeIcon icon={feature.icon} className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                </div>
                <div className="h-48 overflow-hidden">
                  <LazyImage
                    src={feature.image}
                    alt={`${feature.title} - Pak Meat Traders Premium Halal Beef Export Service`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />



      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Pak Meat Traders - Premium Halal Beef Exporter Pakistan?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional halal practices with modern quality standards to deliver the finest beef products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <LazyImage
                src="/images/home/Why Choose Pak Meat Traders.jpg"
                alt="Why Choose Pak Meat Traders - Premium Halal Beef Quality"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  'Certified by Pakistan Halal Authority (PHA)',
                  '100% Manual Halal Slaughtering Process',
                  'Vacuum Sealed Packaging for Freshness',
                  'Direct Air Delivery to International Markets',
                  'Family-Owned with Traditional Values',
                  'Strict Quality Control at Every Step'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Premium Quality?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a quotation and discover why international buyers trust Pak Meat Traders for their halal beef needs.
            </p>
            <Link
              to="/contact-us"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Your Quote Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;