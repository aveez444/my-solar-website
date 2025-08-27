
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus, FiMinus, FiArrowRight, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { FaBuilding, FaUsers } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { useCart } from './CartContext';
import CheckoutModal from './CheckoutModal';

const Cart = ({ isOpen, onClose, onProceedToCheckout }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getItemsByOrderType } = useCart();
  const [expandedSections, setExpandedSections] = useState({
    normal: true,
    bulk: true,
    corporate: true
  });

  const groupedItems = getItemsByOrderType();

  const orderTypeConfig = {
    normal: {
      icon: FaUsers,
      label: 'Individual Purchase',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    bulk: {
      icon: FiTruck,
      label: 'Bulk Orders',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    corporate: {
      icon: FaBuilding,
      label: 'Corporate Gifting',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getTotalByOrderType = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl border border-emerald-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50">
            <div>
              <h3 className="text-2xl font-bold text-emerald-700">Shopping Cart</h3>
              <p className="text-sm text-gray-600">{cart.totalItems} item{cart.totalItems !== 1 ? 's' : ''}</p>
            </div>
            <div className="flex items-center space-x-3">
              {cart.items.length > 0 && (
                <motion.button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Clear Cart"
                >
                  <FiTrash2 size={20} />
                </motion.button>
              )}
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>

          {/* Cart Content */}
          <div className="overflow-y-auto max-h-[60vh] p-6">
            {cart.items.length === 0 ? (
              <div className="text-center py-12">
                <FiShoppingCart size={64} className="text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500 mb-2">Your cart is empty</p>
                <p className="text-gray-400">Add some eco-friendly products to get started!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {Object.entries(orderTypeConfig).map(([orderType, config]) => {
                  const items = groupedItems[orderType];
                  if (items.length === 0) return null;

                  return (
                    <div key={orderType} className={`rounded-2xl border-2 ${config.borderColor} ${config.bgColor}`}>
                      {/* Section Header */}
                      <motion.button
                        onClick={() => toggleSection(orderType)}
                        className="w-full p-4 flex items-center justify-between hover:bg-white/50 transition-colors duration-200 rounded-t-xl"
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex items-center space-x-3">
                          <config.icon className={`${config.color} text-2xl`} />
                          <div className="text-left">
                            <h4 className={`font-semibold ${config.color}`}>{config.label}</h4>
                            <p className="text-sm text-gray-500">{items.length} item{items.length !== 1 ? 's' : ''}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`font-bold ${config.color}`}>₹{getTotalByOrderType(items).toFixed(2)}</span>
                          <motion.div
                            animate={{ rotate: expandedSections[orderType] ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiArrowRight className={config.color} />
                          </motion.div>
                        </div>
                      </motion.button>

                      {/* Section Items */}
                      <AnimatePresence>
                        {expandedSections[orderType] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-white/50"
                          >
                            <div className="p-4 space-y-3">
                              {items.map((item) => (
                                <motion.div
                                  key={item.id}
                                  className="flex items-center space-x-4 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                  layout
                                >
                                  <img 
                                    src={item.product.images[0]} 
                                    alt={item.product.name}
                                    className="w-16 h-16 rounded-xl object-cover border-2 border-emerald-200"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-800 text-sm truncate">{item.product.name}</h4>
                                    <p className="text-xs text-gray-500">₹{item.price} each</p>
                                    <p className="font-bold text-emerald-700">₹{(item.price * item.quantity).toFixed(2)}</p>
                                  </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
                                      <motion.button
                                        onClick={() => {
                                          // Get the minimum quantity for this order type
                                          const minQty = item.orderType === 'bulk' ? 10 : item.orderType === 'corporate' ? 50 : 1;
                                          if (item.quantity > minQty) {
                                            updateQuantity(item.id, item.quantity - 1);
                                          }
                                        }}
                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-emerald-600 disabled:opacity-50"
                                        disabled={item.quantity <= (item.orderType === 'bulk' ? 10 : item.orderType === 'corporate' ? 50 : 1)}
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <FiMinus size={16} />
                                      </motion.button>
                                      <span className="text-sm font-semibold min-w-[24px] text-center">{item.quantity}</span>
                                      <motion.button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-emerald-600"
                                        whileTap={{ scale: 0.9 }}
                                      >
                                        <FiPlus size={16} />
                                      </motion.button>
                                    </div>
                    
                                   

                                  
                                  <motion.button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <FiX size={16} />
                                  </motion.button>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="p-6 border-t border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">Total Amount:</span>
                <span className="text-3xl font-bold text-emerald-700">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <motion.button
                onClick={handleProceedToCheckout}  // Changed this line
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout 
                <FiArrowRight className="ml-3" size={20} />
              </motion.button>
              {/* Add CheckoutModal */}
              <CheckoutModal 
                isOpen={showCheckout} 
                onClose={() => setShowCheckout(false)} 
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;