import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchBar from "../SearchBar/SearchBar";

import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function () {
  return (
    <div className={styles.navMainWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <div className="search">
            <SearchBar />
          </div>
          <div className="filter">
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div>
        <div className={styles.navRightSection}>
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
}
