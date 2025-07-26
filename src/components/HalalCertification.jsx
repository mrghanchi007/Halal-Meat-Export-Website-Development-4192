import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCheck} = FiIcons;

const HalalCertification = () => {
  const certificationSteps = [
    {
      title: 'Islamic Prayer',
      description: 'The name of Allah is invoked (Bismillah) before the slaughter by a trained Muslim',
      icon: '/images/certifications/Islamic Prayer Before Slaughter.jpg'
    },
    {
      title: 'Manual Slaughtering',
      description: 'The animal is slaughtered by hand with a sharp knife, cutting the major vessels',
      icon: '/images/certifications/Manual Slaughtering.jpg'
    },
    {
      title: 'Blood Drainage',
      description: 'Complete drainage of blood from the animal as required by Islamic law',
      icon: '/images/certifications/Blood Drainage.jpg'
    },
    {
      title: 'Certification',
      description: 'Official certification by Pakistan Halal Authority confirming compliance',
      icon: '/images/certifications/Halal Certification.jpg'
    }
  ];

  const halalStandards = [
    'Animals must be alive and healthy at the time of slaughter',
    'The slaughter must be performed by a Muslim who invokes Allah\'s name',
    'The knife must be razor-sharp to ensure minimal pain to the animal',
    'The cut must sever the windpipe, food tract, and both jugular veins',
    'Blood must be completely drained from the carcass',
    'Processing must be separate from non-halal meat',
    'No stunning or other methods that might kill the animal before slaughter'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Halal Certification Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We strictly adhere to Islamic guidelines for halal meat processing, ensuring our products meet the highest standards of religious compliance.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certificationSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-primary font-medium text-sm">Step {index + 1}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Halal Standards */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Halal Standards We Follow</h3>
            <div className="space-y-4">
              {halalStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.4, delay: index * 0.1}}
                  viewport={{once: true}}
                >
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{standard}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificate Image */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="flex justify-center"
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/images/certifications/Halal Certification.jpg"
                      alt="Halal Certificate - Pakistan Halal Authority"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Pakistan Halal Authority</h4>
                      <p className="text-sm text-gray-500">Official Certification</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Verified
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Certificate Number:</span>
                    <span className="text-sm font-medium text-gray-900">PHA-2025-0412</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Issue Date:</span>
                    <span className="text-sm font-medium text-gray-900">January 15, 2025</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Valid Until:</span>
                    <span className="text-sm font-medium text-gray-900">January 15, 2026</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className="text-sm font-medium text-green-600">Active</span>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-2">Authorized By</div>
                      <img
                        src="/images/certifications/Halal Certification.jpg"
                        alt="Official Signature - Pakistan Halal Authority"
                        className="h-10 mx-auto mb-2"
                      />
                      <div className="text-sm font-medium text-gray-900">Dr. Ahmed Khan</div>
                      <div className="text-xs text-gray-500">Chief Certification Officer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HalalCertification;