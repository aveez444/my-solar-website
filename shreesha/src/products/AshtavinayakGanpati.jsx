import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SimilarProducts from '../components/SimilarProducts';
import { 
  FiShoppingCart, FiCheck, FiArrowRight, FiArrowLeft, FiX, 
  FiSun, FiBatteryCharging, FiDroplet, FiZap, FiStar,
  FiTruck, FiShield, FiGift, FiUsers
} from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa";
import SolarSilverAshtavinayakDiya from "../assets/images/Products/Samai/AshtavinayakGanpati.jpeg";
import { useCart } from '../components/CartContext';
import emailjs from "@emailjs/browser";

const AshtavinayakGanpati = () => {
  const product = {
    id: 6,
    name: 'Solar Silver Ashtavinayak Ganpati Diya',
    price: 2498,
    description: 'An auspicious Ashtavinayak Ganpati design, meticulously crafted in silver. This diya radiates warm white LEDs, bringing blessings, peace, and a radiant light to your home.',
    extendedDescription: 'Invoke the divine blessings of Lord Ganesha with our exquisite Solar Silver Ashtavinayak Ganpati Diya. This beautifully crafted piece features the sacred Ashtavinayak (eight forms of Ganesha) motif, symbolizing wisdom, prosperity, and the removal of obstacles. The elegant silver finish and warm illumination create a spiritually uplifting atmosphere perfect for daily worship and special occasions.',
    benefits: [
      'Sacred Ashtavinayak design representing the eight forms of Lord Ganesha',
      'Elegant silver finish that complements any home decor or prayer space',
      'Perfect for daily worship, Ganesh Chaturthi, and other religious celebrations',
      'Creates a serene atmosphere for meditation and spiritual practices'
    ],
    images: [SolarSilverAshtavinayakDiya],
    reviews: [
      { name: 'Neha R.', rating: 5, comment: 'The Ashtavinayak design is beautifully detailed. It brings such positive energy to our home during evening prayers.' },
      { name: 'Vikram P.', rating: 5, comment: 'Perfect for our daily Ganesh puja. The silver finish looks premium and the light is just the right brightness.' },
      { name: 'Sanjana M.', rating: 4, comment: 'Lovely product with good craftsmanship. The solar charging works well even on slightly cloudy days.' }
    ]
  };

  const orderTypes = [
    { id: 'normal', label: 'Individual Purchase', icon: FiUsers, minQty: 1 },
    { id: 'bulk', label: 'Bulk Order', icon: FiTruck, minQty: 10 },
    { id: 'corporate', label: 'Corporate Gifting', icon: FaBuilding, minQty: 20 }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  useEffect(() => {
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
      setPrevOrderType(orderType);
      setShowCorporateTerms(true);
    } else {
      setOrderType(type);
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
    addToGlobalCart(product, qty, orderType, getDiscountedPrice(product.price));
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

    const orderDetails = `${product.name} (${orderType}) - Qty: ${qty} - ₹${(
      parseFloat(getDiscountedPrice(product.price)) * qty
    ).toFixed(2)}`;

    const totalPrice = (
      parseFloat(getDiscountedPrice(product.price)) * qty
    ).toFixed(2);

    emailjs
      .send(
        "service_6steo4p",
        "template_b71e32a",
        {
          to_email: "shreesha.energy@gmail.com, aveezmanages@gmail.com",
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
        "keqjPA-FB_hoRljDf"
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

  const completeOrder = () => {
    if (validateForm()) {
      sendOrderEmail();
    }
  };

  const selectedOrderType = orderTypes.find(type => type.id === orderType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-800 relative overflow-x-hidden">
      
      <AnimatePresence>
        {showCorporateTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            role="dialog"
            aria-labelledby="corporate-terms-title"
            aria-describedby="corporate-terms-desc"
            onClick={(e) => {
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
              className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm shadow-lg border border-emerald-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-green-50/20" />
              <motion.button
                onClick={() => {
                  setOrderType(prevOrderType);
                  setShowCorporateTerms(false);
                }}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close corporate terms modal"
              >
                <FiX size={16} />
              </motion.button>
              <div className="relative z-10">
                <h3 
                  id="corporate-terms-title" 
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4 text-center"
                >
                  Corporate Gifting Terms
                </h3>
                <div 
                  id="corporate-terms-desc" 
                  className="text-gray-700 text-sm sm:text-base leading-tight mb-4 select-text"
                >
                  <p className="mb-2">Minimum 20 units required.</p>
                  <p className="mb-2">Customizable with premium packaging.</p>
                  <p>Enjoy customizable quantities, bespoke designs, and premium packaging tailored to your brand's needs. Pricing is slightly negotiable based on order volume and customization requirements.

By proceeding, you agree to collaborate with our team to finalize your bespoke gifting solution, ensuring a sustainable and impactful corporate gift that aligns with your vision.</p>
                </div>
                <div className="flex justify-between gap-2 sm:gap-3">
                  <motion.button
                    onClick={handleCorporateCancel}
                    className="flex-1 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-200 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={handleCorporateAccept}
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-emerald-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                  >
                    Agree
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="container mx-auto p-2 sm:p-3 md:p-4 relative">
        <AnimatePresence mode="wait">
          {checkoutStep === 'viewing' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-6"
            >
              <section className="relative flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6">
                <div className="w-full lg:w-1/2 relative">
                  <motion.div
                    className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-white via-emerald-50 to-green-100 shadow-md md:shadow-lg border border-emerald-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5"></div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-sm"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-sm"></div>
                    <div className="w-full h-full flex items-center justify-center p-1 sm:p-2 relative">
                      <AnimatePresence>
                        <motion.img
                          key={currentImageIndex}
                          src={product.images[currentImageIndex]}
                          alt={`${product.name} - View ${currentImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain filter drop-shadow-md md:drop-shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                      </AnimatePresence>
                    </div>
                    {product.images.length > 1 && (
                      <>
                        <motion.button
                          onClick={() => handleImageChange('prev')}
                          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-1 rounded-full shadow-md hover:bg-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 z-10"
                          whileHover={{ scale: 1.1, x: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiArrowLeft size={12} className="text-emerald-600" />
                        </motion.button>
                        <motion.button
                          onClick={() => handleImageChange('next')}
                          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-1 rounded-full shadow-md hover:bg-white border border-emerald-200 hover:border-emerald-300 transition-all duration-300 z-10"
                          whileHover={{ scale: 1.1, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiArrowRight size={12} className="text-emerald-600" />
                        </motion.button>
                      </>
                    )}
                  </motion.div>
                  {product.images.length > 1 && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                      {product.images.map((_, idx) => (
                        <motion.button
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex 
                              ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          whileHover={{ scale: 1.3 }}
                          onClick={() => setCurrentImageIndex(idx)}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-1 mb-1 sm:mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-600 font-medium">4.8 (234 reviews)</span>
                    </div>
                    <h1 className="text-lg sm:text-xl font-extrabold bg-black bg-clip-text text-transparent leading-tight mb-2 sm:mb-3">
                      {product.name}
                    </h1>
                    <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.price.toFixed(2)}</span>
                      <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        ₹{getDiscountedPrice(product.price)}
                      </span>
                      <span className="bg-red-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded-full font-bold text-[8px] sm:text-xs shadow-sm">
                        {getDiscountLabel()}
                      </span>
                    </div>
                  </motion.div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-tight">{product.description}</p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-2 sm:space-y-3"
                  >
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Order Type:</h3>
                    <div className="grid grid-cols-3 gap-1 sm:gap-2">
                      {orderTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          onClick={() => handleOrderTypeChange(type.id)}
                          className={`p-2 sm:p-3 rounded-lg border transition-all duration-300 flex flex-col items-center justify-center text-center ${
                            orderType === type.id
                              ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-sm shadow-emerald-500/25'
                              : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm'
                          }`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <type.icon 
                            size={12} 
                            className={`mb-0.5 sm:mb-1 ${
                              orderType === type.id ? 'text-emerald-600' : 'text-gray-400'
                            }`} 
                          />
                          <p className={`font-semibold text-[10px] sm:text-xs leading-tight ${
                            orderType === type.id ? 'text-emerald-700' : 'text-gray-600'
                          }`}>
                            {type.label}
                          </p>
                          <p className="text-[8px] sm:text-[10px] text-gray-500 mt-0.5">Min: {type.minQty}</p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">Quantity:</span>
                      <div className="flex items-center bg-white rounded-lg shadow-sm border border-emerald-200 overflow-hidden">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setQty((prev) => Math.max(selectedOrderType.minQty, prev - 1))}
                          disabled={qty <= selectedOrderType.minQty}
                          className={`p-1 sm:p-1.5 transition-colors duration-200 text-emerald-600 ${
                              qty <= selectedOrderType.minQty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-50'
                          }`}
                        >
                          <FiArrowLeft size={12} />
                        </motion.button>
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 font-bold text-xs sm:text-sm text-emerald-700 min-w-[24px] sm:min-w-[32px] text-center">
                          {qty}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setQty((prev) => prev + 1)}
                          className="p-1 sm:p-1.5 hover:bg-emerald-50 transition-colors duration-200 text-emerald-600"
                        >
                          <FiArrowRight size={12} />
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 sm:gap-2">
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={addToCart}
                        className="flex-1 bg-white border-2 border-emerald-500 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold shadow-md hover:bg-emerald-50 hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      >
                        <FiShoppingCart className="mr-1.5 w-4 h-4 sm:w-5 sm:h-5" /> 
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleBuyNow}
                        className="flex-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-bold shadow-md hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                      >
                        Buy Now 
                        <FiArrowRight className="ml-1.5 w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-emerald-100">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <FiShield className="text-emerald-500 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[10px] sm:text-xs font-medium">2-Year Warranty</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <FiCheck className="text-emerald-500 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span className="text-[10px] sm:text-xs font-medium">Eco-Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-4 sm:py-6">
                <motion.h2 
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Why Choose Our Solar Lamp?
                </motion.h2>
                <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {product.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-1.5 sm:space-x-2 p-2 sm:p-3 rounded-lg bg-gradient-to-br from-white to-emerald-50/30 shadow-sm border border-emerald-100 hover:border-emerald-200 transition-all duration-300"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 3 }}
                    >
                      <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-1 rounded-full shadow-sm">
                        <FiCheck className="text-white" size={12} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-700 leading-tight flex-1">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
              
              <SimilarProducts />
              
              <section className="py-4 sm:py-6 bg-gradient-to-br from-emerald-50 via-green-50/50 to-teal-50 rounded-xl shadow-md border border-emerald-200/50">
                <motion.h2 
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  What Our Customers Say
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 px-2 sm:px-4">
                  {product.reviews.map((review, idx) => (
                    <motion.div
                      key={idx}
                      className="p-2 sm:p-4 rounded-lg bg-white shadow-sm border border-emerald-100 hover:border-emerald-200 transition-all duration-300"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="flex space-x-0.5 mr-1 sm:mr-2">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              size={12}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-[10px] sm:text-xs text-gray-800">{review.name}</span>
                      </div>
                      <p className="text-gray-600 text-[9px] sm:text-[10px] leading-tight italic mb-2">"{review.comment}"</p>
                      <div className="w-full h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
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
              className="max-w-md mx-auto bg-white p-3 sm:p-4 rounded-xl shadow-md border border-emerald-200"
            >
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3 sm:mb-4 text-center">
                Order Summary
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-12 sm:w-16 h-12 sm:h-16 rounded-md object-cover border border-emerald-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-emerald-600 text-[10px] sm:text-xs font-medium">{orderTypes.find(t => t.id === orderType)?.label}</p>
                    <p className="text-gray-600 text-[8px] sm:text-[10px]">Quantity: {qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] sm:text-xs text-gray-500 line-through">₹{(product.price * qty).toFixed(2)}</p>
                    <p className="text-base sm:text-lg font-bold text-emerald-600">₹{(parseFloat(getDiscountedPrice(product.price)) * qty).toFixed(2)}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-2 sm:p-3 rounded-lg border border-emerald-200">
                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <span className="font-semibold text-gray-700">Total Amount:</span>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      ₹{(parseFloat(getDiscountedPrice(product.price)) * qty).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-600 mt-1">
                    <span>You save:</span>
                    <span className="font-semibold text-green-600">
                      ₹{((product.price - parseFloat(getDiscountedPrice(product.price))) * qty).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-2 sm:mt-3">
                  <motion.button
                    type="button"
                    onClick={() => setCheckoutStep('viewing')}
                    className="text-emerald-600 hover:text-emerald-800 transition font-medium text-xs sm:text-sm flex items-center"
                    whileHover={{ scale: 1.03, x: -3 }}
                  >
                    <FiArrowLeft className="mr-0.5" /> Back
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setCheckoutStep('address')}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold shadow-sm hover:shadow-emerald-500/25 transition-all duration-300 flex items-center text-xs sm:text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Shipping <FiArrowRight className="ml-0.5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
          {checkoutStep === 'address' && (
            <motion.div
              key="address"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto bg-white p-3 sm:p-4 rounded-xl shadow-md border border-emerald-200"
            >
              <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-3 sm:mb-4 text-center">
                Shipping Information
              </h2>
              <form className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">Full Name *</label>
                    <motion.input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-200'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      placeholder="Full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">Contact Number *</label>
                    <motion.input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                        errors.contact ? 'border-red-500' : 'border-gray-200'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      placeholder="10-digit number"
                    />
                    {errors.contact && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.contact}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">Email Address *</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    whileFocus={{ scale: 1.02 }}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.email}</p>}
                </div>
                {orderType === 'corporate' && (
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">Company Name *</label>
                    <motion.input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                        errors.company ? 'border-red-500' : 'border-gray-200'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      placeholder="Company name"
                    />
                    {errors.company && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.company}</p>}
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">Complete Address *</label>
                  <motion.textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                    className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 resize-none ${
                      errors.address ? 'border-red-500' : 'border-gray-200'
                    }`}
                    whileFocus={{ scale: 1.02 }}
                    placeholder="House/Flat, Street, Area"
                  />
                  {errors.address && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">City *</label>
                    <motion.input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                        errors.city ? 'border-red-500' : 'border-gray-200'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      placeholder="City"
                    />
                    {errors.city && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 font-semibold text-xs sm:text-sm">ZIP Code *</label>
                    <motion.input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className={`w-full p-2 sm:p-3 border rounded-md bg-gray-50 focus:bg-white focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 ${
                        errors.zip ? 'border-red-500' : 'border-gray-200'
                      }`}
                      whileFocus={{ scale: 1.02 }}
                      placeholder="PIN Code"
                    />
                    {errors.zip && <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.zip}</p>}
                  </div>
                </div>
                <div className="flex justify-between mt-2 sm:mt-3">
                  <motion.button
                    type="button"
                    onClick={() => setCheckoutStep('summary')}
                    className="text-emerald-600 hover:text-emerald-800 transition font-medium text-xs sm:text-sm flex items-center"
                    whileHover={{ scale: 1.03, x: -3 }}
                  >
                    <FiArrowLeft className="mr-0.5" /> Back
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={completeOrder}
                    disabled={isSending}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold shadow-sm hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-xs sm:text-sm"
                    whileHover={{ scale: isSending ? 1 : 1.03 }}
                    whileTap={{ scale: isSending ? 1 : 0.97 }}
                  >
                    {isSending ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Complete Order <FiCheck className="ml-0.5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
          {checkoutStep === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="max-w-md mx-auto bg-gradient-to-br from-white via-emerald-50 to-green-50 p-4 sm:p-6 rounded-xl shadow-md text-center border-2 border-emerald-400"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.2, stiffness: 200, damping: 10 }}
                className="mb-3 sm:mb-4"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-sm opacity-30 animate-pulse"></div>
                  <FiCheck className="relative text-emerald-500 text-4xl sm:text-5xl mx-auto bg-white rounded-full p-2 sm:p-3 shadow-sm border border-emerald-200" />
                </div>
              </motion.div>
              <motion.h2 
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Order Placed!
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2 sm:space-y-3 mb-3 sm:mb-4"
              >
                <p className="text-xs sm:text-sm text-gray-700 leading-tight">
                  Your solar lamp order is confirmed!
                </p>
                <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm border border-emerald-200 space-y-1">
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">Order Details:</p>
                  <p className="text-emerald-600 text-[10px] sm:text-xs font-medium">Order ID: #{Date.now().toString().slice(-6)}</p>
                  <p className="text-gray-600 text-[8px] sm:text-[10px]">Contact within 24 hours</p>
                  <p className="text-gray-600 text-[8px] sm:text-[10px]">Delivery: 8-10 days</p>
                </div>
              </motion.div>
              <motion.button
                onClick={() => {
                  setFormData({ fullName: '', address: '', city: '', zip: '', contact: '', email: '', company: '' });
                  setCheckoutStep('viewing');
                  setQty(1);
                  setOrderType('normal');
                }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold shadow-sm hover:shadow-emerald-500/25 transition-all duration-300 flex items-center mx-auto text-xs sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Shop More <FiArrowRight className="ml-0.5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="w-full bg-gradient-to-br from-emerald-50 to-green-50 py-2 text-center text-xs text-gray-600">
        <p>Powered by <span className="font-semibold text-emerald-600">xAI</span></p>
      </footer>
    </div>
  );
};

export default AshtavinayakGanpati;