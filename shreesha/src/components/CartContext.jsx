import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product, quantity, orderType, price } = action.payload;
      
      // Check if item with same product and orderType already exists
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.orderType === orderType
      );

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += quantity;
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + quantity
        };
      } else {
        // Add new item
        const newItem = {
          id: Date.now() + Math.random(), // Unique ID
          product,
          quantity,
          orderType,
          price: parseFloat(price),
          addedAt: new Date().toISOString()
        };
        
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + quantity
        };
      }
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const itemToRemove = state.items.find(item => item.id === action.payload.itemId);
      if (!itemToRemove) return state;

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.itemId),
        totalItems: state.totalItems - itemToRemove.quantity
      };
    }

// In CartContext.jsx, modify the UPDATE_QUANTITY case in the cartReducer:

case CART_ACTIONS.UPDATE_QUANTITY: {
  const { itemId, newQuantity } = action.payload;
  const itemIndex = state.items.findIndex(item => item.id === itemId);
  
  if (itemIndex < 0) return state;
  
  // Get the minimum quantity based on order type
  const item = state.items[itemIndex];
  const minQty = item.orderType === 'bulk' ? 10 : item.orderType === 'corporate' ? 20 : 1;
  
  // Don't allow quantity below minimum
  if (newQuantity < minQty) return state;

  const updatedItems = [...state.items];  
  const oldQuantity = updatedItems[itemIndex].quantity;
  updatedItems[itemIndex].quantity = newQuantity;

  return {
    ...state,
    items: updatedItems,
    totalItems: state.totalItems - oldQuantity + newQuantity
  };
}

    case CART_ACTIONS.CLEAR_CART:
      return {
        items: [],
        totalItems: 0
      };

    case CART_ACTIONS.LOAD_CART:
      return action.payload;

    default:
      return state;
  }
};

// Helper function to check cart expiration
const checkCartExpiration = () => {
  const expirationTime = localStorage.getItem('solar-cart-expiration');
  if (expirationTime && Date.now() > parseInt(expirationTime)) {
    localStorage.removeItem('solar-cart');
    localStorage.removeItem('solar-cart-expiration');
    return true;
  }
  return false;
};

// Initial cart state
const initialCartState = {
  items: [],
  totalItems: 0
};

// Create Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    // Check if cart has expired first
    if (!checkCartExpiration()) {
      const savedCart = localStorage.getItem('solar-cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
        } catch (error) {
          console.error('Error loading cart from localStorage:', error);
        }
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('solar-cart', JSON.stringify(cart));
      
      // Set expiration time (6 hours from now)
      const expirationTime = Date.now() + 6 * 60 * 60 * 1000; // 6 hours
      localStorage.setItem('solar-cart-expiration', expirationTime.toString());
    }
  }, [cart, isLoaded]);

  // Check for expired cart on app load
  useEffect(() => {
    const expirationTime = localStorage.getItem('solar-cart-expiration');
    if (expirationTime && Date.now() > parseInt(expirationTime)) {
      // Cart has expired, clear it
      dispatch({ type: CART_ACTIONS.CLEAR_CART });
      localStorage.removeItem('solar-cart');
      localStorage.removeItem('solar-cart-expiration');
    }
  }, []);

  // Cart Actions
  const addToCart = (product, quantity, orderType, price) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { product, quantity, orderType, price }
    });
  };

  const removeFromCart = (itemId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { itemId }
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { itemId, newQuantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const getTotalPrice = () => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemsByOrderType = () => {
    const grouped = {
      normal: [],
      bulk: [],
      corporate: []
    };

    cart.items.forEach(item => {
      grouped[item.orderType].push(item);
    });

    return grouped;
  };

  const clearExpiredCart = () => {
    if (checkCartExpiration()) {
      dispatch({ type: CART_ACTIONS.CLEAR_CART });
    }
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getItemsByOrderType,
    clearExpiredCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};