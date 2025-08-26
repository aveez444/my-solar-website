import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from './CartContext';

const FloatingCartButton = ({ onClick }) => {
  const { cart } = useCart();

  return (
    <AnimatePresence>
      {cart.totalItems > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={onClick}
          className="fixed top-20 right-4 z-50 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiShoppingCart size={24} />
          <motion.span 
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
            key={cart.totalItems}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {cart.totalItems}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;