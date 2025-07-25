import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiTool, FiPackage, FiAward, FiTruck, FiCheck } = FiIcons;

const ExportProcess = () => {
  const processSteps = [
    {
      icon: FiFileText,
      title: 'Order Finalization',
      description: 'Customer requirements confirmed, contracts signed, and specifications agreed upon.',
      details: [
        'Customer consultation and requirement analysis',
        'Price quotation and terms negotiation',
        'Contract finalization and order confirmation',
        'Delivery schedule planning'
      ]
    },
    {
      icon: FiTool,
      title: 'Halal Slaughter',
      description: '100% manual halal slaughtering process following Islamic guidelines.',
      details: [
        'Cattle selection and pre-slaughter inspection',
        'Islamic prayer and blessing ritual',
        'Manual halal slaughtering by certified personnel',
        'Immediate processing and quality check'
      ]
    },
    {
      icon: FiPackage,
      title: 'Professional Packing',
      description: 'Vacuum sealing and packaging for international transportation.',
      details: [
        'Quality grading and portion cutting',
        'Vacuum sealing for freshness preservation',
        'Temperature-controlled packaging',
        'Labeling with product and batch information'
      ]
    },
    {
      icon: FiAward,
      title: 'Certification',
      description: 'Complete documentation and halal certification for export.',
      details: [
        'Pakistan Halal Authority certification',
        'Veterinary health certificates',
        'Export documentation preparation',
        'Quality assurance certificates'
      ]
    },
    {
      icon: FiTruck,
      title: 'Air Delivery',
      description: 'Fast and reliable air freight delivery to international destinations.',
      details: [
        'Cold chain logistics arrangement',
        'Air freight booking and scheduling',
        'Real-time shipment tracking',
        'Delivery to customer destination'
      ]
    }
  ];

  const qualityChecks = [
    'Pre-slaughter cattle health inspection',
    'Halal compliance verification',
    'Post-slaughter meat quality assessment',
    'Packaging integrity checks',
    'Temperature monitoring throughout process',
    'Final quality approval before shipment'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Export Process</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A transparent, step-by-step process ensuring quality, authenticity, and timely delivery of our halal beef products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our 5-Step Export Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From order confirmation to delivery, every step is carefully managed to ensure the highest quality and customer satisfaction.
            </p>
          </motion.div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <SafeIcon icon={step.icon} className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-primary font-semibold text-lg">Step {index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Image */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1586190848861-99aa4a171e90' :
                      index === 1 ? '1607623814075-e51df1bdc82f' :
                      index === 2 ? '1588168333986-5078d3ae3976' :
                      index === 3 ? '1589395937857-d1a6d14d5b44' :
                      '1578662996442-374dcbcb630e'
                    }?w=600&h=400&fit=crop`}
                    alt={step.title}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-gray-600 text-lg mb-8">
                At every step of our export process, we implement rigorous quality control measures 
                to ensure that our products meet and exceed international standards.
              </p>
              <div className="space-y-4">
                {qualityChecks.map((check, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SafeIcon icon={FiCheck} className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700">{check}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
                alt="Quality Control"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Typical Export Timeline</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From order confirmation to delivery at your destination, here's what you can expect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { day: 'Day 1', activity: 'Order Confirmation' },
              { day: 'Day 2-3', activity: 'Slaughter & Processing' },
              { day: 'Day 4', activity: 'Packaging & Certification' },
              { day: 'Day 5', activity: 'Export Documentation' },
              { day: 'Day 6-7', activity: 'Air Delivery' }
            ].map((timeline, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{timeline.day}</h3>
                <p className="text-blue-100">{timeline.activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportProcess;