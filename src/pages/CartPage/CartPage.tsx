import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import styles from "./CartPage.module.scss";
import { EventElement } from "../../components/EventElement/EventElement";

const Cartpage: React.FC = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="viewportWrapper">
      <div className={styles.cartWrapper}>
        <Link to="/" className={styles.backButton}>
          ← Back to Events
        </Link>
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
                venueLocation={event.venue?.direction || ""}
                hasAddButton={false}
                hasDeleteButton={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
