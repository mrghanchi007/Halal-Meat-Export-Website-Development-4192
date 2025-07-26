import React, { useState } from 'react';
import { getOptimizedImageUrl } from '../utils/cloudinary';

/**
 * Optimized Image Component with Cloudinary CDN support
 * Automatically falls back to local images if Cloudinary fails
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  title,
  className = '',
  cloudinaryOptions = {},
  loading = 'lazy',
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get optimized URL (Cloudinary or fallback to local)
  const optimizedSrc = imageError ? src : getOptimizedImageUrl(src, cloudinaryOptions);

  const handleImageError = () => {
    console.warn(`Failed to load optimized image: ${optimizedSrc}, falling back to: ${src}`);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      
      {/* Optimized Image */}
      <img
        src={optimizedSrc}
        alt={alt}
        title={title}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        onError={handleImageError}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
