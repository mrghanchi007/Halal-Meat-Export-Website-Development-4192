import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);





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

  // All pages will have white navbar like home page with light gray border
  const navbarStyle = 'bg-white shadow-md py-3 border-b border-gray-200';

  // Text color for all pages (same as home page)
  const getTextColor = (isActive) => {
    return isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary';
  };

  // Menu icon color for all pages (same as home page)
  const getMenuIconColor = () => {
    return 'text-gray-700';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${navbarStyle}`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative w-full h-16 px-2">
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo/Pak meat traders Logo-350.svg"
              alt="Pak Meat Traders - Premium Halal Beef Exporter Pakistan Logo"
              title="Pak Meat Traders - Fresh Halal Beef Export Company"
              className="h-16 sm:h-20 md:h-22 w-auto"
            />
          </Link>

          {/* Desktop Menu - Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors duration-200 px-2 py-1 ${location.pathname === item.path
                  ? getTextColor(true)
                  : getTextColor(false)
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Right Side */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${getMenuIconColor()} hover:bg-white hover:bg-opacity-10 transition-colors duration-200`}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-base ${location.pathname === item.path
                    ? 'text-primary font-medium'
                    : 'text-gray-700'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;