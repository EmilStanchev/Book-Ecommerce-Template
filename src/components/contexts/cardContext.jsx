/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };
  const removeFromCart = (bookToRemove) => {
    const updatedCart = cartItems.filter((item) => item.id !== bookToRemove.id);
    setCartItems(updatedCart);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
