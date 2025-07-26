import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: '/images/our-products/Premium Beef Cuts.jpg',
      title: 'Premium Beef Cuts',
      category: 'Product'
    },
    {
      src: '/images/our-products/Vacuum Sealed Packaging.jpg',
      title: 'Vacuum Sealed Packaging',
      category: 'Packaging'
    },
    {
      src: '/images/our-products/Quality Inspection.jpg',
      title: 'Quality Inspection',
      category: 'Process'
    },
    {
      src: '/images/our-products/Fresh Beef Selection.jpg',
      title: 'Fresh Beef Selection',
      category: 'Product'
    },
    {
      src: '/images/our-products/Export Preparation.jpg',
      title: 'Export Preparation',
      category: 'Process'
    },
    {
      src: '/images/our-products/Cold Storage Facility.jpg',
      title: 'Cold Storage Facility',
      category: 'Facility'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our premium quality halal beef products and the care we take throughout the entire production process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-64"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={`${image.title} - Pak Meat Traders Premium Halal Beef ${image.category} Pakistan Export Quality`} 
                title={`${image.title} - Professional Halal Beef ${image.category} by Pak Meat Traders`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs text-blue-200 font-medium bg-primary/80 rounded-full px-3 py-1 inline-block mb-2 w-fit">
                  {image.category}
                </span>
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 z-10"
              onClick={closeLightbox}
            >
              <SafeIcon icon={FiX} className="h-6 w-6" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
              onClick={prevImage}
            >
              <SafeIcon icon={FiIcons.FiChevronLeft} className="h-6 w-6" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
              onClick={nextImage}
            >
              <SafeIcon icon={FiIcons.FiChevronRight} className="h-6 w-6" />
            </button>
            
            <div className="relative max-w-4xl max-h-[80vh]">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={`${galleryImages[selectedImage].title} - Pak Meat Traders Premium Halal Beef ${galleryImages[selectedImage].category} Pakistan Export Quality`}
                title={`${galleryImages[selectedImage].title} - Professional Halal Beef ${galleryImages[selectedImage].category} by Pak Meat Traders`}
                className="max-h-[80vh] max-w-full object-contain" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h3 className="text-lg font-medium">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm text-gray-300">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;