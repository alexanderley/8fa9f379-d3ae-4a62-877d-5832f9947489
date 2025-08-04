import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ShoppingCart.module.scss";

const ShoppingCart: React.FC = () => {
  return (
    <div className={styles.shoppingCartContainer}>
      <div className={styles.cartCounter}></div>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default ShoppingCart;
