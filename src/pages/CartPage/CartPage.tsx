import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import styles from "./CartPage.module.scss";
import { EventElement } from "../../components/EventElement/EventElement";

const CartPage: React.FC = () => {
  const { cartItems } = useCartContext();

  return (
    <div className={styles.cartWrapper}>
      <Link to="/">← Back to Events</Link>
      <h2>Dein Warenkorb</h2>

      {cartItems.length === 0 ? (
        <p>Dein Warenkorb ist leer.</p>
      ) : (
        <div className={styles.eventGrid}>
          {cartItems.map((event) => (
            <EventElement
              key={event._id}
              _id={event._id}
              date={event.date}
              title={event.title}
              flyerFront={event.flyerFront}
              venue={event.venue?.name || ""}
              startTime={event.formattedStart}
              endTime={event.formattedEnd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
