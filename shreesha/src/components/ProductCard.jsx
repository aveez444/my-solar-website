import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProductCard = ({ product, index }) => {
 
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      
     // Use the index prop for staggered delays
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.shortDesc}</p>
        
        <div className="flex mb-3">
          {renderRating(product.rating)}
          <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
        </div>
        
        <div className="border-t pt-3">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-1">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;