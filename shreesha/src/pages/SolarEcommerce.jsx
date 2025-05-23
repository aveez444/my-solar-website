import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiCheck, FiArrowRight, FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const SolarEcommerce = () => {
  const [cart, setCart] = useState([]);
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [currentImages, setCurrentImages] = useState({});
  const [formData, setFormData] = useState({ 
    fullName: '', 
    address: '', 
    city: '', 
    zip: '',
    contact: '',
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const solarProducts = [
  // Solar Lamps
  {
    id: 1,
    name: 'Small Night Lamp',
    price: 499,
    description: '3W solar-powered LED lamp with 6-hour backup, automatic dusk-to-dawn operation',
    images: [
      'https://m.media-amazon.com/images/I/71h6XJYV3BL._AC_UF1000,1000_QL80_.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2023/5/306705519/CI/IT/GT/19182200/solar-night-lamp.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/xif0q/solar-lamp/2/5/z/small-solar-lights-for-home-outdoor-garden-lamps-waterproof-solar-original-imagg9j4hzvfh9gz.jpeg'
    ]
  },
  {
    id: 2,
    name: 'Big Night Lamp',
    price: 899,
    description: '5W high-lumen solar lamp with 12-hour backup, IP65 waterproof for outdoor use',
    images: [
      'https://rukminim2.flixcart.com/image/850/1000/xif0q/solar-lamp/e/z/6/big-1-solar-lights-for-home-outdoor-garden-lamps-waterproof-solar-original-imagg9j4mz6y9jhy.jpeg',
      'https://m.media-amazon.com/images/I/61L+2J5QnVL._AC_UF1000,1000_QL80_.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2023/5/306705519/CI/IT/GT/19182200/solar-night-lamp.jpg'
    ]
  },

  // Solar Samai
  {
    id: 3,
    name: 'Solar Silver Devdas Samai',
    price: 1299,
    description: 'Traditional Devdas-style samai with 20 LED lights, 8-hour runtime',
    images: [
      'https://m.media-amazon.com/images/I/71x6b0Nv3QL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kwv0djk0/solar-lamp/8/n/z/devdas-samai-solar-silver-samai-solar-light-for-home-temple-original-imag9t7fhzhtzfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/VT/VZ/XT/19182200/solar-dev-das-samai.jpg'
    ]
  },
  {
    id: 4,
    name: 'Solar Silver Panchpakali Samai',
    price: 1499,
    description: 'Five-flame design with copper finish, perfect for puja rooms',
    images: [
      'https://m.media-amazon.com/images/I/61WXv6JZJVL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/4/z/y/panchpakali-samai-solar-silver-samai-solar-light-for-home-temple-original-imagc3h2mzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-panchpakali-samai.jpg'
    ]
  },
  {
    id: 5,
    name: 'Solar Brass Samai',
    price: 1799,
    description: 'Premium brass construction with antique finish, 30 LEDs',
    images: [
      'https://m.media-amazon.com/images/I/71x6b0Nv3QL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/brass-samai-solar-silver-samai-solar-light-for-home-temple-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-brass-samai.jpg'
    ]
  },

  // Solar Diya
  {
    id: 6,
    name: 'Solar Silver Ashtavinayak Ganpati Diya',
    price: 799,
    description: 'Eight-faced Ganpati design with warm white LEDs',
    images: [
      'https://m.media-amazon.com/images/I/61WXv6JZJVL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/ashtavinayak-ganpati-diya-solar-silver-diya-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-ganpati-diya.jpg'
    ]
  },
  {
    id: 7,
    name: 'Solar Silver Laxmi Diya',
    price: 899,
    description: 'Goddess Laxmi motif with golden LEDs, automatic operation',
    images: [
      'https://m.media-amazon.com/images/I/71x6b0Nv3QL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/laxmi-diya-solar-silver-diya-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-laxmi-diya.jpg'
    ]
  },
  {
    id: 8,
    name: 'Solar Silver Niranjan Diya',
    price: 699,
    description: 'Classic diya design with flickering LED flame effect',
    images: [
      'https://m.media-amazon.com/images/I/61WXv6JZJVL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/niranjan-diya-solar-silver-diya-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-niranjan-diya.jpg'
    ]
  },

  // Solar Candles
  {
    id: 9,
    name: 'Solar Candle Sticks',
    price: 599,
    description: 'Set of 2 candle sticks with realistic flickering effect',
    images: [
      'https://m.media-amazon.com/images/I/71x6b0Nv3QL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/candle-sticks-solar-candles-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-candle-sticks.jpg'
    ]
  },
  {
    id: 10,
    name: 'Solar Cup Candle',
    price: 399,
    description: 'Decorative cup-shaped solar candle with 10-hour runtime',
    images: [
      'https://m.media-amazon.com/images/I/61WXv6JZJVL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/cup-candle-solar-candles-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-cup-candle.jpg'
    ]
  },

  // Solar Outdoor Lights
  {
    id: 11,
    name: 'Solar Wall Light',
    price: 799,
    description: '20W motion-sensor wall light with 120° detection angle',
    images: [
      'https://m.media-amazon.com/images/I/71x6b0Nv3QL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/wall-light-solar-outdoor-light-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-wall-light.jpg'
    ]
  },
  {
    id: 12,
    name: 'Solar Gate Light',
    price: 999,
    description: 'Weatherproof gate light with dual-brightness settings (15W/30W)',
    images: [
      'https://m.media-amazon.com/images/I/61WXv6JZJVL._AC_UF1000,1000_QL80_.jpg',
      'https://rukminim2.flixcart.com/image/850/1000/kzeqavk0/solar-lamp/9/z/c/gate-light-solar-outdoor-light-solar-light-for-home-original-imagc3h2jzshyfzz.jpeg',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/324610343/SE/IG/ZT/19182200/solar-gate-light.jpg'
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


const sendOrderEmail = (orderItems) => {
  setIsSending(true);
  
  // Format order items as plain text
  const orderItemsText = orderItems.map(item => 
    `- ${item.name} (Qty: 1) - ₹${getDiscountedPrice(item.price)}`
  ).join('\n');

  const emailParams = {
    customer_name: formData.fullName,
    customer_phone: formData.contact,
    shipping_address: `${formData.address}, ${formData.city}, ${formData.zip}`,
    order_items: orderItemsText,  // Now sending as plain text
    order_total: `₹${totalPrice.toFixed(2)}`,
    order_date: new Date().toLocaleDateString('en-IN')
  };

  console.log("Sending email with params:", emailParams); // Debug log

  emailjs.send(
    "service_e0owvxr",
    "template_luya5li",
    emailParams,
    "Wh7iX-UXO1TeE9sgj"
  )
  .then(() => {
    console.log("Email sent successfully!");
    setCheckoutStep('confirmation');
  })
  .catch((err) => {
    console.error("Email failed to send:", err);
    alert("Order placed! Email confirmation failed. Please note your order details.");
    setCheckoutStep('confirmation');
  })
  .finally(() => setIsSending(false));
};

  const completeOrder = () => {
  if (validateForm()) {
    sendOrderEmail(cart); // Pass the cart array directly
  }
};

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zip) newErrors.zip = 'ZIP Code is required';
    if (!formData.contact) newErrors.contact = 'Contact Number is required';
    
    // Validate contact number
    if (formData.contact && !/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Enter valid 10-digit number';
    }
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

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      

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
                          <s className="text-lg text-gray-500">₹{product.price.toFixed(2)}</s>
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">50% off</span>
                        </div>
                        <span className="text-2xl font-bold text-green-500 mt-1">₹{getDiscountedPrice(product.price)}</span>
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
                            <s className="text-gray-500">₹{item.price.toFixed(2)}</s>
                            <span className="text-green-500">₹{getDiscountedPrice(item.price)}</span>
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
                    <span className="text-xl font-bold text-green-500">₹{totalPrice.toFixed(2)}</span>
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
      <h2 className="text-2xl font-bold text-green-500 mb-6">Shipping Details</h2>
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
          <label className="block text-gray-300 mb-1">Contact Number*</label>
          <motion.input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="10-digit mobile number"
            className={`w-full p-2 border rounded bg-gray-800 text-white border-gray-600 ${errors.contact ? 'border-red-500' : ''}`}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
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
            onClick={completeOrder}
            disabled={isSending}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2 disabled:bg-gray-600"
          >
            {isSending ? 'Sending...' : (
              <>
                <span>Complete Order</span>
                <FiCheck />
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