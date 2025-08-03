import React from "react";

import styles from "./Navbar.module.scss";

export default function () {
  return (
    <div className={styles.navContainer}>
      <div className="search">Search</div>
      <div className="filter">Filter</div>
      <div className="cart">Cart</div>
    </div>
  );
}
