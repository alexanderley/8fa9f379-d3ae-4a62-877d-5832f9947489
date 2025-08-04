import React, { createContext, useState, useContext } from "react";

type CartContextType = {
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // #todo change this to array of object !!!
  const [cartItems, setCartItems] = useState<string[]>(["event1", "event2"]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook for easier consumption
export const useCartContext = () => {
  return useContext(CartContext);
};
