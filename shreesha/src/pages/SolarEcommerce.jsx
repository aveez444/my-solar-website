import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiCheck, FiArrowRight, FiX } from 'react-icons/fi';

const SolarEcommerce = () => {
  const [cart, setCart] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'address', 'payment', 'confirmation'
  const [currentImages, setCurrentImages] = useState({}); // Track current image index for each product
  const [formData, setFormData] = useState({ fullName: '', address: '', city: '', zip: '' });
  const [errors, setErrors] = useState({});

  const solarProducts = [
    {
      id: 1,
      name: 'Premium Solar Panel 300W',
      price: 299.99,
      description: 'High efficiency monocrystalline panel',
      images: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500',
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=500'
      ]
    },
    {
      id: 2,
      name: 'Solar Panel Kit 500W',
      price: 499.99,
      description: 'Complete home solar kit with inverter',
      images: [
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500',
        'https://images.unsplash.com/photo-1473341304170-971dccb5acdf?w=500'
      ]
    },
    {
      id: 3,
      name: 'Portable Solar Charger',
      price: 129.99,
      description: 'Compact solar charger for outdoor use',
      images: [
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=500',
        'https://images.unsplash.com/photo-1503551723145-6c0a9e9092e3?w=500',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500'
      ]
    },
    {
      id: 4,
      name: 'Solar Battery Pack 10kWh',
      price: 799.99,
      description: 'High-capacity battery for solar storage',
      images: [
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=500',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500'
      ]
    },
    {
      id: 5,
      name: 'Solar Roof Tiles',
      price: 1499.99,
      description: 'Aesthetic solar tiles for modern homes',
      images: [
        'https://images.unsplash.com/photo-1503551723145-6c0a9e9092e3?w=500',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500',
        'https://images.unsplash.com/photo-1473341304170-971dccb5acdf?w=500'
      ]
    },
    {
      id: 6,
      name: 'Solar Water Heater',
      price: 399.99,
      description: 'Eco-friendly water heating solution',
      images: [
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500',
        'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=500'
      ]
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Calculate discounted price (50% off)
  const getDiscountedPrice = (price) => (price * 0.5).toFixed(2);

  // Total price based on discounted prices
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * 0.5), 0);

  const handleImageSwipe = (productId, direction) => {
    setCurrentImages(prev => {
      const currentIndex = prev[productId] || 0;
      const newIndex = direction === 'next'
        ? (currentIndex + 1) % 3
        : (currentIndex - 1 + 3) % 3;
      return { ...prev, [productId]: newIndex };
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zip) newErrors.zip = 'ZIP Code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCheckout = () => {
    if (validateForm()) {
      setCheckoutStep('payment');
    }
  };

  const completeOrder = () => {
    setCheckoutStep('confirmation');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            SolarWorld
          </motion.h1>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <FiShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="absolute -top-2 -right-2 bg-black text-green-500 border border-green-500 rounded-full w-5 h-5 flex items-center justify-center text-xs"
              >
                {cart.length}
              </motion.span>
            )}
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <AnimatePresence mode="wait">
          {checkoutStep === 'cart' && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-green-500 mb-8"
              >
                Solar Products
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {solarProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -10, boxShadow: '0 15px 25px rgba(0, 255, 0, 0.2)' }}
                    className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <AnimatePresence>
                        <motion.img 
                          key={currentImages[product.id] || 0}
                          src={product.images[currentImages[product.id] || 0]} 
                          alt={product.name}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      <button 
                        onClick={() => handleImageSwipe(product.id, 'prev')}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      >
                        ←
                      </button>
                      <button 
                        onClick={() => handleImageSwipe(product.id, 'next')}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      >
                        →
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                      <p className="text-gray-400 mt-2">{product.description}</p>
                      <div className="mt-4 flex flex-col">
                        <div className="flex items-center space-x-2">
                          <s className="text-lg text-gray-500">${product.price.toFixed(2)}</s>
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">50% off</span>
                        </div>
                        <span className="text-2xl font-bold text-green-500 mt-1">${getDiscountedPrice(product.price)}</span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => addToCart(product)}
                          className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition self-end"
                          whileHover={{ scale: 1.05 }}
                        >
                          Add to Cart
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {cart.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 bg-gray-900 p-6 rounded-lg border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Your Cart</h3>
                  <AnimatePresence>
                    {cart.map(item => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-between items-center py-3 border-b border-gray-700"
                      >
                        <div>
                          <h4 className="font-medium text-white">{item.name}</h4>
                          <div className="flex items-center space-x-2">
                            <s className="text-gray-500">${item.price.toFixed(2)}</s>
                            <span className="text-green-500">${getDiscountedPrice(item.price)}</span>
                          </div>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-white">Total:</span>
                    <span className="text-xl font-bold text-green-500">${totalPrice.toFixed(2)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCheckoutStep('address')}
                    className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Proceed to Checkout</span>
                    <FiArrowRight />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}

          {checkoutStep === 'address' && (
            <motion.div
              key="address"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-green-500 mb-6">Shipping Address</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-1">Full Name</label>
                  <motion.input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded bg-gray-800 text-white border-gray-600 ${errors.fullName ? 'border-red-500' : ''}`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Address</label>
                  <motion.textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full p-2 border rounded bg-gray-800 text-white border-gray-600 ${errors.address ? 'border-red-500' : ''}`}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1">City</label>
                    <motion.input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded bg-gray-800 text-white border-gray-600 ${errors.city ? 'border-red-500' : ''}`}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">ZIP Code</label>
                    <motion.input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded bg-gray-800 text-white border-gray-600 ${errors.zip ? 'border-red-500' : ''}`}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    Back to Cart
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={handleCheckout}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                  >
                    Continue
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}

          {checkoutStep === 'payment' && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-green-500 mb-6">Payment</h2>
              
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <h3 className="font-bold text-white mb-2">Order Summary</h3>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-green-500">${getDiscountedPrice(item.price)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold text-white mt-2">
                  <span>Total:</span>
                  <span className="text-green-500">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-600 rounded-lg p-4 bg-gray-800"
                >
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-green-600" />
                    <span className="text-white">Credit Card</span>
                  </label>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-600 rounded-lg p-4 bg-gray-800"
                >
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="text-green-600" />
                    <span className="text-white">PayPal</span>
                  </label>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-600 rounded-lg p-4 bg-gray-800"
                >
                  <label className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      name="payment" 
                      className="text-green-600"
                      onChange={() => setShowScanner(true)}
                    />
                    <span className="text-white">Scan to Pay</span>
                  </label>
                </motion.div>
              </div>

              {showScanner && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="mt-6 p-6 bg-black rounded-lg flex flex-col items-center border border-green-500"
                >
                  <div className="w-64 h-64 bg-gray-800 mb-4 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 border-2 border-green-500"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 bg-white bg-opacity-10 flex items-center justify-center">
                        <FiCheck className="text-green-500 text-4xl" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-4">Scan this QR code to complete payment</p>
                </motion.div>
              )}

              <div className="flex justify-between mt-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setCheckoutStep('address')}
                  className="text-gray-400 hover:text-gray-200"
                >
                  Back
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={completeOrder}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                >
                  <span>Complete Order</span>
                  <FiCheck />
                </motion.button>
              </div>
            </motion.div>
          )}

          {checkoutStep === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-md border border-green-500 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              >
                <FiCheck className="text-green-500 text-6xl mx-auto mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold text-green-500 mb-4">Order Confirmed!</h2>
              <p className="text-gray-300 mb-6">Thank you for your purchase. Your order will be shipped soon.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCart([]);
                  setCheckoutStep('cart');
                }}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Back to Shopping
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default SolarEcommerce;