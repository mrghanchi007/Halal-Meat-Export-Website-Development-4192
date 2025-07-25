import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Set initial scroll state
    setScrolled(window.scrollY > 20);

    // Handle scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Products', path: '/our-products' },
    { name: 'Export', path: '/export-process' },
    { name: 'Facility', path: '/slaughter-facility' },
    { name: 'Farms', path: '/our-farms' },
    { name: 'Certificates', path: '/certifications' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact-us' },
  ];

  // Determine navbar background style
  const navbarStyle = scrolled 
    ? 'bg-white shadow-lg py-2' 
    : isHomePage 
      ? 'bg-black bg-opacity-40 py-3' 
      : 'bg-primary py-3';

  // Determine text color based on navbar style
  const getTextColor = (isActive) => {
    if (scrolled) {
      return isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary';
    } else {
      return isActive ? 'text-white border-b-2 border-white' : 'text-white hover:text-gray-200';
    }
  };

  // Get menu icon color based on navbar style
  const getMenuIconColor = () => {
    if (scrolled) {
      return 'text-primary';
    } else {
      return 'text-white';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarStyle}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={scrolled 
                ? "https://www.account4web.com/wp-content/uploads/2025/07/Pak-meat-traders-Logox350.png" 
                : "https://www.account4web.com/wp-content/uploads/2025/07/Pak-meat-traders-Logox350-gray.png"
              }
              alt="Pak Meat Traders Logo"
              className="h-13 w-auto"
              style={{ height: '3.25rem' }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors duration-200 px-2 py-1 ${
                  location.pathname === item.path
                    ? getTextColor(true)
                    : getTextColor(false)
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="bg-white text-primary px-4 py-1 text-sm rounded-lg hover:bg-gray-100 transition-colors duration-200 ml-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <SafeIcon
              icon={isOpen ? FiX : FiMenu}
              className={`h-6 w-6 ${getMenuIconColor()}`}
            />
          </button>
        </div>

        {/* Mobile Menu - Always render on mobile screens */}
        <div
          className={`lg:hidden mt-3 bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh] transition-all duration-200 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
          }`}
        >
          <div className="py-2 grid grid-cols-2 gap-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 text-xs font-medium text-center transition-colors duration-200 rounded-md ${
                  location.pathname === item.path
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="col-span-2 mt-2">
              <Link
                to="/contact-us"
                className="block w-full text-center bg-primary text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;