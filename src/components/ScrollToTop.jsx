import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down (desktop) or always on mobile
  useEffect(() => {
    const toggleVisibility = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setIsVisible(true); // Always visible on mobile
      } else {
        // Show on desktop only after scrolling 300px
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Initial check
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  // Scroll to top with animation (stop 1px before top)
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{
            opacity: 0,
            y: 100,
            x: -20
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0
          }}
          exit={{
            opacity: 0,
            y: 100,
            x: -20
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[9999] bg-primary hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;