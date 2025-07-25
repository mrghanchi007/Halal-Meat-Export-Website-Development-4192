import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ProductGallery from '../components/ProductGallery';

const { FiPackage, FiShield, FiThermometer, FiTruck } = FiIcons;

const Products = () => {
  const productFeatures = [
    {
      icon: FiShield,
      title: '100% Halal Certified',
      description: 'Certified by Pakistan Halal Authority with complete documentation'
    },
    {
      icon: FiPackage,
      title: 'Vacuum Sealed',
      description: 'Professional vacuum sealing to maintain freshness during transport'
    },
    {
      icon: FiThermometer,
      title: 'Temperature Controlled',
      description: 'Maintained at optimal temperature throughout the supply chain'
    },
    {
      icon: FiTruck,
      title: 'Air Delivery',
      description: 'Fast air delivery to ensure maximum freshness upon arrival'
    }
  ];

  const specifications = [
    { label: 'Product Type', value: 'Fresh Halal Beef (Full Carcass)' },
    { label: 'Slaughter Method', value: '100% Manual Halal Slaughtering' },
    { label: 'Packaging', value: 'Vacuum Sealed' },
    { label: 'Storage Temperature', value: '0°C to 4°C' },
    { label: 'Shelf Life', value: '21 days from slaughter date' },
    { label: 'Certification', value: 'Pakistan Halal Authority (PHA)' },
    { label: 'Delivery Method', value: 'Air Freight' },
    { label: 'Minimum Order', value: 'Contact for details' }
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
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Premium quality fresh halal beef products, carefully selected and processed to meet international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Fresh Halal Beef</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Our primary product is premium quality fresh halal beef, sourced from carefully 
                  selected cattle and processed according to strict Islamic guidelines. We specialize 
                  in full carcass beef that meets the highest international standards.
                </p>
                <p>
                  Each piece of meat undergoes rigorous quality control and is processed using 
                  100% manual halal slaughtering methods, ensuring authenticity and religious 
                  compliance for our international customers.
                </p>
                <p>
                  Our vacuum-sealed packaging technology preserves freshness and extends shelf 
                  life, making it ideal for international air delivery to markets in Saudi Arabia, 
                  UAE, Kuwait, and other countries.
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
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=400&fit=crop"
                alt="Fresh Halal Beef"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our product is designed to deliver the highest quality and freshness to our international customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
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

      {/* Enhanced Product Gallery */}
      <ProductGallery />

      {/* Product Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications of our fresh halal beef products for international export.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`p-6 border-b border-gray-200 ${
                    index % 2 === 0 ? 'md:border-r' : ''
                  } ${index >= specifications.length - 2 ? 'border-b-0' : ''}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;