import React, { createContext, useState, useContext, useEffect } from "react";
import { Event } from "../types/eventTypes";

type CartContextType = {
  cartItems: Event[];
  setCartItems: React.Dispatch<React.SetStateAction<Event[]>>;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Event[]>([]);

  // useEffect(() => {
  //   console.log("cartItems: ", cartItems);
  // }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
