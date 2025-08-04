import React, { useState } from "react";

type CartProviderProps = {
  children: string;
};

export const CartContext: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartitems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartitems }}>
      {children}
    </CartContext.Provider>
  );
};
