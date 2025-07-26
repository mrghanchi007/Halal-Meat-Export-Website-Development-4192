import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VideoHero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const videoRef = useRef(null);
  
  const videos = [
    '/video/vdo1.mp4',
    '/video/vdo2.mp4',
    '/video/vdo3.mp4'
  ];

  useEffect(() => {
    // Show image for 3 seconds, then start videos
    const imageTimer = setTimeout(() => {
      setShowImage(false);
    }, 3000);

    return () => clearTimeout(imageTimer);
  }, []);

  useEffect(() => {
    if (!showImage && videoRef.current) {
      const video = videoRef.current;
      
      const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      };

      video.addEventListener('ended', handleVideoEnd);
      video.play().catch(console.error);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentVideo, showImage, videos.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {showImage ? (
          // Halal Beef Image with Zoom Effect
          <div className="w-full h-full relative overflow-hidden">
            <img
              src="/video/halal-beef.jpg"
              alt="Premium Fresh Halal Beef - Pak Meat Traders Pakistan Export Quality Vacuum Sealed"
              title="Pak Meat Traders - Premium Fresh Halal Beef Export from Pakistan"
              className="w-full h-full object-cover animate-pulse scale-110 transition-transform duration-3000 ease-in-out"
              style={{
                animation: 'zoomEffect 3s ease-in-out infinite alternate'
              }}
            />
          </div>
        ) : (
          // Video Background
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            key={currentVideo}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Custom CSS for Zoom Animation */}
      <style jsx>{`
        @keyframes zoomEffect {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Premium Quality
        </motion.h1>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Fresh Halal Beef
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
            className="bg-primary text-white px-8 py-4 rounded-md text-md font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-85 inline-block"
          >
            Request a Quotation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;