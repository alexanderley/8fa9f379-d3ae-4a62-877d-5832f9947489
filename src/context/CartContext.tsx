// import React, { createContext, useState, useContext } from "react";
// import { Event } from "../types/eventTypes";

// type CartContextType = {
//   cartItems: Event[];
//   setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
// };

// type CartProviderProps = {
//   children: React.ReactNode;
// };

// export const CartContext = createContext<CartContextType>({
//   cartItems: [],
//   setCartItems: () => {},
// });

// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<Event[]>([]);

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook for easier consumption
// export const useCartContext = () => {
//   return useContext(CartContext);
// };
import React, { createContext, useState, useContext } from "react";
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
  setCartItems: () => {}, // This is fine for default value
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Event[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCartContext = () => useContext(CartContext);
