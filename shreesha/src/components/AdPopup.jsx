import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingCart, FiStar, FiGift, FiExternalLink } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import SmallNightLamp from "../assets/images/Products/Lamp/Small-Lamp.png";
import SolarSilverPanchpakaliSamai from "../assets/images/Products/Samai/ps.jpeg";
import SolarSilverAshtavinayakGanpatiDiya from "../assets/images/Products/Samai/Ashtavinayak.jpg";

const AdPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showMainAd, setShowMainAd] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [fireworkParticles, setFireworkParticles] = useState([]);
  const navigate = useNavigate();

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

  // Generate firework particles with useCallback to prevent recreation on every render
  const generateFireworks = useCallback(() => {
    const particles = [];
    const colors = ['#ff6b35', '#f7931e', '#ffd700', '#ff1744', '#e91e63', '#9c27b0', '#673ab7'];
    
    for (let i = 0; i < 25; i++) {
      particles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      });
    }
    setFireworkParticles(particles);
  }, []);

  // Handle redirect to ecommerce page
  const handleRedirect = useCallback(() => {
    navigate('/solar-ecommerce');
  }, [navigate]);

  // Main timer logic
  useEffect(() => {
    let timers = [];

    if (isFirstLoad) {
      // First load spectacular entrance
      timers.push(setTimeout(() => {
        setShowFireworks(true);
        generateFireworks();
      }, 1000));

      timers.push(setTimeout(() => {
        setShowMainAd(true);
      }, 2500));

      // Increased main ad display time by 5 seconds (from 8 to 13 seconds)
      timers.push(setTimeout(() => {
        setShowMainAd(false);
        setShowFireworks(false);
        setIsFirstLoad(false);
      }, 13000));

    } else {
      // Regular side popup every 15 seconds (reduced from 20)
      const showSidePopup = () => {
        setShowPopup(true);
        // Increased display time from 15 to 20 seconds
        setTimeout(() => setShowPopup(false), 20000);
      };

      const interval = setInterval(showSidePopup, 15000);
      timers.push(() => clearInterval(interval));
      
      // Show first side popup after 3 seconds (reduced from 5)
      timers.push(setTimeout(showSidePopup, 2000));
    }

    return () => {
      timers.forEach(timer => {
        if (typeof timer === 'function') timer();
        else clearTimeout(timer);
      });
    };
  }, [isFirstLoad, generateFireworks]);

  return (
    <>
      {/* Fireworks Effect - Optimized with will-change */}
      <AnimatePresence>
        {showFireworks && (
          <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden" style={{ willChange: 'transform, opacity' }}>
            {fireworkParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: particle.color,
                  left: particle.x,
                  top: particle.y,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0.8, 1.2, 0],
                  opacity: [0, 1, 0.8, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ 
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: 2,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Spectacular Ad - Now clickable anywhere to redirect */}
      <AnimatePresence>
        {showMainAd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[90] p-4 cursor-pointer"
            onClick={handleRedirect}
            style={{ willChange: 'opacity' }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-1 rounded-3xl shadow-2xl max-w-lg w-full mx-4"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="bg-white rounded-3xl p-6 relative overflow-hidden">
                {/* Click indicator */}
                <motion.div
                  className="absolute top-2 left-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Click anywhere to shop <FiExternalLink className="ml-1" />
                </motion.div>

                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-2 -right-2 text-yellow-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: 'transform' }}
                >
                  <FiStar size={24} />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-2 -left-2 text-orange-400"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: 'transform' }}
                >
                  <FiGift size={20} />
                </motion.div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMainAd(false);
                    setShowFireworks(false);
                    setIsFirstLoad(false);
                  }}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-300 z-10 bg-white rounded-full p-1 shadow-md"
                  aria-label="Close ad popup"
                >
                  <FiX size={20} />
                </button>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <motion.h2 
                    className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ willChange: 'transform' }}
                  >
                    🎉 FESTIVE SEASON! 🎉
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 font-semibold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ willChange: 'opacity' }}
                  >
                    ✨ MEGA 50% OFF SALE ✨
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-3 gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {adProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="text-center bg-gray-50 rounded-xl p-3 border-2 border-orange-200 hover:border-orange-400 transition-colors"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      style={{ willChange: 'transform' }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded-lg mx-auto mb-2"
                        loading="eager" // Load images eagerly for better performance
                      />
                      <h4 className="text-xs font-semibold text-gray-900 mb-1 line-clamp-2">
                        {product.name}
                      </h4>
                      <div className="space-y-1">
                        <s className="text-xs text-gray-500 line-through block">
                          ₹{product.price}
                        </s>
                        <span className="text-sm font-bold text-green-600 block">
                          ₹{getDiscountedPrice(product.price)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="text-center"
                  style={{ willChange: 'transform' }}
                >
                  <div className="bg-orange-50 rounded-2xl p-3 mb-4">
                    <p className="text-sm text-orange-800 font-medium">
                      🚀 Free shipping on orders above ₹2999
                    </p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(249, 115, 22, 0.7)",
                        "0 0 0 10px rgba(249, 115, 22, 0)",
                        "0 0 0 0 rgba(249, 115, 22, 0)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                    className="bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg flex items-center justify-center mx-auto hover:from-orange-600 hover:to-red-600 transition duration-300"
                    style={{ willChange: 'transform, box-shadow' }}
                    onClick={(e) => {
                      e.stopPropagation(); // Add this line
                      handleRedirect();
                    }}
                  >
                    <FiShoppingCart className="mr-2" size={20} />
                    GRAB NOW! 🎯
                  </motion.button>
                  <p className="text-xs text-gray-600 mt-2">⏰ Limited Time Offer!</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Side Popup - Optimized with reduced animations */}
      <AnimatePresence>
        {showPopup && !showMainAd && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed right-0 top-1/2 transform -translate-y-1/2 w-64 xs:w-72 sm:w-80 bg-gradient-to-br from-orange-50 to-red-50 rounded-l-2xl shadow-xl border-l-4 border-orange-400 z-50 p-3 sm:p-4 max-h-[80vh] overflow-y-auto"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div 
              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ willChange: 'transform' }}
            >
              <span className="text-xs text-white">🔥</span>
            </motion.div>
            
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300 z-10 bg-white rounded-full p-1 shadow-sm"
              aria-label="Close ad popup"
            >
              <FiX size={14} />
            </button>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 sm:mb-3 flex items-center">
                🔥 Hot Deals! 
                <motion.span 
                  className="ml-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  style={{ willChange: 'transform' }}
                >
                  ⚡
                </motion.span>
              </h3>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {adProducts.map((product, index) => (
                <Link to="/solar-ecommerce" key={product.id} className="block">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ 
                      y: -2, 
                      boxShadow: '0 8px 16px rgba(249, 115, 22, 0.2)',
                    }}
                    className="flex items-center space-x-2 sm:space-x-3 bg-white rounded-lg p-2 sm:p-3 border-2 border-transparent hover:border-orange-200 transition-all duration-300"
                    style={{ willChange: 'transform, opacity, box-shadow' }}
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 object-contain rounded-lg bg-gray-100 p-1"
                        loading="lazy" // Lazy load images for better performance
                      />
                      <motion.div 
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ willChange: 'transform' }}
                      >
                        🔥
                      </motion.div>
                    </div>
                    <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent text overflow issues */}
                      <h4 className="text-xs xs:text-sm font-semibold text-gray-900 truncate">{product.name}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        <s className="text-[10px] xs:text-xs text-gray-500 line-through">
                          ₹{product.price.toFixed(2)}
                        </s>
                        <motion.span 
                          className="text-[10px] bg-gradient-to-r from-green-500 to-green-600 text-white px-1 py-0.5 rounded font-semibold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                          style={{ willChange: 'transform' }}
                        >
                          50% OFF! 🎉
                        </motion.span>
                      </div>
                      <span className="text-xs xs:text-sm font-bold text-green-600">
                        ₹{getDiscountedPrice(product.price)}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link to="/solar-ecommerce">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-3 sm:mt-4 w-full bg-gradient-to-r from-green-600 to-green-600 text-white px-3 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition duration-300 flex items-center justify-center text-xs sm:text-sm shadow-lg"
                style={{ willChange: 'transform, opacity, box-shadow' }}
              >
                <FiShoppingCart className="mr-1" size={14} /> 
                Shop Now! 🛒
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ willChange: 'transform' }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdPopup;