import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiShield, FiUsers, FiTrendingUp, FiChevronLeft, FiChevronRight } = FiIcons;

const Farms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const farmFeatures = [
    {
      icon: FiHeart,
      title: 'Animal Welfare',
      description: 'Ethical treatment and care of cattle with spacious, clean living conditions and stress-free environment.'
    },
    {
      icon: FiShield,
      title: 'Health Monitoring',
      description: 'Regular veterinary checkups, vaccination programs, and health monitoring to ensure cattle wellbeing.'
    },
    {
      icon: FiUsers,
      title: 'Expert Care',
      description: 'Experienced farm staff and veterinarians providing round-the-clock care and attention to our cattle.'
    },
    {
      icon: FiTrendingUp,
      title: 'Quality Feed',
      description: 'Nutritious, high-quality feed programs designed to promote healthy growth and meat quality.'
    }
  ];

  const farmImages = [
    {
      src: '/images/our-farms/Grazing Fields.jpg',
      title: 'Grazing Fields',
      description: 'Open pastures where our cattle graze freely'
    },
    {
      src: '/images/our-farms/Cattle Care.jpg',
      title: 'Cattle Care',
      description: 'Daily care and monitoring of our livestock'
    },
    {
      src: '/images/our-farms/Feeding Time.jpg',
      title: 'Feeding Time',
      description: 'Quality nutrition for healthy cattle'
    },
    {
      src: '/images/our-farms/Farm Facilities.jpg',
      title: 'Farm Facilities',
      description: 'Modern farm infrastructure and facilities'
    },
    {
      src: '/images/our-farms/Veterinary Care.jpg',
      title: 'Veterinary Care',
      description: 'Professional veterinary services and health monitoring'
    }
  ];

  const careStandards = [
    'Spacious living areas with adequate shelter',
    'Clean and fresh water supply at all times',
    'Regular veterinary health checkups',
    'Vaccination and disease prevention programs',
    'Stress-free handling and transportation',
    'Natural grazing and exercise opportunities',
    'Quality nutrition and balanced feed programs',
    'Environmental enrichment for cattle wellbeing'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % farmImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + farmImages.length) % farmImages.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Farms</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ethical cattle farming with the highest standards of animal welfare, veterinary care, and sustainable practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Farm Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sustainable Cattle Farming</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Our farms are located in the fertile regions of Punjab, Pakistan, where we maintain 
                  the highest standards of cattle care and welfare. We believe that healthy, well-cared-for 
                  cattle produce the finest quality meat, which is why we invest heavily in animal welfare 
                  and sustainable farming practices.
                </p>
                <p>
                  Each farm is equipped with modern facilities including veterinary clinics, feed storage 
                  areas, and climate-controlled shelters. Our cattle have access to open grazing areas, 
                  clean water sources, and receive regular health monitoring from qualified veterinarians.
                </p>
                <p>
                  We work closely with local farmers and communities, providing training and support to 
                  ensure that our cattle are raised according to the highest ethical and quality standards. 
                  This partnership approach helps us maintain consistency and quality across all our operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/our-farms/Sustainable Cattle Farming.jpg"
                alt="Sustainable Cattle Farming - Pak Meat Traders Farm Overview"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Farm Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our farms are designed with cattle welfare and meat quality in mind, incorporating best practices in animal husbandry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={feature.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Gallery Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Farm Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our farms and see how we care for our cattle in a natural, healthy environment.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={farmImages[currentSlide].src}
                  alt={farmImages[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{farmImages[currentSlide].title}</h3>
                    <p className="text-gray-200">{farmImages[currentSlide].description}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <SafeIcon icon={FiChevronLeft} className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <SafeIcon icon={FiChevronRight} className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {farmImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/our-farms/Animal Care Standards.jpg"
                alt="Animal Care Standards - Pak Meat Traders Cattle Welfare"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Animal Care Standards</h2>
              <p className="text-gray-600 text-lg mb-8">
                We maintain the highest standards of animal welfare, ensuring our cattle live in 
                comfortable, stress-free environments that promote their health and wellbeing.
              </p>
              <div className="space-y-4">
                {careStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <SafeIcon icon={FiHeart} className="h-3 w-3" />
                    </div>
                    <span className="text-gray-700">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Environmental Commitment</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12">
              We are committed to sustainable farming practices that protect the environment while 
              ensuring the highest quality of our cattle and meat products. Our approach balances 
              traditional farming wisdom with modern sustainable techniques.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Water Conservation',
                  description: 'Efficient water management systems and conservation practices'
                },
                {
                  title: 'Sustainable Grazing',
                  description: 'Rotational grazing to maintain soil health and pasture quality'
                },
                {
                  title: 'Waste Management',
                  description: 'Responsible waste disposal and organic fertilizer production'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Farms;