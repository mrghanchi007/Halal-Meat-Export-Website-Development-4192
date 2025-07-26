// Cloudinary CDN Configuration
// Note: Only Cloud Name is needed for frontend image delivery
// API Key: 868735454366429 (for backend operations only)
// API Secret: AxqFn6XEZE5d9u5RfcQG9UhVKPw (NEVER expose in frontend)
const CLOUDINARY_CLOUD_NAME = 'your-cloud-name'; // Replace with your actual cloud name from dashboard
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

/**
 * Generate Cloudinary URL for optimized image delivery
 * @param {string} imagePath - Original image path (e.g., '/images/home/Fresh Halal Beef.jpg')
 * @param {object} options - Cloudinary transformation options
 * @returns {string} - Optimized Cloudinary URL
 */
export const getCloudinaryUrl = (imagePath, options = {}) => {
  // Remove leading slash and 'images/' from path
  const cleanPath = imagePath.replace(/^\/images\//, '').replace(/^images\//, '');
  
  // Default optimization options
  const defaultOptions = {
    f_auto: true,    // Auto format (WebP, AVIF when supported)
    q_auto: true,    // Auto quality optimization
    c_fill: true,    // Fill mode for responsive images
    ...options
  };
  
  // Build transformation string
  const transformations = Object.entries(defaultOptions)
    .filter(([key, value]) => value !== false && value !== null && value !== undefined)
    .map(([key, value]) => {
      if (value === true) return key.replace('_', '_');
      return `${key.replace('_', '_')}_${value}`;
    })
    .join(',');
  
  // Return full Cloudinary URL
  return `${CLOUDINARY_BASE_URL}/${transformations ? transformations + '/' : ''}pak-meat-traders/${cleanPath}`;
};

/**
 * Generate responsive Cloudinary URLs for different screen sizes
 * @param {string} imagePath - Original image path
 * @param {object} sizes - Object with breakpoint sizes
 * @returns {object} - Object with responsive URLs
 */
export const getResponsiveCloudinaryUrls = (imagePath, sizes = {}) => {
  const defaultSizes = {
    mobile: { w_480: true, h_320: true },
    tablet: { w_768: true, h_512: true },
    desktop: { w_1200: true, h_800: true },
    ...sizes
  };
  
  const responsiveUrls = {};
  
  Object.entries(defaultSizes).forEach(([breakpoint, options]) => {
    responsiveUrls[breakpoint] = getCloudinaryUrl(imagePath, options);
  });
  
  return responsiveUrls;
};

/**
 * Fallback to local images if Cloudinary fails
 * @param {string} imagePath - Original image path
 * @param {object} options - Cloudinary options
 * @returns {string} - Cloudinary URL with fallback
 */
export const getOptimizedImageUrl = (imagePath, options = {}) => {
  try {
    // Return Cloudinary URL
    return getCloudinaryUrl(imagePath, options);
  } catch (error) {
    console.warn('Cloudinary URL generation failed, using local image:', error);
    // Fallback to local image
    return imagePath;
  }
};

// Export cloud name for other uses
export { CLOUDINARY_CLOUD_NAME };
