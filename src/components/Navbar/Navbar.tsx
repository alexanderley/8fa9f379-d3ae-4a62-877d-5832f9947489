import styles from "./Navbar.module.scss";
import { faShoppingCart, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function () {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <div className="search">Search</div>
        <div className="filter">
          <FontAwesomeIcon icon={faFilter} />
        </div>
      </div>
      <div className={styles.navRightSection}>
        <ShoppingCart />
      </div>
    </div>
  );
}
