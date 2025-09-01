import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, FiArrowLeft, FiArrowRight, FiCheck, FiUser, 
  FiMail, FiPhone, FiMapPin 
} from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';
import { useCart } from './CartContext';
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, clearCart, getTotalPrice, getItemsByOrderType } = useCart();
  const [checkoutStep, setCheckoutStep] = useState('summary'); // 'summary', 'shipping', 'confirmation'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    company: '',
    specialInstructions: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Reset checkout when modal closes
  const handleClose = () => {
    setCheckoutStep('summary');
    setFormData({
      fullName: '', email: '', phone: '', address: '', city: '',
      state: '', zipCode: '', company: '', specialInstructions: ''
    });
    setErrors({});
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Check if corporate orders need company name
    const groupedItems = getItemsByOrderType();
    if (groupedItems.corporate.length > 0 && !formData.company.trim()) {
      newErrors.company = 'Company name is required for corporate orders';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Send Order Email ---
  const sendOrderEmail = async () => {
    setIsProcessing(true);
  
    // Generate grouped items and details
    const groupedItems = getItemsByOrderType();
    const orderDate = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  
    // Generate order ID
    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
  
    // Format order details
    let orderDetails = "";
  
    if (groupedItems.normal.length > 0) {
      orderDetails += "\n=== INDIVIDUAL PURCHASES ===\n";
      groupedItems.normal.forEach((item) => {
        orderDetails += `• ${item.product.name} - Qty: ${
          item.quantity
        } - ₹${item.price} each = ₹${(item.price * item.quantity).toFixed(2)}\n`;
      });
    }
  
    if (groupedItems.bulk.length > 0) {
      orderDetails += "\n=== BULK ORDERS ===\n";
      groupedItems.bulk.forEach((item) => {
        orderDetails += `• ${item.product.name} - Qty: ${
          item.quantity
        } - ₹${item.price} each = ₹${(item.price * item.quantity).toFixed(2)}\n`;
      });
    }
  
    if (groupedItems.corporate.length > 0) {
      orderDetails += "\n=== CORPORATE GIFTING ===\n";
      groupedItems.corporate.forEach((item) => {
        orderDetails += `• ${item.product.name} - Qty: ${
          item.quantity
        } - ₹${item.price} each = ₹${(item.price * item.quantity).toFixed(2)}\n`;
      });
    }
  
    // Build email message
    const message = `
  🌟 NEW ORDER RECEIVED 🌟
  
  Order ID: ${orderId}
  Order Date: ${orderDate}
  
  👤 CUSTOMER DETAILS:
  Name: ${formData.fullName}
  Email: ${formData.email}
  Phone: ${formData.phone}
  ${formData.company ? `Company: ${formData.company}` : ""}
  
  📍 SHIPPING ADDRESS:
  ${formData.address}
  ${formData.city}, ${formData.state} ${formData.zipCode}
  
  📦 ORDER DETAILS:
  ${orderDetails}
  
  💰 TOTAL AMOUNT: ₹${getTotalPrice().toFixed(2)}
  
  ${
    formData.specialInstructions
      ? `📝 SPECIAL INSTRUCTIONS:\n${formData.specialInstructions}`
      : ""
  }
  
  ---
  This order was placed through your solar products website.
  Please contact the customer within 24 hours to confirm the order.
    `;
  
    try {
      // ✅ Use your actual EmailJS credentials
      const response = await emailjs.send(
        "service_6steo4p", // ⚡ Service ID
        "template_b71e32a", // ⚡ Template ID
        {
          to_email: "shreesha.energy@gmail.com, aveezmanages@gmail.com", // ✅ Recipients
          name: formData.fullName,
          email: formData.email,
          message: message,
          order_id: orderId,
          order_date: orderDate,
          total: `₹${getTotalPrice().toFixed(2)}`,
        },
        "keqjPA-FB_hoRljDf" // ⚡ Public key
      );
  
      console.log("✅ Email sent:", response.status, response.text);
      setCheckoutStep("confirmation");
  
      // Store order for confirmation page
      sessionStorage.setItem(
        "lastOrder",
        JSON.stringify({
          orderId,
          customerName: formData.fullName,
          totalAmount: getTotalPrice().toFixed(2),
          itemCount: cart.totalItems,
        })
      );
    } catch (error) {
      console.error("❌ Email send failed:", error);
      alert("There was an error sending your order email. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  // --- Place Order ---
  const handlePlaceOrder = () => {
    if (validateForm()) {
      sendOrderEmail();
    }
  };
  

  const handleOrderComplete = () => {
    clearCart();
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl border border-emerald-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50">
            <h2 className="text-2xl font-bold text-emerald-700">
              {checkoutStep === 'summary' && 'Order Summary'}
              {checkoutStep === 'shipping' && 'Shipping Information'}
              {checkoutStep === 'confirmation' && 'Order Confirmed!'}
            </h2>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-2">
              <FiX size={24} />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[75vh]">
            <AnimatePresence mode="wait">
              {/* Order Summary Step */}
              {checkoutStep === 'summary' && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="p-6 space-y-6"
                >
                  {Object.entries({
                    normal: { label: 'Individual Purchases', color: 'text-blue-600', bg: 'bg-blue-50' },
                    bulk: { label: 'Bulk Orders', color: 'text-orange-600', bg: 'bg-orange-50' },
                    corporate: { label: 'Corporate Gifting', color: 'text-purple-600', bg: 'bg-purple-50' }
                  }).map(([orderType, config]) => {
                    const items = getItemsByOrderType()[orderType];
                    if (items.length === 0) return null;

                    const categoryTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

                    return (
                      <div key={orderType} className={`${config.bg} rounded-2xl p-4 border border-gray-200`}>
                        <h3 className={`${config.color} font-semibold text-lg mb-3`}>{config.label}</h3>
                        <div className="space-y-3">
                          {items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <img 
                                  src={item.product.images[0]} 
                                  alt={item.product.name}
                                  className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-800">{item.product.name}</h4>
                                  <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
                                </div>
                              </div>
                              <span className="font-semibold text-emerald-600">₹{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
                          <span className="font-semibold text-gray-700">Subtotal:</span>
                          <span className={`font-bold text-lg ${config.color}`}>₹{categoryTotal.toFixed(2)}</span>
                        </div>
                      </div>
                    );
                  })}

                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border-2 border-emerald-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-gray-700">Grand Total:</span>
                      <span className="text-3xl font-bold text-emerald-600">₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{cart.totalItems} item{cart.totalItems !== 1 ? 's' : ''} • Free shipping included</p>
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      onClick={() => setCheckoutStep('shipping')}
                      className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Continue to Shipping <FiArrowRight className="ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Shipping Information Step */}
              {checkoutStep === 'shipping' && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiUser className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiMail className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiPhone className="inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="10-digit phone number"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {getItemsByOrderType().corporate.length > 0 && (
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          <FaBuilding className="inline mr-2" />
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                            errors.company ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="Your company name"
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <FiMapPin className="inline mr-2" />
                      Complete Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all resize-none ${
                        errors.address ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="House/Flat No., Street, Area, Landmark"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                          errors.city ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Your city"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                          errors.state ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Your state"
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full p-3 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all ${
                          errors.zipCode ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="PIN Code"
                      />
                      {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Special Instructions (Optional)</label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all resize-none"
                      placeholder="Any special delivery instructions, preferences, or notes..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <motion.button
                      onClick={() => setCheckoutStep('summary')}
                      className="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center"
                      whileHover={{ x: -5 }}
                    >
                      <FiArrowLeft className="mr-2" /> Back to Summary
                    </motion.button>

                    <motion.button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                      whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Processing Order...
                        </>
                      ) : (
                        <>
                          Place Order <FiCheck className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Order Confirmation Step */}
              {checkoutStep === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', delay: 0.2, stiffness: 200, damping: 10 }}
                    className="mb-6"
                  >
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                      <FiCheck className="relative text-emerald-500 text-8xl mx-auto bg-white rounded-full p-4 shadow-2xl border-4 border-emerald-200" />
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Order Placed Successfully!
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-4 mb-8"
                  >
                    <p className="text-xl text-gray-700">Thank you for choosing our eco-friendly solar products!</p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-200 max-w-md mx-auto">
                      {(() => {
                        const orderData = JSON.parse(sessionStorage.getItem('lastOrder') || '{}');
                        return (
                          <div className="space-y-2">
                            <p className="font-semibold text-emerald-700">Order Details:</p>
                            <p className="text-gray-600">Order ID: #{orderData.orderId}</p>
                            <p className="text-gray-600">Total: ₹{orderData.totalAmount}</p>
                            <p className="text-gray-600">{orderData.itemCount} item{orderData.itemCount !== 1 ? 's' : ''}</p>
                          </div>
                        );
                      })()}
                    </div>
                    
                    <div className="text-gray-600 space-y-2">
                      <p className="font-medium">✅ Order confirmation sent to your email</p>
                      <p>📞 We'll contact you within 24 hours</p>
                      <p>🚚 Expected delivery: 8-10 business days</p>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    onClick={handleOrderComplete}
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckoutModal;