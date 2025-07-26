import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ExportProcess from './pages/ExportProcess';
import SlaughterFacility from './pages/SlaughterFacility';
import Farms from './pages/Farms';
import Certifications from './pages/Certifications';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTopButton from './components/ScrollToTop';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <motion.div
        className="min-h-screen bg-white font-poppins"
        initial={{
          y: typeof window !== 'undefined' && window.innerWidth <= 768 ? '100vh' : 0,
          opacity: typeof window !== 'undefined' && window.innerWidth <= 768 ? 0.3 : 0
        }}
        animate={{
          y: typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 0,
          opacity: 1
        }}
        transition={{
          duration: typeof window !== 'undefined' && window.innerWidth <= 768 ? 1.2 : 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <ScrollToTop />
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-products" element={<Products />} />
            <Route path="/export-process" element={<ExportProcess />} />
            <Route path="/slaughter-facility" element={<SlaughterFacility />} />
            <Route path="/our-farms" element={<Farms />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
      
      {/* Fixed Floating Buttons - Outside animated container */}
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;