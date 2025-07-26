import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiExternalLink } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src="/logo/Pak meat traders Logo-350-gray.svg"
              alt="Pak Meat Traders - Premium Halal Beef Exporter Pakistan"
              title="Pak Meat Traders - Trusted Halal Meat Export Company Since 2020"
              className="h-22 w-auto mb-4"
              style={{ height: '5.5rem' }}
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Committed to Quality. Trusted Worldwide. Premium quality fresh halal beef exporter from Pakistan, serving international markets with excellence since 2020.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiMail} className="h-4 w-4 mr-2" />
                <span>info@pakmeattraders.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/our-products" className="text-gray-300 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/export-process" className="text-gray-300 hover:text-white transition-colors">Export Process</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiPhone} className="h-4 w-4 mr-2" />
                <span className="text-gray-300">+92-3477722225</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="h-4 w-4 mr-2" />
                <span className="text-gray-300">info@pakmeattraders.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pak Meat Traders Pvt | Powered by{' '}
            <a
              href="https://www.account4web.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-400 transition-colors inline-flex items-center"
            >
              Account4Web Inc
              <SafeIcon icon={FiExternalLink} className="h-3 w-3 ml-1" />
            </a>
          </p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Premium Halal Beef Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;