import React from 'react';
import {motion} from 'framer-motion';

const PartnerLogos = () => {
  const partnerImages = [
    {
      name: "Saudi Food Authority",
      logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=80&fit=crop"
    },
    {
      name: "Dubai Quality Group",
      logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=200&h=80&fit=crop"
    },
    {
      name: "Kuwait Import Alliance",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=80&fit=crop"
    },
    {
      name: "Halal Certification Body",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=80&fit=crop"
    },
    {
      name: "International Export Association",
      logo: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=200&h=80&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, staggerChildren: 0.2}}
          viewport={{once: true}}
        >
          {partnerImages.map((partner, index) => (
            <motion.div 
              key={index} 
              className="flex justify-center"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              viewport={{once: true}}
            >
              <div className="h-20 w-full bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;