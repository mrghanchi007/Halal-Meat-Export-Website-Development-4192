import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HalalCertification from '../components/HalalCertification';
import SEOHead from '../components/SEOHead';

const { FiAward, FiShield, FiFileText, FiCheck, FiGlobe, FiTruck } = FiIcons;

const Certifications = () => {
  const mainCertifications = [
    {
      icon: FiAward,
      title: 'Pakistan Halal Authority (PHA)',
      description: 'Official halal certification ensuring complete Islamic compliance in our slaughter and processing methods.',
      details: [
        'Certified Islamic slaughtermen',
        'Halal slaughter process verification',
        'Regular inspection and compliance monitoring',
        'Authentic halal documentation for export'
      ],
      image: '/images/certifications/Pakistan Halal Authority (PHA).jpg'
    },
    {
      icon: FiShield,
      title: 'Veterinary Health Certificate',
      description: 'Government veterinary approval confirming the health and safety of our meat products for human consumption.',
      details: [
        'Pre-slaughter animal health inspection',
        'Post-slaughter meat quality verification',
        'Disease-free certification',
        'Government veterinary approval'
      ],
      image: '/images/certifications/Veterinary Health Certificate.jpg'
    },
    {
      icon: FiTruck,
      title: 'Export License',
      description: 'Official authorization for international meat export operations from Pakistan to global markets.',
      details: [
        'Government export authorization',
        'International trade compliance',
        'Customs documentation approval',
        'Multi-country export permissions'
      ],
      image: '/images/certifications/Export License.jpg'
    }
  ];

  const qualityStandards = [
    {
      icon: FiCheck,
      title: 'HACCP Compliance',
      description: 'Hazard Analysis Critical Control Points system implementation for food safety.'
    },
    {
      icon: FiGlobe,
      title: 'International Standards',
      description: 'Adherence to global meat processing and export quality standards.'
    },
    {
      icon: FiFileText,
      title: 'Documentation',
      description: 'Complete documentation and traceability for all our products.'
    },
    {
      icon: FiShield,
      title: 'Quality Assurance',
      description: 'Continuous quality monitoring and improvement processes.'
    }
  ];

  const certificationProcess = [
    {
      step: '1',
      title: 'Application Submission',
      description: 'Submit application with required documentation to certification authorities'
    },
    {
      step: '2',
      title: 'Facility Inspection',
      description: 'On-site inspection of our facilities by certification officers'
    },
    {
      step: '3',
      title: 'Process Verification',
      description: 'Verification of our halal slaughter and processing procedures'
    },
    {
      step: '4',
      title: 'Certificate Issuance',
      description: 'Issuance of official certificates upon successful compliance'
    },
    {
      step: '5',
      title: 'Regular Monitoring',
      description: 'Ongoing monitoring and periodic renewal of certifications'
    }
  ];

  return (
    <div>
      <SEOHead 
        title="Certifications - Halal & Quality Certificates | Pak Meat Traders"
        description="View our comprehensive certifications: Pakistan Halal Authority (PHA), Veterinary Health Certificate, Export License, HACCP compliance. Ensuring highest quality halal beef export standards."
        keywords="halal certification, pakistan halal authority, veterinary health certificate, export license, HACCP compliance, halal beef certification, meat export certification, quality assurance"
        canonical="https://pakmeattraders.com/certifications"
        ogImage="/logo/Pak-meat-traders-Logo-fav.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Certifications",
          "description": "Comprehensive certifications ensuring highest standards of quality, safety, and halal compliance",
          "mainEntity": {
            "@type": "Organization",
            "name": "Pak Meat Traders Pvt",
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Pakistan Halal Authority (PHA) Certification",
                "credentialCategory": "Halal Certification",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Pakistan Halal Authority"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Veterinary Health Certificate",
                "credentialCategory": "Health & Safety",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Government of Pakistan"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Export License",
                "credentialCategory": "Trade License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Government of Pakistan"
                }
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
            <h1 className="text-5xl font-bold mb-6">Certifications</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our comprehensive certifications ensure the highest standards of quality, safety, and halal compliance for international export.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Halal Certification Section */}
      <HalalCertification />

      {/* Main Certifications */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Certifications</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We hold all necessary certifications and approvals required for halal meat processing and international export operations.
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainCertifications.map((cert, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center mr-6">
                      <SafeIcon icon={cert.icon} className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                    </div>
                  </div>
                  <p className="text-blue-100 text-lg mb-6">{cert.description}</p>
                  <ul className="space-y-3">
                    {cert.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-blue-100">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <img
                      src={cert.image}
                      alt={`${cert.title} - Pak Meat Traders Official Halal Beef Export Certification Pakistan`}
                      title={`${cert.title} - Government Approved Halal Meat Export Certificate`}
                      className="rounded-xl shadow-lg w-full h-80 object-cover blur-sm"
                    />
                    <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      PLACEHOLDER
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond certifications, we adhere to international quality standards and best practices in meat processing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={standard.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{standard.title}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certification Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certification process involves rigorous inspection and verification to ensure complete compliance with all requirements.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

            <div className="space-y-12 lg:space-y-16">
              {certificationProcess.map((process, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col lg:flex-row items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content Left */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-3 lg:pl-12'}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>

                  {/* Step Number */}
                  <div className="lg:w-2/12 flex justify-center my-8 lg:my-0 lg:order-2">
                    <div className="bg-primary border-4 border-primary text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black shadow-xl relative z-10">
                      {process.step}
                    </div>
                  </div>

                  {/* Empty Space Right */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:order-3' : ''}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Gallery */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Certificate Gallery</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              View our official certificates and documentation that validate our commitment to quality and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Halal Certificate', image: '/images/certifications/Halal Certificate.jpg' },
              { title: 'Export License', image: '/images/certifications/Export License.jpg' },
              { title: 'Health Certificate', image: '/images/certifications/Health Certificate.jpg' },
              { title: 'Quality Certification', image: '/images/certifications/Quality Certification.jpg' },
              { title: 'Facility License', image: '/images/certifications/Facility License.jpg' },
              { title: 'Trade License', image: '/images/certifications/Trade License.jpg' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <img
                    src={cert.image}
                    alt={`${cert.title} - Pak Meat Traders Official Government Approved Halal Beef Export Certificate Pakistan`}
                    title={`${cert.title} - Authentic Halal Meat Export Documentation from Pakistan`}
                    className="w-full h-64 object-cover blur-sm"
                  />
                  <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    PLACEHOLDER
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{cert.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Trust & Compliance</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12">
              Our certifications are not just documents - they represent our unwavering commitment to 
              quality, safety, and Islamic values. We maintain these certifications through continuous 
              compliance and regular audits, ensuring that every product we export meets the highest standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: '100%',
                  label: 'Halal Compliance',
                  description: 'All products certified halal'
                },
                {
                  number: '24/7',
                  label: 'Quality Monitoring',
                  description: 'Continuous quality oversight'
                },
                {
                  number: '5+',
                  label: 'Years Experience',
                  description: 'Proven track record since 2020'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-blue-100">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;