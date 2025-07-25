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
      <div className="min-h-screen bg-white font-poppins">
        <ScrollToTop />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;