import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SimilarProducts from '../components/SimilarProducts';
import { 
  FiShoppingCart, FiActivity, FiCheck, FiArrowRight, FiArrowLeft, FiX, 
  FiSun, FiBatteryCharging, FiDroplet, FiZap, FiStar,
  FiTruck, FiShield, FiGift, FiUsers, FiInfo, FiPhone, FiCheckCircle
} from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import SolarSilverPanchpakaliSamai from "../assets/images/Products/Samai/Panchpakalisamai.jpeg";
import { useCart } from '../components/CartContext'; // Adjust path as needed
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS



const PanchpakaliSamai = () => {
    const product = {
        id: 4, // Change ID
        name: 'Solar Silver Panchpakali Samai',
        price: 2498,
        description: 'Elegant Panchpakali (five-flame) design with a stunning silver finish. This samai is perfect for traditional ceremonies, daily puja, and special gatherings, offering a warm and inviting ambiance.',
        extendedDescription: 'Experience the divine elegance of our Solar Silver Panchpakali Samai. This exquisite piece features the traditional five-flame design symbolizing the Pancha Tattva (five elements). Crafted with meticulous attention to detail, it brings spiritual significance and modern functionality to your sacred spaces.',
        features: [
          { icon: FiSun, title: 'Solar Powered', desc: 'Efficient solar panel charges during daylight hours for zero electricity cost' },
          { icon: FiBatteryCharging, title: '10-Hour Runtime', desc: 'Extended 10 hours of continuous illumination for all-night prayers' },
          { icon: FaLeaf, title: 'Eco-Friendly', desc: 'Sustainable energy solution with zero carbon emissions' },
          { icon: FiZap, title: '25 Bright LEDs', desc: '25 premium LED lights arranged in sacred five-flame pattern' },
          { icon: FiDroplet, title: 'Weather Resistant', desc: 'Suitable for both indoor puja rooms and outdoor temple areas' },
          { icon: FiShield, title: '2.5-Year Warranty', desc: 'Extended warranty coverage for complete peace of mind' }
        ],
        benefits: [
          'Authentic Panchpakali (five-flame) design with spiritual significance',
          'Premium silver finish that enhances any sacred space',
          'Perfect for daily rituals, festivals, and special ceremonies',
          'Creates a serene and divine atmosphere for meditation and prayer'
        ],
        images: [SolarSilverPanchpakaliSamai], // Use your actual image imports
        reviews: [
          { name: 'Suresh P.', rating: 5, comment: 'The Panchpakali design is absolutely authentic and beautiful. The silver finish looks luxurious in our temple room.' },
          { name: 'Meera D.', rating: 5, comment: 'Perfect for our daily puja. The five-flame pattern creates such a divine atmosphere during evening prayers.' },
          { name: 'Arun K.', rating: 4, comment: 'Excellent craftsmanship and good brightness. The solar charging works very efficiently.' }
        ]
      };


      const orderTypes = [
        { id: 'normal', label: 'Individual Purchase', icon: FiUsers, minQty: 1 },
        { id: 'bulk', label: 'Bulk Order', icon: FiTruck, minQty: 10 },
        { id: 'corporate', label: 'Corporate Gifting', icon: FaBuilding, minQty: 20 }
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [showCheckout, setShowCheckout] = useState(false);
      const [qty, setQty] = useState(1);
      const [orderType, setOrderType] = useState('normal');
      const [checkoutStep, setCheckoutStep] = useState('viewing');
      const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        zip: '',
        contact: '',
        email: '',
        company: ''
      });
      const [errors, setErrors] = useState({});
      const [isSending, setIsSending] = useState(false);
      const [showCorporateTerms, setShowCorporateTerms] = useState(false);
      const [prevOrderType, setPrevOrderType] = useState('normal');
      const { addToCart: addToGlobalCart } = useCart();
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }, 4000);
        return () => clearInterval(interval);
      }, [product.images.length]);
    
      // Add this useEffect near your other useEffects
      useEffect(() => {
        // Scroll to top when checkout step changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [checkoutStep]);
    
      useEffect(() => {
        const selectedType = orderTypes.find(type => type.id === orderType);
        if (selectedType && qty < selectedType.minQty) {
          setQty(selectedType.minQty);
        }
      }, [orderType]);
    
      const getDiscountedPrice = (price) => {
        const discount = orderType === 'bulk' ? 0.5 : orderType === 'corporate' ? 0.5 : 0.5;
        return (price * (1 - discount)).toFixed(2);
      };
    
      const getDiscountLabel = () => {
        return orderType === 'bulk' ? '50% OFF' : orderType === 'corporate' ? '50% OFF' : '50% OFF';
      };
    
      const handleOrderTypeChange = (type) => {
        if (type === 'corporate') {
          setPrevOrderType(orderType); // Save current order type
          setShowCorporateTerms(true);  // Show modal
        } else {
          setOrderType(type); // Directly set for other types
        }
      };
    
      const handleImageChange = (direction) => {
        setCurrentImageIndex((prev) => {
          const newIndex = direction === 'next'
            ? (prev + 1) % product.images.length
            : (prev - 1 + product.images.length) % product.images.length;
          return newIndex;
        });
      };
    
      const addToCart = () => {
        addToGlobalCart(
          product, 
          qty, 
          orderType, 
          getDiscountedPrice(product.price)
        );
        console.log('Product added to cart!');
      };
    
    
      const handleBuyNow = () => {
        setCheckoutStep('summary');
      };
    
      const handleCorporateCancel = () => {
        console.log('Cancel clicked, reverting to:', prevOrderType);
        setOrderType(prevOrderType);
        setShowCorporateTerms(false);
      };
      
      const handleCorporateAccept = () => {
        console.log('Agree & Proceed clicked, setting orderType to corporate');
        setOrderType((prev) => {
          setShowCorporateTerms(false);
          return 'corporate';
        });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
          setErrors((prev) => ({ ...prev, [name]: '' }));
        }
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.zip.trim()) newErrors.zip = 'ZIP Code is required';
        if (!formData.contact.trim()) newErrors.contact = 'Contact Number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (formData.contact && !/^\d{10}$/.test(formData.contact)) {
          newErrors.contact = 'Enter a valid 10-digit number';
        }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Enter a valid email address';
        }
        if (orderType === 'corporate' && !formData.company.trim()) {
          newErrors.company = 'Company name is required for corporate orders';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    

     // --- Send Email ---
     const sendOrderEmail = () => {
      setIsSending(true);
  
      const orderDetails = `${product.name} (${orderType}) - Qty: ${qty} - ₹${(
        parseFloat(getDiscountedPrice(product.price)) * qty
      ).toFixed(2)}`;
  
      const totalPrice = (
        parseFloat(getDiscountedPrice(product.price)) * qty
      ).toFixed(2);
  
      emailjs
        .send(
          "service_6steo4p", // ⚡ from EmailJS dashboard
          "template_b71e32a", // ⚡ from EmailJS dashboard
          {
            to_email: "shreesha.energy@gmail.com, aveezmanages@gmail.com", // ✅ multiple recipients
            name: formData.fullName,
            email: formData.email,
            message: `
              Customer: ${formData.fullName}
              Email: ${formData.email}
              Phone: ${formData.contact}
              ${orderType === "corporate" ? `Company: ${formData.company}` : ""}
              
              Address: ${formData.address}, ${formData.city}, ${formData.zip}
              
              Order: ${orderDetails}
              Total: ₹${totalPrice}
              Type: ${orderTypes.find((t) => t.id === orderType)?.label}
              Date: ${new Date().toLocaleDateString("en-IN")}
            `,
            time: new Date().toLocaleString("en-IN"),
          },
          "keqjPA-FB_hoRljDf" // ⚡ from EmailJS dashboard
        )
        .then(
          (response) => {
            console.log("✅ Email sent:", response.status, response.text);
            setCheckoutStep("confirmation");
            setIsSending(false);
          },
          (error) => {
            console.error("❌ Email send failed:", error);
            setIsSending(false);
          }
        );
    };
  
    // --- Complete order ---
    const completeOrder = () => {
      if (validateForm()) {
        sendOrderEmail();
      }
    };
    
      const selectedOrderType = orderTypes.find(type => type.id === orderType);
    
      return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-800 relative overflow-x-hidden">
          
    
    {/* Corporate Gifting Terms Modal */}
    <AnimatePresence>
      {showCorporateTerms && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-labelledby="corporate-terms-title"
          aria-describedby="corporate-terms-desc"
          onClick={(e) => {
            // Close modal when clicking outside
            if (e.target === e.currentTarget) {
              setOrderType(prevOrderType);
              setShowCorporateTerms(false);
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border-2 border-emerald-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-green-50/30" />
            
            <motion.button
              onClick={() => {
                setOrderType(prevOrderType);
                setShowCorporateTerms(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close corporate terms modal"
            >
              <FiX size={24} />
            </motion.button>
            
            <div className="relative z-10">
              <h3 
                id="corporate-terms-title" 
                className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6 text-center"
              >
                Corporate Gifting Terms
              </h3>
              
              <div 
                id="corporate-terms-desc" 
                className="text-gray-700 leading-relaxed mb-8 select-text"
              >
                <p className="mb-4">
                  Our Corporate Gifting program is designed for bulk orders with a <strong>minimum quantity of 50 units</strong>. 
                </p>
                <p className="mb-4">
                  Enjoy customizable quantities, bespoke designs, and premium packaging tailored to your brand's needs. 
                  Pricing is slightly negotiable based on order volume and customization requirements.
                </p>
                <p>
                  By proceeding, you agree to collaborate with our team to finalize your bespoke gifting solution, 
                  ensuring a sustainable and impactful corporate gift that aligns with your vision.
                </p>
              </div>
              
              <div className="flex justify-between gap-4">
                <motion.button
                  onClick={() => {
                    setOrderType(prevOrderType);
                    setShowCorporateTerms(false);
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                >
                  Cancel
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    setOrderType('corporate');
                    setShowCorporateTerms(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                >
                  Agree & Proceed
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
                  
    <main className="container mx-auto p-3 sm:p-4 md:p-8 relative">
    <AnimatePresence mode="wait">
      {checkoutStep === 'viewing' && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 md:space-y-16" // Reduced space on mobile
        >
          {/* Hero Section */}
          <section className="relative flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 py-6 md:py-12 lg:py-20">
            {/* Product Images */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                className="relative w-full h-56 sm:h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-white via-emerald-50 to-green-100 shadow-lg md:shadow-2xl border border-emerald-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-lg"></div>
                
                {/* Image container with flex centering */}
                <div className="w-full h-full flex items-center justify-center p-3 md:p-6 lg:p-8 relative">
                  <AnimatePresence>
                    <motion.img
                      key={currentImageIndex}
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - View ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain filter drop-shadow-xl md:drop-shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                </div>
                
                {/* Navigation buttons - Only show if multiple images */}
                {product.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={() => handleImageChange('prev')}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-1 md:p-3 rounded-full shadow-lg md:shadow-xl hover:bg-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 z-10"
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiArrowLeft size={14} className="text-emerald-600" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleImageChange('next')}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-1 md:p-3 rounded-full shadow-lg md:shadow-xl hover:bg-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 z-10"
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiArrowRight size={14} className="text-emerald-600" />
                    </motion.button>
                  </>
                )}
              </motion.div>
              
              {/* Image indicators - Only show if multiple images */}
              {product.images.length > 1 && (
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, idx) => (
                    <motion.button
                      key={idx}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'bg-emerald-500 shadow-md md:shadow-lg shadow-emerald-500/50' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      whileHover={{ scale: 1.3 }}
                      onClick={() => setCurrentImageIndex(idx)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 mt-6 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-3 md:mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={16} className="md:w-5" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm md:text-base text-gray-600 font-medium">4.8 (234 reviews)</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-black bg-clip-text text-transparent leading-tight mb-4 md:mb-6">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <span className="text-lg md:text-xl lg:text-2xl text-gray-500 line-through">₹{product.price.toFixed(2)}</span>
                  <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    ₹{getDiscountedPrice(product.price)}
                  </span>
                  <span className="bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm shadow-md">
                    {getDiscountLabel()}
                  </span>
                </div>
              </motion.div>
  
              {/* Order Type Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-3 md:space-y-4"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Choose Order Type:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  {orderTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => handleOrderTypeChange(type.id)}
                      className={`p-2 md:p-3 sm:p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 ${
                        orderType === type.id
                          ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-md md:shadow-lg shadow-emerald-500/25'
                          : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <type.icon 
                        size={20} 
                        className={`mx-auto mb-1 ${
                          orderType === type.id ? 'text-emerald-600' : 'text-gray-400'
                        }`} 
                      />
                      <p className={`font-semibold text-xs md:text-sm ${
                        orderType === type.id ? 'text-emerald-700' : 'text-gray-600'
                      }`}>
                        {type.label}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">Min: {type.minQty}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
  
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">{product.description}</p>
              <p className="text-xs md:text-sm text-gray-600 italic font-medium">{product.extendedDescription}</p>
  
              {/* Quantity and Actions */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <span className="text-base md:text-lg font-semibold text-gray-700">Quantity:</span>
                  <div className="flex items-center bg-white rounded-lg md:rounded-xl shadow-md border border-emerald-200 overflow-hidden">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQty((prev) => Math.max(selectedOrderType.minQty, prev - 1))}
                      disabled={qty <= selectedOrderType.minQty}
                      className={`p-2 md:p-3 transition-colors duration-200 text-emerald-600 ${
                          qty <= selectedOrderType.minQty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-50'
                      }`}
                      >
                      <FiArrowLeft size={16} className="md:w-5" />
                    </motion.button>
                    <span className="px-3 md:px-6 py-2 md:py-3 font-bold text-lg md:text-xl text-emerald-700 min-w-[40px] md:min-w-[60px] text-center">
                      {qty}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQty((prev) => prev + 1)}
                      className="p-2 md:p-3 hover:bg-emerald-50 transition-colors duration-200 text-emerald-600"
                    >
                      <FiArrowRight size={16} className="md:w-5" />
                    </motion.button>
                  </div>
                </div>
  
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={addToCart}
                  className="flex-1 bg-white border-2 border-emerald-500 text-emerald-600 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-md md:shadow-lg hover:bg-emerald-50 hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                >
                  <FiShoppingCart className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" /> 
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBuyNow}
                  className="flex-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold shadow-md md:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                >
                  Buy Now 
                  <FiArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>
  
                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4 md:pt-6 border-t border-emerald-100">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiTruck className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiShield className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">2-Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiCheck className="text-emerald-500 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">Eco-Certified</span>
                </div>
              </div>
              </div>
            </div>
          </section>
  
                  {/* Benefits Section */}
                  <section className="py-16">
                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      Why Choose Our Solar Lamp?
                    </motion.h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {product.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50/30 shadow-lg hover:shadow-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-1.5 sm:p-2 rounded-full shadow-lg">
                          <FiCheck className="text-white" size={16} /> {/* Reduced from 20 */}
                        </div>
                        <span className="text-base sm:text-lg text-gray-700 leading-relaxed flex-1">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                  </section>
    
                  <SimilarProducts />
    
                  {/* Reviews Section */}
                  <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50/50 to-teal-50 rounded-[3rem] shadow-2xl border border-emerald-200/50">
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-12 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      What Our Customers Say
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-8">
                        {product.reviews.map((review, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 sm:p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-emerald-100 hover:border-emerald-200 transition-all duration-500"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="flex items-center mb-4 sm:mb-6">
                              <div className="flex space-x-1 mr-3 sm:mr-4">
                                {[...Array(5)].map((_, i) => (
                                  <FiStar 
                                    key={i} 
                                    className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                    size={16} // Reduced from 20
                                  />
                                ))}
                              </div>
                              <span className="font-semibold text-sm sm:text-base text-gray-800">{review.name}</span>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-4">"{review.comment}"</p>
                            <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                          </motion.div>
                        ))}
                      </div>
                  </section>
                </motion.div>
              )}
    
    {checkoutStep === 'summary' && (
    <motion.div
      key="summary"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-2xl border border-emerald-200"
    >
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8 text-center">
        Order Summary
      </h2>
      
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 md:p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl object-cover border-2 border-emerald-200"
          />
          <div className="flex-1">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-emerald-600 text-sm sm:text-base font-medium">{orderTypes.find(t => t.id === orderType)?.label}</p>
            <p className="text-gray-600 text-xs sm:text-sm">Quantity: {qty}</p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-gray-500 line-through">₹{(product.price * qty).toFixed(2)}</p>
            <p className="text-xl sm:text-2xl md:text-2xl font-bold text-emerald-600">₹{(parseFloat(getDiscountedPrice(product.price)) * qty).toFixed(2)}</p>
          </div>
        </div>
  
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-3 sm:p-4 md:p-6 rounded-2xl border border-emerald-200">
          <div className="flex justify-between items-center text-base sm:text-lg">
            <span className="font-semibold text-gray-700">Total Amount:</span>
            <span className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              ₹{(parseFloat(getDiscountedPrice(product.price)) * qty).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
            <span>You save:</span>
            <span className="font-semibold text-green-600">
              ₹{((product.price - parseFloat(getDiscountedPrice(product.price))) * qty).toFixed(2)}
            </span>
          </div>
        </div>
  
        <div className="flex justify-between mt-4 sm:mt-6 md:mt-8">
          <motion.button
            type="button"
            onClick={() => setCheckoutStep('viewing')}
            className="text-emerald-600 hover:text-emerald-800 transition font-medium text-sm sm:text-base flex items-center"
            whileHover={{ scale: 1.05, x: -5 }}
          >
            <FiArrowLeft className="mr-1 sm:mr-2" /> Back to Product
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setCheckoutStep('address')}
            className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Shipping <FiArrowRight className="ml-1 sm:ml-2" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )}
    
              {/* Address Form Step */}
              {checkoutStep === 'address' && (
                <motion.div
                  key="address"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-emerald-200"
                >
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6 sm:mb-8 text-center">
                  Shipping Information
                </h2>
                  
                  <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-gray-700 mb-1 sm:mb-2 font-semibold text-sm sm:text-base">Full Name *</label>
                        <motion.input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full p-3 sm:p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.fullName ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-1 sm:mb-2 font-semibold text-sm sm:text-base">Contact Number *</label>
                        <motion.input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          className={`w-full p-3 sm:p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.contact ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="10-digit mobile number"
                        />
                        {errors.contact && <p className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2">{errors.contact}</p>}
                      </div>
                    </div>
    
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Email Address *</label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                        whileFocus={{ scale: 1.02 }}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                    </div>
    
                    {orderType === 'corporate' && (
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">Company Name *</label>
                        <motion.input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.company ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="Your company name"
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-2">{errors.company}</p>}
                      </div>
                    )}
    
                    <div>
                      <label className="block text-gray-700 mb-2 font-semibold">Complete Address *</label>
                      <motion.textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows="3"
                        className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 resize-none ${
                          errors.address ? 'border-red-500' : 'border-gray-200'
                        }`}
                        whileFocus={{ scale: 1.02 }}
                        placeholder="House/Flat No., Street, Area, Landmark"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
                    </div>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">City *</label>
                        <motion.input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.city ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="Your city"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
                      </div>
    
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">ZIP Code *</label>
                        <motion.input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.zip ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="PIN Code"
                        />
                        {errors.zip && <p className="text-red-500 text-sm mt-2">{errors.zip}</p>}
                      </div>
                    </div>
    
                    <div className="flex justify-between mt-8">
                      <motion.button
                        type="button"
                        onClick={() => setCheckoutStep('summary')}
                        className="text-emerald-600 hover:text-emerald-800 transition font-medium flex items-center"
                        whileHover={{ scale: 1.05, x: -5 }}
                      >
                        <FiArrowLeft className="mr-2" /> Back to Summary
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={completeOrder}
                        disabled={isSending}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        whileHover={{ scale: isSending ? 1 : 1.05 }}
                        whileTap={{ scale: isSending ? 1 : 0.95 }}
                      >
                        {isSending ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Processing Order...
                          </>
                        ) : (
                          <>
                            Complete Order <FiCheck className="ml-2" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
    
              {/* Order Confirmation Step */}
              {checkoutStep === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="max-w-2xl mx-auto bg-gradient-to-br from-white via-emerald-50 to-green-50 p-12 rounded-3xl shadow-2xl text-center border-4 border-emerald-400"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', delay: 0.2, stiffness: 200, damping: 10 }}
                    className="mb-8"
                  >
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                      <FiCheck className="relative text-emerald-500 text-8xl mx-auto bg-white rounded-full p-4 shadow-2xl border-4 border-emerald-200" />
                    </div>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Order Placed Successfully!
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-4 mb-8"
                  >
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Your eco-friendly solar lamp order has been confirmed!
                    </p>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-200 space-y-2">
                      <p className="text-lg font-semibold text-gray-800">Order Details:</p>
                      <p className="text-emerald-600 font-medium">Order ID: #{Date.now().toString().slice(-6)}</p>
                      <p className="text-gray-600">We'll contact you within 24 hours for order confirmation</p>
                      <p className="text-gray-600">Expected delivery: 8-10 business days</p>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    onClick={() => {
                      setFormData({ fullName: '', address: '', city: '', zip: '', contact: '', email: '', company: '' });
                      setCheckoutStep('viewing');
                      setQty(1);
                      setOrderType('normal');
                    }}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Continue Shopping <FiArrowRight className="ml-3" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
    
            {/* Floating Mobile CTA */}
          </main>
        </div>
      );
    };

export default PanchpakaliSamai;