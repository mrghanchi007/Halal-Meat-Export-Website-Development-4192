import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiChevronUp, FiMail, FiMessageCircle, FiPhone } = FiIcons;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our minimum order quantity varies depending on the destination country and specific requirements. Please contact us directly for detailed MOQ information based on your location and needs. We work with customers to find solutions that meet both their requirements and our operational capabilities."
    },
    {
      question: "How do you ensure the meat is 100% halal?",
      answer: "We ensure 100% halal compliance through several measures: Our facility is certified by the Pakistan Halal Authority (PHA), we employ only certified Islamic slaughtermen, follow traditional Islamic slaughter methods with proper prayers and blessings, maintain separate halal-only processing lines, and provide complete halal documentation with each shipment."
    },
    {
      question: "What countries do you export to?",
      answer: "We primarily export to Saudi Arabia, UAE (Dubai), and Kuwait. However, we are expanding our reach to other countries in the Middle East and beyond. If you're interested in importing to a country not listed, please contact us to discuss the possibilities and requirements."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary by destination but typically range from 6-10 days from the slaughter date. This includes processing time (2-3 days), documentation and certification (1-2 days), and air freight delivery (3-5 days). We provide tracking information and keep you updated throughout the process."
    },
    {
      question: "What type of packaging do you use?",
      answer: "We use professional vacuum-sealed packaging that maintains freshness and extends shelf life. Our packaging is designed for international air freight, includes proper labeling with product information, batch numbers, and dates, and meets international food safety standards for meat products."
    },
    {
      question: "Do you provide health certificates?",
      answer: "Yes, we provide comprehensive documentation including Pakistan Halal Authority (PHA) certificates, veterinary health certificates from government authorities, export documentation for customs clearance, and quality assurance certificates. All documentation is prepared according to the importing country's requirements."
    },
    {
      question: "How do you maintain meat freshness during transport?",
      answer: "We maintain freshness through a complete cold chain system: vacuum-sealed packaging immediately after processing, temperature-controlled storage facilities, refrigerated air freight transportation, and continuous temperature monitoring throughout the journey. Our meat arrives fresh and ready for consumption."
    },
    {
      question: "Can you accommodate custom cutting requirements?",
      answer: "Yes, we can accommodate various cutting requirements based on customer specifications. We offer different portion sizes, specific cuts as per customer requirements, custom packaging options, and special labeling if needed. Please discuss your specific requirements when placing an order."
    },
    {
      question: "What is the shelf life of your products?",
      answer: "Our vacuum-sealed fresh beef has a shelf life of 21 days from the slaughter date when maintained at proper refrigeration temperatures (0°C to 4°C). The vacuum sealing process helps extend freshness while maintaining quality and taste."
    },
    {
      question: "How can I place an order or request a quotation?",
      answer: "You can place an order or request a quotation by contacting us via email at mrghanchi007@gmail.com, WhatsApp at +92-3477722225, or through our website contact form. Please provide details about your requirements including quantity, destination, and any specific preferences for accurate quotation."
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
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our halal beef products, export process, and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to the most frequently asked questions about our products and services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <SafeIcon
                    icon={openItems[index] ? FiChevronUp : FiChevronDown}
                    className="h-5 w-5 text-primary flex-shrink-0"
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems[index] ? 'auto' : 0,
                    opacity: openItems[index] ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              If you couldn't find the answer you're looking for, don't hesitate to reach out to us. 
              Our team is ready to help with any specific questions about our products or services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMail} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@pakmeattraders.com</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMessageCircle} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">+92-3477722225</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiPhone} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+92-3477722225</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;