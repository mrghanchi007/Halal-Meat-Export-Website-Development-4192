import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="w-full h-full object-cover scale-150"
          src="https://www.youtube.com/embed/aWqkrdSIyjY?autoplay=1&mute=1&loop=1&playlist=aWqkrdSIyjY&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Pak Meat Traders Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium Quality Fresh Halal Beef
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Delivered Worldwide
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Link
            to="/contact-us"
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Request a Quotation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;