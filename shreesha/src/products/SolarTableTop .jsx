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
import TableTop1 from "../assets/images/TableTop1.jpeg";
import TableTop2 from "../assets/images/TableTop2.jpeg";
import TableTop3 from "../assets/images/TableTop3.jpeg";
import { useCart } from '../components/CartContext'; // Adjust path as needed


const SolarTableTop = () => {
    const product = {
        id: 8,
        name: 'Solar Table Top Lamp',
        description: 'Elegant solar-powered table top lamps perfect for home decor, office spaces, or gifting. Available in three versatile designs to suit different needs and preferences.',
        extendedDescription: 'Our premium Solar Table Top Lamps combine functionality with elegant design, offering three distinct variations to meet your specific requirements. Each lamp features efficient solar charging, automatic evening illumination, and eco-friendly operation. Choose from our standard model, corporate edition with logo customization, or executive version with integrated card and pen holder for ultimate convenience.',
        features: [
          { icon: FiSun, title: 'Solar Powered', desc: 'Built-in solar panel for automatic charging during daylight hours' },
          { icon: FiBatteryCharging, title: 'Auto On/Off', desc: 'Automatically turns on at dusk and off at dawn for hassle-free operation' },
          { icon: FaLeaf, title: 'Eco-Friendly', desc: 'Zero electricity consumption with clean solar energy' },
          { icon: FiZap, title: 'Bright LED Lighting', desc: 'Energy-efficient LEDs providing perfect ambient illumination' },
          { icon: FiActivity, title: 'Premium Build Quality', desc: 'Durable construction with weather-resistant finish' },
          { icon: FiShield, title: '1-Year Warranty', desc: 'Comprehensive warranty for peace of mind' }
        ],
        benefits: [
          'Three distinct designs to choose from based on your needs',
          'Perfect for home decor, office desks, or reception areas',
          'Corporate edition allows brand customization with logo printing',
          'Executive version includes practical card and pen holder functionality',
          'Creates warm, inviting atmosphere for any space',
          'Ideal for gifting to clients, employees, or loved ones'
        ],
        images: [TableTop1, TableTop2, TableTop3], // Use your actual image imports
        variations: [
          {
            name: 'Standard Table Top',
            description: 'Classic elegant design perfect for home and office use',
            features: ['Sleek minimalist design', 'Warm white LED illumination', 'Compact footprint']
          },
          {
            name: 'Table Top with Logo',
            description: 'Customizable corporate edition with brand logo printing',
            features: ['Brand customization available', 'Ideal for corporate gifting', 'Professional appearance']
          },
          {
            name: 'Table Top with Card & Pen Holder',
            description: 'Executive version with integrated organizational features',
            features: ['Built-in card holder', 'Pen storage compartment', 'Perfect for office desks']
          }
        ],
        reviews: [
          { name: 'Rajesh K.', rating: 5, comment: 'Perfect for my office desk! The card holder version is both functional and beautiful.' },
          { name: 'Corporate Gifting Team', rating: 5, comment: 'Excellent quality for our client gifts. The logo customization was perfectly executed.' },
          { name: 'Meera S.', rating: 4, comment: 'Love the elegant design. It charges well and provides perfect ambient lighting for my living room.' }
        ]
      };

      const orderTypes = [
        { id: 'normal', label: 'Individual Purchase', icon: FiUsers, minQty: 1 },
        { id: 'bulk', label: 'Bulk Order', icon: FiTruck, minQty: 10 },
        { id: 'corporate', label: 'Corporate Gifting', icon: FaBuilding, minQty: 50 }
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
    
      // REMOVED: getDiscountedPrice function
      // REMOVED: getDiscountLabel function
    
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
        // MODIFIED: Removed price parameter
        addToGlobalCart(product, qty, orderType);
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
    
      const sendOrderEmail = () => {
        setIsSending(true);
        
        // REPLACE 'your-email@example.com' WITH YOUR ACTUAL EMAIL
        const YOUR_EMAIL = 'your-email@example.com';
        
        // MODIFIED: Removed price calculations
        const orderDetails = `${product.name} (${orderType}) - Qty: ${qty}`;
        
        // MODIFIED: Removed total price calculation
    
        // Email content (you can implement actual email sending here)
        const emailContent = {
          to: YOUR_EMAIL,
          subject: `New Order - ${formData.fullName}`,
          body: `
            Customer Details:
            Name: ${formData.fullName}
            Email: ${formData.email}
            Phone: ${formData.contact}
            ${orderType === 'corporate' ? `Company: ${formData.company}` : ''}
            
            Shipping Address:
            ${formData.address}, ${formData.city}, ${formData.zip}
            
            Order Details:
            ${orderDetails}
            
            Order Type: ${orderTypes.find(t => t.id === orderType)?.label}
            Order Date: ${new Date().toLocaleDateString('en-IN')}
          `
        };
    
        // Simulate email sending
        setTimeout(() => {
          console.log('Order email would be sent to:', YOUR_EMAIL);
          console.log('Email content:', emailContent);
          setCheckoutStep('confirmation');
          setIsSending(false);
          setCartItems([]);
        }, 2000);
      };
    
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
    
          <main className="container mx-auto p-4 md:p-8 relative">
            <AnimatePresence mode="wait">
              {checkoutStep === 'viewing' && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="space-y-16"
                >
                  {/* Hero Section */}
                  <section className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12 lg:py-20">
                    {/* Product Images */}
                    <div className="lg:w-1/2 relative">
      <motion.div
        className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-white via-emerald-50 to-green-100 shadow-2xl border border-emerald-200"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5"></div>
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-lg"></div>
        
        {/* Image container with flex centering */}
        <div className="w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={product.images[currentImageIndex]}
              alt={`${product.name} - View ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
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
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-full shadow-xl hover:bg-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowLeft size={16} className="text-emerald-600" />
            </motion.button>
            <motion.button
              onClick={() => handleImageChange('next')}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-full shadow-xl hover:bg-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowRight size={16} className="text-emerald-600" />
            </motion.button>
          </>
        )}
      </motion.div>
      
      {/* Image indicators - Only show if multiple images */}
      {product.images.length > 1 && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {product.images.map((_, idx) => (
            <motion.button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentImageIndex 
                  ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' 
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
                    <div className="lg:w-1/2 space-y-8">
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FiStar key={i} size={20} fill="currentColor" />
                            ))}
                          </div>
                          <span className="text-gray-600 font-medium">4.8 (234 reviews)</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-black  bg-clip-text text-transparent leading-tight mb-6">
                          {product.name}
                          
                        </h1>
                       
                              
                        {/* MODIFIED: Removed price display and replaced with contact message */}
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Contact for Pricing
                          </span>
                        </div>
                      </motion.div>
    
                      {/* Order Type Selection */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-4"
                      >
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Choose Order Type:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {orderTypes.map((type) => (
                            <motion.button
                              key={type.id}
                              onClick={() => handleOrderTypeChange(type.id)}
                              className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                                orderType === type.id
                                  ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-lg shadow-emerald-500/25'
                                  : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <type.icon 
                                size={32} 
                                className={`mx-auto mb-2 ${
                                  orderType === type.id ? 'text-emerald-600' : 'text-gray-400'
                                }`} 
                              />
                              <p className={`font-semibold text-sm ${
                                orderType === type.id ? 'text-emerald-700' : 'text-gray-600'
                              }`}>
                                {type.label}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">Min: {type.minQty}</p>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
    
                      <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
                      <p className="text-base text-gray-600 italic font-medium">{product.extendedDescription}</p>
    
                      {/* Quantity and Actions */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-semibold text-gray-700">Quantity:</span>
                          <div className="flex items-center bg-white rounded-xl shadow-lg border border-emerald-200 overflow-hidden">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setQty((prev) => Math.max(selectedOrderType.minQty, prev - 1))}
                            disabled={qty <= selectedOrderType.minQty}
                            className={`p-3 transition-colors duration-200 text-emerald-600 ${
                                qty <= selectedOrderType.minQty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-50'
                            }`}
                            >
                            <FiArrowLeft size={20} />
                            </motion.button>
                            <span className="px-6 py-3 font-bold text-xl text-emerald-700 min-w-[60px] text-center">
                              {qty}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setQty((prev) => prev + 1)}
                              className="p-3 hover:bg-emerald-50 transition-colors duration-200 text-emerald-600"
                            >
                              <FiArrowRight size={20} />
                            </motion.button>
                          </div>
                        </div>
    
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={addToCart}
                            className="flex-1 bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-emerald-50 hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
                          >
                            <FiShoppingCart className="mr-3" size={20} /> 
                            Add to Cart
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleBuyNow}
                            className="flex-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
                          >
                            Contact for Pricing
                            <FiArrowRight className="ml-3" size={20} />
                          </motion.button>
                        </div>
    
                        {/* Trust badges */}
                        <div className="flex items-center justify-center space-x-8 pt-6 border-t border-emerald-100">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <FiTruck className="text-emerald-500" size={20} />
                            <span className="text-sm font-medium">Free Shipping</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <FiShield className="text-emerald-500" size={20} />
                            <span className="text-sm font-medium">2-Year Warranty</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <FiCheck className="text-emerald-500" size={20} />
                            <span className="text-sm font-medium">Eco-Certified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                                {/* Features Section */}
                                <section className="py-16 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/30 rounded-[3rem] shadow-2xl border border-emerald-100/50 backdrop-blur-sm">
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-16 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      Premium Features
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="group p-8 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-green-50/50 shadow-xl hover:shadow-2xl border border-emerald-200/50 hover:border-emerald-300/70 transition-all duration-500"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="relative mb-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <feature.icon size={48} className="relative text-emerald-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
    
                  {/* Benefits Section */}
                  <section className="py-16">
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-12 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      Why Choose Our Solar Lamp?
                    </motion.h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50/30 shadow-lg hover:shadow-xl border border-emerald-100 hover:border-emerald-200 transition-all duration-300"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-full shadow-lg">
                            <FiCheck className="text-white" size={20} />
                          </div>
                          <span className="text-lg text-gray-700 leading-relaxed flex-1">{benefit}</span>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                      {product.reviews.map((review, idx) => (
                        <motion.div
                          key={idx}
                          className="p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-emerald-100 hover:border-emerald-200 transition-all duration-500"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="flex items-center mb-6">
                            <div className="flex space-x-1 mr-4">
                              {[...Array(5)].map((_, i) => (
                                <FiStar 
                                  key={i} 
                                  className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  size={20} 
                                />
                              ))}
                            </div>
                            <span className="font-semibold text-gray-800">{review.name}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed italic mb-4">"{review.comment}"</p>
                          <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}

           

          {/* Order Summary Step */}
          {checkoutStep === 'summary' && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-3xl shadow-2xl border border-emerald-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6 md:mb-8 text-center">
                Request Summary
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="text-center mb-4 md:mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-3 md:p-4 rounded-2xl mb-3 md:mb-4 text-sm md:text-base">
                    <FiInfo className="inline-block mr-2" size={18} />
                    <span className="font-semibold">We'll contact you with personalized pricing</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">Based on your order type and quantity requirements</p>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover border-2 border-emerald-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                        {orderTypes.find(t => t.id === orderType)?.label}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs md:text-sm font-medium">
                        Qty: {qty}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 md:p-6 rounded-2xl border border-emerald-200">
                  <div className="text-center">
                    <FiPhone className="inline-block text-emerald-600 mb-2 md:mb-3" size={24} />
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Next Steps</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                      Our team will contact you within 24 hours to discuss:
                    </p>
                    <ul className="text-left text-gray-700 space-y-1 md:space-y-2 max-w-md mx-auto text-sm md:text-base">
                      <li className="flex items-start">
                        <FiCheckCircle className="text-emerald-500 mr-2 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                        <span>Personalized pricing for your order</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-emerald-500 mr-2 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                        <span>Customization options if needed</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-emerald-500 mr-2 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                        <span>Delivery timeline and options</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-between gap-3 md:gap-0 mt-6 md:mt-8">
                  <motion.button
                    type="button"
                    onClick={() => setCheckoutStep('viewing')}
                    className="text-emerald-600 hover:text-emerald-800 transition font-medium flex items-center justify-center text-sm md:text-base py-2 md:py-0"
                    whileHover={{ scale: 1.05, x: -5 }}
                  >
                    <FiArrowLeft className="mr-2" /> Back to Product
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setCheckoutStep('address')}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue to Contact <FiArrowRight className="ml-2" />
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-8 text-center">
                    Contact Information
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                        <motion.input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.fullName ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
                      </div>
    
                      <div>
                        <label className="block text-gray-700 mb-2 font-semibold">Contact Number *</label>
                        <motion.input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          className={`w-full p-4 border-2 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                            errors.contact ? 'border-red-500' : 'border-gray-200'
                          }`}
                          whileFocus={{ scale: 1.02 }}
                          placeholder="10-digit mobile number"
                        />
                        {errors.contact && <p className="text-red-500 text-sm mt-2">{errors.contact}</p>}
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
                            Submit Inquiry <FiCheck className="ml-2" />
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
                    className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Inquiry Submitted Successfully!
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-4 mb-8"
                  >
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Your inquiry for our eco-friendly solar lamp has been received!
                    </p>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-200 space-y-2">
                      <p className="text-lg font-semibold text-gray-800">Inquiry Details:</p>
                      <p className="text-emerald-600 font-medium">Reference ID: #{Date.now().toString().slice(-6)}</p>
                      <p className="text-gray-600">We'll contact you within 24 hours with pricing details</p>
                      <p className="text-gray-600">Our team will provide customized pricing based on your requirements</p>
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
                    Continue Browsing <FiArrowRight className="ml-3" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
    
         
          </main>
        </div>
      );
    };


export default SolarTableTop;