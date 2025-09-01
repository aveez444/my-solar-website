import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SmallNightLamp from "../assets/images/Products/Lamp/Small-Lamp.png";
import SolarSilverPanchpakaliSamai from "../assets/images/Products/Samai/ps.jpeg";
import SolarSilverAshtavinayakGanpatiDiya from "../assets/images/Products/Samai/Ashtavinayak.jpg";

const AdPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Timer logic for showing and hiding the pop-up
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 30000); // 15s (delay) + 50s (display) = 65s

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const adProducts = [
    {
      id: 1,
      name: 'Small Night Lamp',
      price: 1998,
      image: SmallNightLamp,
    },
    {
      id: 4,
      name: 'Solar Silver Panchpakali Samai',
      price: 2498,
      image: SolarSilverPanchpakaliSamai,
    },
    {
      id: 6,
      name: 'Solar Silver Ashtavinayak Ganpati Diya',
      price: 2498,
      image: SolarSilverAshtavinayakGanpatiDiya,
    },
  ];

  const getDiscountedPrice = (price) => (price * 0.5).toFixed(2);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed right-0 top-1/2 transform -translate-y-1/2 w-64 xs:w-72 sm:w-80 bg-white rounded-l-2xl shadow-xl border-l border-gray-200 z-60 p-3 sm:p-4 max-h-[80vh] overflow-y-auto"
          style={{
            position: 'fixed' , // Explicitly enforce fixed positioning
            top: '50%', // Fallback to percentage
            transform: 'translateY(-50%)', // Ensure vertical centering
            right: '0',
            left: 'auto', // Prevent left-side interference
            minHeight: '0', // Prevent height issues
          }}
        >
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
            aria-label="Close ad popup"
          >
            <FiX size={16} />
          </button>
          <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-3">Exclusive Deals!</h3>
          <div className="space-y-3 sm:space-y-4">
            {adProducts.map((product) => (
              <Link to="/solar-ecommerce" key={product.id} className="block">
                <motion.div
                  whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  className="flex items-center space-x-2 sm:space-x-3 bg-gray-50 rounded-lg p-2 sm:p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 object-contain rounded-lg bg-gray-100 p-1"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs xs:text-sm font-semibold text-gray-900 truncate">{product.name}</h4>
                    <div className="flex items-center space-x-1 mt-1">
                      <s className="text-[10px] xs:text-xs text-gray-500 line-through">
                        ₹{product.price.toFixed(2)}
                      </s>
                      <span className="text-[10px] bg-green-100 text-green-600 px-1 py-0.5 rounded font-semibold">
                        50% off
                      </span>
                    </div>
                    <span className="text-xs xs:text-sm font-bold text-green-600">
                      ₹{getDiscountedPrice(product.price)}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          <Link to="/solarecommerce">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 sm:mt-4 w-full bg-green-500 text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center text-xs sm:text-sm"
            >
              <FiShoppingCart className="mr-1" size={14} /> Shop Now
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdPopup;