import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEOHead';

const { FiMapPin, FiMail, FiPhone, FiMessageCircle, FiSend, FiClock, FiGlobe } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Email form data to mrghanchi007@gmail.com
      const emailData = {
        to: 'mrghanchi007@gmail.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Country:</strong> ${formData.country}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          <hr>
          <p><em>Submitted from Pak Meat Traders Website</em></p>
        `
      };

      // For now, we'll use mailto link as fallback
      // In production, you would integrate with EmailJS, Formspree, or backend API
      const mailtoLink = `mailto:mrghanchi007@gmail.com?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCountry: ${formData.country}\nMessage: ${formData.message}`)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      alert('Thank you for your message! Your default email client will open to send the message.');
      setFormData({ name: '', email: '', country: '', message: '' });
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Location',
      details: ['Lahore, Pakistan'],
      color: 'bg-primary'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@pakmeattraders.com'],
      color: 'bg-blue-600'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['+92-3477722225'],
      color: 'bg-green-600'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      color: 'bg-purple-600'
    }
  ];

  const exportMarkets = [
    { country: 'Saudi Arabia', flag: '🇸🇦', market: 'Primary Market' },
    { country: 'UAE (Dubai)', flag: '🇦🇪', market: 'Primary Market' },
    { country: 'Kuwait', flag: '🇰🇼', market: 'Primary Market' }
  ];

  return (
    <div>
      <SEOHead 
        title="Contact Us - Get Quote for Halal Beef Export | Pak Meat Traders"
        description="Contact Pak Meat Traders for premium halal beef export quotes. Located in Lahore, Pakistan. Email: mrghanchi007@gmail.com, Phone: +92-3477722225. Serving Saudi Arabia, UAE, Kuwait."
        keywords="contact pak meat traders, halal beef quote, meat export inquiry, pakistan halal beef supplier, beef export contact, halal meat quotation, international meat trade contact"
        canonical="https://pakmeattraders.com/contact-us"
        ogImage="/logo/Pak-meat-traders-Logo-fav.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Pak Meat Traders Pvt",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lahore",
              "addressCountry": "Pakistan"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+92-3477722225",
                "contactType": "sales",
                "availableLanguage": ["English", "Urdu"]
              },
              {
                "@type": "ContactPoint",
                "email": "mrghanchi007@gmail.com",
                "contactType": "customer service"
              }
            ],
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa 09:00-14:00"
            ]
          }
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to experience premium quality halal beef? Get in touch with us for quotations, inquiries, or any questions about our products and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your halal beef import needs. Contact us through any of the following methods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${info.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <SafeIcon icon={info.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible with a detailed response to your inquiry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your country"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Please include details about your requirements, quantity needed, and any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <SafeIcon icon={FiMapPin} className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Lahore, Pakistan</p>
                    <p className="text-gray-500 text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </div>

              {/* Export Markets */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Export Markets</h3>
                <div className="space-y-4">
                  {exportMarkets.map((market, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                      <span className="text-2xl mr-4">{market.flag}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{market.country}</h4>
                        <p className="text-sm text-gray-600">{market.market}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Options */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@pakmeattraders.com"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <SafeIcon icon={FiMail} className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Us</h4>
                      <p className="text-sm text-gray-600">info@pakmeattraders.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923477722225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <SafeIcon icon={FiMessageCircle} className="h-6 w-6 text-green-500 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <p className="text-sm text-gray-600">+92-3477722225</p>
                    </div>
                  </a>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Import Premium Halal Beef?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our satisfied customers worldwide who trust Pak Meat Traders for their halal beef needs. 
              Contact us today to discuss your requirements and get a customized quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/our-products"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                View Our Products
              </Link>
              <a
                href="https://wa.me/923477722225"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
              >
                <SafeIcon icon={FiMessageCircle} className="h-5 w-5 mr-2" />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;