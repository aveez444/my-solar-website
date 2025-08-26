import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiCheck, FiArrowRight, FiX, FiArrowLeft, FiMinus, FiPlus, FiStar, FiHeart } from 'react-icons/fi';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Product images
import SmallNightLamp from "../assets/images/Products/Lamp/Small-Lamp.png";
import BigNightLamp from "../assets/images/Products/Lamp/Big-Lamp.png";
import SolarSilverDevdasSamai from "../assets/images/Products/Samai/ds.jpeg";
import SolarSilverPanchpakaliSamai from "../assets/images/Products/Samai/ps.jpeg";
import SolarSilverAshtavinayakGanpatiDiya from "../assets/images/Products/Samai/Ashtavinayak.jpg";
import SolarBrassSamai from "../assets/images/Products/Samai/SilverSamai.jpg";
import SolarCarDiya1 from "../assets/images/Products/Samai/CarDiya3.jpeg";


// Banner images
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner4 from "../assets/banner4.jpg";

// Product data
const solarProducts = [
  {
    id: 1,
    name: 'Small Night Lamp',
    url: 'solarnightlamp',
    price: 499,
    description: '3W solar-powered LED lamp with 6-hour backup, automatic dusk-to-dawn operation. Ideal for accent lighting in gardens, pathways, and patios. Energy-efficient and eco-friendly.',
    images: [SmallNightLamp, BigNightLamp],
    category: 'lamp',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Big Night Lamp',
    url: 'biglamp',
    price: 899,
    description: '5W high-lumen solar lamp with 12-hour backup, IP65 waterproof for outdoor use. Provides brilliant illumination for larger areas like driveways, backyards, and security lighting.',
    images: [BigNightLamp, SmallNightLamp],
    category: 'lamp',
    rating: 4.7,
    reviews: 96
  },
  {
    id: 3,
    name: 'Solar Silver Devdas Samai',
    url: 'silversamai',
    price: 1299,
    description: 'Traditional Devdas-style samai crafted with intricate silver detailing. Features 20 bright LED lights and an 8-hour runtime. Perfect for adding a divine and elegant glow to your pooja room or festive occasions.',
    images: [SolarSilverDevdasSamai, SolarSilverPanchpakaliSamai],
    category: 'samai',
    rating: 4.9,
    reviews: 204
  },
  {
    id: 4,
    name: 'Solar Silver Panchpakali Samai',
    url: 'panchpakalisamai',
    price: 1499,
    description: 'Elegant Panchpakali (five-flame) design with a stunning silver finish. This samai is perfect for traditional ceremonies, daily puja, and special gatherings, offering a warm and inviting ambiance.',
    images: [SolarSilverPanchpakaliSamai, SolarBrassSamai],
    category: 'samai',
    rating: 4.8,
    reviews: 167
  },
  {
    id: 5,
    name: 'Solar Brass Samai',
    url: 'brass',
    price: 1799,
    description: 'Premium brass construction with an antique finish, embodying timeless craftsmanship. Equipped with 30 bright LEDs for extended illumination, it adds a touch of classic luxury to any space.',
    images: [SolarBrassSamai, SolarSilverDevdasSamai],
    category: 'samai',
    rating: 4.9,
    reviews: 189
  },
  {
    id: 6,
    name: 'Solar Silver Ashtavinayak Ganpati Diya',
    url: 'ganpatidiya',
    price: 799,
    description: 'An auspicious Ashtavinayak Ganpati design, meticulously crafted in silver. This diya radiates warm white LEDs, bringing blessings, peace, and a radiant light to your home.',
    images: [SolarSilverAshtavinayakGanpatiDiya, SolarBrassSamai],
    category: 'diya',
    rating: 4.6,
    reviews: 142
  },
  {
    id: 7,
    name: 'Solar Car Diya',
    url: 'solarcardiya',
    price: 799,
    description: 'A unique and innovative car-shaped diya with solar-powered illumination. Perfect for vehicle worship, travel protection, and adding divine light to your journeys.',
    images: [SolarCarDiya1],
    category: 'diya',
    rating: 4.6,
    reviews: 142
  },
];

// Categories with distinct colors and accents
const categories = [
  {
    id: 'lamp',
    name: 'Solar Lamps',
    color: 'from-blue-50 to-cyan-50',
    accent: 'bg-blue-500',
    image: SmallNightLamp
  },
  {
    id: 'samai',
    name: 'Traditional Samai',
    color: 'from-purple-50 to-indigo-50',
    accent: 'bg-purple-500',
    image: SolarSilverDevdasSamai
  },
  {
    id: 'diya',
    name: 'Divine Diyas',
    color: 'from-pink-50 to-rose-50',
    accent: 'bg-pink-500',
    image: SolarSilverAshtavinayakGanpatiDiya
  }
];

// Discount Strip Component
const DiscountStrip = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the discount strip after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-600 to-pink-600 text-white text-center py-2 z-50 shadow-md flex justify-center items-center"
        >
          <span className="font-bold text-sm md:text-base">🎉 Festive Sale: Get 50% OFF on All Products! 🎉</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-4 text-white underline hover:text-gray-200 text-sm md:text-base"
          >
            Shop Now
          </button>
          
          {/* Optional: Visual countdown timer */}
          <div className="ml-4 w-16 h-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Product Listing Page
const ProductListing = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  const bannerImages = [
    {
      src: Banner1,
      title: "Illuminate Your World, Sustainably",
      subtitle: "Discover our premium collection of solar-powered lamps, diyas, and samais.",
      cta: "Shop Now",
      hasDiscount: false
    },
    {
      src: Banner2,
      title: "Timeless Traditions, Modern Glow",
      subtitle: "Experience the blend of artistry and solar innovation for your home.",
      cta: "Explore Collection",
      hasDiscount: false
    },
    {
      src: Banner3,
      title: "Power of the Sun, Beauty in Design",
      subtitle: "Embrace eco-friendly lighting that enhances any space.",
      cta: "Discover Products",
      hasDiscount: false
    },
    {
      src: Banner4,
      title: "Festive Savings! Up to 50% Off",
      subtitle: "Brighten your celebrations with our special solar collection offers.",
      cta: "View Offers",
      hasDiscount: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? solarProducts 
    : solarProducts.filter(product => product.category === activeCategory);
  
  const currentCategoryConfig = categories.find(cat => cat.id === activeCategory) || 
    { color: 'from-gray-50 to-gray-100', accent: 'bg-gray-500' };

  return (
    <div className="min-h-screen pt-12" style={{ marginTop: '40px' }}>
      <DiscountStrip />
      <div className="relative h-96 md:h-screen max-h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBannerIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${bannerImages[currentBannerIndex].src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white"
              >
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={`title-${currentBannerIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                  >
                    {bannerImages[currentBannerIndex].title}
                    {bannerImages[currentBannerIndex].hasDiscount && (
                      <motion.span 
                        className="ml-4 px-3 py-1 rounded-full bg-red-500 text-white text-lg font-bold animate-pulse"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        50% OFF
                      </motion.span>
                    )}
                  </motion.h1>
                </AnimatePresence>
                
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={`subtitle-${currentBannerIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-xl md:text-2xl mb-8 opacity-90 max-w-md"
                  >
                    {bannerImages[currentBannerIndex].subtitle}
                  </motion.p>
                </AnimatePresence>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 ${bannerImages[currentBannerIndex].hasDiscount ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                >
                  {bannerImages[currentBannerIndex].cta}
                  <FiArrowRight className="ml-2" />
                </motion.button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden md:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  {bannerImages.map((banner, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className={`relative h-40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${currentBannerIndex === index ? 'ring-4 ring-white ring-opacity-80 shadow-xl' : 'opacity-70 hover:opacity-90'}`}
                      onClick={() => setCurrentBannerIndex(index)}
                    >
                      <img 
                        src={banner.src} 
                        alt={banner.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 ${currentBannerIndex === index ? 'bg-black bg-opacity-20' : 'bg-black bg-opacity-50'}`}></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentBannerIndex === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-70'}`}
              onClick={() => setCurrentBannerIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-60 transition-all z-10"
          onClick={() => setCurrentBannerIndex(
            currentBannerIndex === 0 ? bannerImages.length - 1 : currentBannerIndex - 1
          )}
        >
          <FiArrowLeft size={24} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-60 transition-all z-10"
          onClick={() => setCurrentBannerIndex(
            currentBannerIndex === bannerImages.length - 1 ? 0 : currentBannerIndex + 1
          )}
        >
          <FiArrowRight size={24} />
        </motion.button>
      </div>

      <div className="sticky top-16 z-10 bg-white shadow-sm py-4">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button 
              onClick={() => setActiveCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Products
            </motion.button>
            {categories.map(category => (
              <motion.button 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                  ${activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className={`py-12 bg-gradient-to-br ${currentCategoryConfig.color}`}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory === 'all' ? 'All Products' : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-gray-500">{filteredProducts.length} products</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <PremiumProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Premium Product Card Component
const PremiumProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const category = categories.find(c => c.id === product.category);
  
  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: '0 15px 25px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
    >
      <div 
        className="h-60 w-full flex items-center justify-center relative cursor-pointer p-4"
        onClick={() => navigate(`/${product.url}`)}
      >
        <div className={`absolute top-4 left-4 ${category?.accent} text-white text-xs font-bold py-1 px-3 rounded-full shadow-md tracking-wide`}>
          {category?.name.toUpperCase()}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <FiHeart className="text-gray-500 hover:text-red-500 transition-colors" />
        </motion.button>
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="h-44 object-contain transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-5">
        <h3 
          className="font-semibold text-lg mb-2 text-gray-800 cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => navigate(`/${product.url}`)}
        >
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <FiStar 
                key={i} 
                className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"} 
                size={16} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-green-600">₹{(product.price * 0.5).toFixed(2)}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.price.toFixed(2)}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/${product.url}`)}
            className="bg-gray-900 text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-colors"
          >
            <FiShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Premium Product Detail Page Component
const ProductDetail = ({ addToCart }) => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const productId = parseInt(id);
  const product = solarProducts.find(p => p.id === productId);
  const category = categories.find(c => c.id === product?.category);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-12" style={{ marginTop: '40px' }}>
        <DiscountStrip />
        <div className="text-center text-gray-600">Product not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-12" style={{ marginTop: '40px' }}>
      <DiscountStrip />
      <div className="container mx-auto max-w-6xl p-4">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-6 hover:text-gray-800 transition-colors font-medium"
        >
          <FiArrowLeft className="mr-2" /> Back to Products
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 flex flex-col items-center">
              <div className="h-96 w-full flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
                <motion.img 
                  key={selectedImage} 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="h-80 object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex mt-6 space-x-4 overflow-x-auto py-2 scrollbar-hide">
                  {product.images.map((img, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`h-20 w-20 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300
                        ${selectedImage === index ? `border-blue-500 shadow-md ${category?.accent}` : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${index + 1}`}
                        className="h-full w-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:w-1/2 p-8">
              <div className={`inline-block ${category?.accent} text-white text-xs font-bold py-1 px-3 rounded-full mb-4 tracking-wide`}>
                {category?.name.toUpperCase()}
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"} 
                      size={20} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-green-600 mr-3">₹{(product.price * 0.5).toFixed(2)}</span>
                  <span className="text-lg text-gray-500 line-through">₹{product.price.toFixed(2)}</span>
                  <span className="bg-green-100 text-green-600 text-sm font-semibold ml-3 px-2 py-1 rounded">
                    50% OFF
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

              <div className="flex space-x-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center shadow-md hover:bg-gray-800 transition-colors"
                >
                  <FiShoppingCart className="mr-2" /> Add to Cart
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-xl hover:border-gray-400 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <FiHeart size={24} className="text-gray-500 hover:text-red-500 transition-colors" />
                </motion.button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-4 text-gray-800 text-lg">Product Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">Free Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600">✓</span>
                    </div>
                    <span className="text-gray-700">1 Year Warranty</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600">✓</span>
                    </div>
                    <span className="text-gray-700">Gift Packaging</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                      <span className="text-amber-600">✓</span>
                    </div>
                    <span className="text-gray-700">Bulk Discounts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Premium Cart Component
const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * 0.5 * item.quantity), 0);
  
  return (
    <div className="min-h-screen bg-gray-50 py-4 pt-12" style={{ marginTop: '40px' }}>
      <DiscountStrip />
      <div className="container mx-auto max-w-4xl px-2 sm:px-4">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-3 hover:text-gray-800 transition-colors font-medium text-sm sm:text-base"
        >
          <FiArrowLeft className="mr-1 sm:mr-2" /> Continue Shopping
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-3 sm:p-6 border-b border-gray-200">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
            <p className="text-sm sm:text-base text-gray-600">{cart.length} items</p>
          </div>
          
          {cart.length === 0 ? (
            <div className="text-center py-8 sm:py-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="mx-auto text-gray-400 mb-2 sm:mb-4 text-3xl sm:text-5xl"
              >
                <FiShoppingCart />
              </motion.div>
              <p className="text-gray-500 text-sm sm:text-lg mb-3 sm:mb-6">Your cart is empty</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="bg-gray-900 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Start Shopping
              </motion.button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {cart.map(item => {
                const category = categories.find(c => c.id === item.category);
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 sm:p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4"
                  >
                    <div className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col sm:flex-row justify-between items-center w-full">
                      <div className="mb-1 sm:mb-0 text-center sm:text-left">
                        <h3 className="font-semibold text-sm sm:text-lg text-gray-800">{item.name}</h3>
                        <div className={`inline-block ${category?.accent} text-white text-xs font-bold py-0.5 sm:py-1 px-1 sm:px-2 rounded-full mt-1`}>
                          {category?.name.toUpperCase()}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between w-full sm:w-auto">
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mr-1 sm:mr-4">
                          <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 sm:p-2 text-gray-500 hover:text-gray-700 disabled:opacity-30 transition-colors"
                            disabled={item.quantity === 1}
                            aria-label="Decrease quantity"
                          >
                            <FiMinus size={12} sm:size={16} />
                          </motion.button>
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-sm sm:text-base font-medium">{item.quantity}</span>
                          <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 sm:p-2 text-green-500 hover:text-green-700 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <FiPlus size={12} sm:size={16} />
                          </motion.button>
                        </div>
                        
                        <span className="text-sm sm:text-lg font-bold text-green-600">
                          ₹{(item.price * 0.5 * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors ml-auto sm:ml-0 mt-1 sm:mt-0"
                      aria-label="Remove item"
                    >
                      <FiX size={16} sm:size={20} />
                    </motion.button>
                  </motion.div>
                );
              })}
              
              <div className="p-3 sm:p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <span className="text-gray-600 text-sm sm:text-base">Subtotal:</span>
                  <span className="text-gray-800 font-medium text-sm sm:text-base">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2 sm:mb-6">
                  <span className="text-gray-600 text-sm sm:text-base">Shipping:</span>
                  <span className="text-green-600 font-medium text-sm sm:text-base">Free</span>
                </div>
                <div className="flex justify-between items-center mb-2 sm:mb-6 text-sm sm:text-lg border-t border-gray-200 pt-2 sm:pt-4">
                  <span className="font-bold text-gray-800">Total:</span>
                  <span className="font-bold text-green-700">₹{totalPrice.toFixed(2)}</span>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-900 text-white py-2 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-md text-sm sm:text-base"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Main App Component
const SolarEcommerce = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    const notification = document.createElement('div');
    notification.className = 'fixed top-16 right-4 bg-green-500 text-white px-3 py-1.5 rounded-lg shadow-lg z-50 flex items-center animate-fade-in text-sm';
    notification.innerHTML = `
      <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
        <path d="M0 4.5L7.5 12l4.5-4.5L20 0v4.5C20 10.038 16.038 14 11 14c-1.243 0-2.46-.185-3.637-.544L5 16H0V4.5z"/>
      </svg>
      <span>Added to cart!</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('animate-fade-out');
      notification.addEventListener('animationend', () => {
        document.body.removeChild(notification);
      });
    }, 2000);
  };
  
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };
  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <Routes>
        <Route 
          path="/" 
          element={<ProductListing addToCart={addToCart} />} 
        />
        <Route 
          path="/product/:id" 
          element={<ProductDetail addToCart={addToCart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} 
        />
      </Routes>
    </div>
  );
};

// Inject animation styles
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-10px); }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }
  .animate-fade-out {
    animation: fadeOut 0.3s ease-out forwards;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = animationStyles;
  document.head.appendChild(styleSheet);
}

export default SolarEcommerce;