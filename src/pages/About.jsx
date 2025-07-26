import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from '../components/SEOHead';

const { FiUsers, FiTrendingUp, FiGlobe, FiAward } = FiIcons;

const About = () => {
  const values = [
    {
      icon: FiAward,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering the highest quality halal beef products.'
    },
    {
      icon: FiUsers,
      title: 'Family Values',
      description: 'Family-owned business with traditional values and personal customer relationships.'
    },
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Serving international markets with reliable and timely delivery services.'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Growth',
      description: 'Constantly improving our processes and expanding our capabilities.'
    }
  ];

  const team = [
    {
      name: 'Muhammad Ahmed',
      position: 'Chief Executive Officer',
      image: '/images/about_us/Muhammad Ahmed.jpg',
      description: 'Leading the company with over 15 years of experience in meat export industry.'
    },
    {
      name: 'Fatima Khan',
      position: 'Quality Control Manager',
      image: '/images/about_us/Fatima Khan.jpg',
      description: 'Ensuring the highest quality standards and halal certification compliance.'
    },
    {
      name: 'Ali Hassan',
      position: 'Export Operations Director',
      image: '/images/about_us/Ali Hassan.jpg',
      description: 'Managing international logistics and customer relationships across global markets.'
    }
  ];

  return (
    <div>
      <SEOHead
        title="About Us - Family-Owned Halal Beef Exporter | Pak Meat Traders"
        description="Learn about Pak Meat Traders - a family-owned business established in 2020, committed to delivering premium quality fresh halal beef to international markets. Our story, values, and team."
        keywords="about pak meat traders, family owned business, halal beef exporter pakistan, meat export company, halal meat supplier, pakistan beef export history, quality halal meat"
        canonical="https://pakmeattraders.com/about-us"
        ogImage="/logo/Pak-meat-traders-Logo-fav.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Pak Meat Traders Pvt",
            "foundingDate": "2020",
            "description": "Family-owned business committed to delivering premium quality fresh halal beef to international markets",
            "founder": {
              "@type": "Person",
              "name": "Muhammad Ahmed"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Muhammad Ahmed",
                "jobTitle": "Chief Executive Officer"
              },
              {
                "@type": "Person",
                "name": "Fatima Khan",
                "jobTitle": "Quality Control Manager"
              },
              {
                "@type": "Person",
                "name": "Ali Hassan",
                "jobTitle": "Export Operations Director"
              }
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
            <h1 className="text-5xl font-bold mb-6">About Pak Meat Traders</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A family-owned business committed to delivering premium quality fresh halal beef to international markets since 2020.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Established in 2020, Pak Meat Traders Pvt began as a family initiative to bring
                  premium quality halal beef from Pakistan to international markets. Our founders
                  recognized the growing demand for authentic, certified halal meat products globally.
                </p>
                <p>
                  Starting with a small facility in Lahore, we have grown into a trusted name in
                  the halal meat export industry. Our commitment to traditional halal practices
                  combined with modern quality standards has earned us recognition in key markets
                  including Saudi Arabia, UAE, and Kuwait.
                </p>
                <p>
                  Today, we continue to honor our family values while embracing innovation and
                  technology to serve our customers better. Every piece of meat that leaves our
                  facility carries with it our promise of quality, authenticity, and trust.
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
                src="/images/about_us/Our Story.jpg"
                alt="Pak Meat Traders Facility - Our Story Since 2020"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind our success, committed to delivering excellence in every aspect of our business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position} at Pak Meat Traders Halal Beef Export Company`}
                  title={`${member.name} - ${member.position} - Pak Meat Traders Leadership Team`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our guiding principles that drive us forward and shape our commitment to excellence in halal beef export.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Our Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/about_us/Our Mission.jpg"
                  alt="Our Mission - Pak Meat Traders Commitment to Premium Halal Beef Quality Export Pakistan"
                  title="Pak Meat Traders Mission - Quality Halal Beef Export to International Markets"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide the highest quality fresh halal beef to international markets while
                    maintaining traditional Islamic values and modern quality standards. We strive
                    to build lasting relationships with our customers through trust, reliability,
                    and exceptional service.
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={FiAward} className="h-6 w-6" />
                    </div>
                    <span className="text-primary font-semibold">Quality & Trust</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Our Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/about_us/Our Vision.jpg"
                  alt="Our Vision - Pak Meat Traders Future Goals Global Halal Beef Export Leadership Pakistan"
                  title="Pak Meat Traders Vision - Leading Halal Beef Exporter Serving International Markets"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </motion.div>

              <motion.div
                className="lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To become the leading halal beef exporter from Pakistan, recognized globally
                    for our commitment to quality, authenticity, and customer satisfaction. We
                    envision expanding our reach to serve more international markets while
                    maintaining our family values and ethical practices.
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={FiGlobe} className="h-6 w-6" />
                    </div>
                    <span className="text-primary font-semibold">Global Leadership</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;