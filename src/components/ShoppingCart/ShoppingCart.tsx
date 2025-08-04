import React, { useContext, useEffect } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ShoppingCart.module.scss";
import { CartContext } from "../../context/CartContext";

const ShoppingCart: React.FC = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    console.log("cartItems: ", cartItems);
  }, []);

  return (
    <div className={styles.shoppingCartContainer}>
      <div className={styles.cartCounter}>{cartItems.length}</div>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default ShoppingCart;
