import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiUsers, FiThermometer, FiCheck, FiAward, FiEye } = FiIcons;

const SlaughterFacility = () => {
  const facilityFeatures = [
    {
      icon: FiShield,
      title: 'Halal Certified',
      description: 'Fully certified by Pakistan Halal Authority (PHA) with regular inspections and compliance monitoring.'
    },
    {
      icon: FiUsers,
      title: 'Trained Personnel',
      description: 'Skilled and certified Islamic slaughtermen with years of experience in halal practices.'
    },
    {
      icon: FiThermometer,
      title: 'Temperature Controlled',
      description: 'State-of-the-art climate control systems maintaining optimal temperature throughout the process.'
    },
    {
      icon: FiEye,
      title: 'Quality Monitoring',
      description: 'Continuous monitoring and inspection at every stage to ensure highest quality standards.'
    }
  ];

  const hygieneStandards = [
    'HACCP (Hazard Analysis Critical Control Points) compliance',
    'Regular sanitization of all equipment and surfaces',
    'Personal hygiene protocols for all staff members',
    'Sterile processing environment maintenance',
    'Water quality testing and purification systems',
    'Waste management and disposal protocols',
    'Pest control and environmental monitoring',
    'Regular third-party hygiene audits'
  ];

  const certifications = [
    {
      name: 'Pakistan Halal Authority (PHA)',
      description: 'Official halal certification ensuring Islamic compliance',
      icon: FiAward
    },
    {
      name: 'Veterinary Health Certificate',
      description: 'Government veterinary approval for meat processing',
      icon: FiShield
    },
    {
      name: 'Export License',
      description: 'Authorized for international meat export operations',
      icon: FiCheck
    }
  ];

  const facilityImages = [
    {
      src: '/images/slaughter-facility/Processing Area.jpg',
      title: 'Processing Area',
      description: 'Clean and modern meat processing facility'
    },
    {
      src: '/images/slaughter-facility/Quality Control.jpg',
      title: 'Quality Control',
      description: 'Rigorous quality inspection processes'
    },
    {
      src: '/images/slaughter-facility/Packaging Area.jpg',
      title: 'Packaging Area',
      description: 'Professional vacuum sealing and packaging'
    },
    {
      src: '/images/slaughter-facility/Cold Storage.jpg',
      title: 'Cold Storage',
      description: 'Temperature-controlled storage facilities'
    }
  ];

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
            <h1 className="text-5xl font-bold mb-6">Slaughter Facility</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              State-of-the-art halal slaughter facility maintaining the highest standards of hygiene, quality, and Islamic compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Halal Processing Facility</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Our slaughter facility represents the perfect blend of traditional Islamic practices 
                  and modern technology. Located in Lahore, Pakistan, our facility is designed to 
                  meet international standards while strictly adhering to halal requirements.
                </p>
                <p>
                  Every aspect of our facility, from the initial cattle handling to the final 
                  packaging, is designed with hygiene, quality, and Islamic compliance in mind. 
                  We employ only certified Islamic slaughtermen who follow traditional halal 
                  practices with precision and care.
                </p>
                <p>
                  Our facility is regularly inspected by the Pakistan Halal Authority (PHA) and 
                  maintains all necessary certifications for international export. We take pride 
                  in our transparent processes and welcome customer visits for facility inspections.
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
                src="/images/slaughter-facility/Modern Halal Processing Facility.jpg"
                alt="Modern Halal Processing Facility - State-of-the-art Equipment"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Facility Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facility incorporates advanced technology and traditional practices to ensure the highest quality halal meat production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityFeatures.map((feature, index) => (
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

      {/* Hygiene Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/slaughter-facility/Hygiene Standards.jpg"
                alt="Hygiene Standards - HACCP Compliance and Quality Control"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hygiene Standards</h2>
              <p className="text-gray-600 text-lg mb-8">
                We maintain the highest hygiene standards throughout our facility, implementing 
                international best practices and exceeding local regulatory requirements.
              </p>
              <div className="space-y-4">
                {hygieneStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Approvals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facility holds all necessary certifications and approvals for halal meat processing and international export.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={cert.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Facility Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our modern processing facility and see our commitment to quality and hygiene.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlaughterFacility;