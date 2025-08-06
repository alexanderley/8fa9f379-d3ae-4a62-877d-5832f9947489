import React, { createContext, useState, useContext, useEffect } from "react";
import { EventItem } from "../types/eventTypes";

type CartContextType = {
  cartItems: EventItem[];
  addToCart: (event: EventItem) => void;
  removeFromCart: (id: string) => void;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<EventItem[]>([]);

  const addToCart = (event: EventItem) => {
    setCartItems((prev) => {
      const alreadyExists = prev.some((item) => item._id === event._id);
      if (alreadyExists) return prev;
      return [...prev, event];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
