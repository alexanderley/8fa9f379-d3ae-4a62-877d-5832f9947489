import React, { useContext, useEffect } from "react";
import styles from "../EventElement/EventElement.module.scss";

// font-awesome inport
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import { EventElementProps } from "../../types/eventTypes";
import { EventsContext, useEventsContext } from "../../context/EventsContext";
import { CartContext, useCartContext } from "../../context/CartContext";

// types
import { Event } from "../../types/eventTypes";

export const EventElement: React.FC<EventElementProps> = ({
  _id,
  date,
  title,
  flyerFront,
  venue,
  startTime,
  endTime,
}) => {
  const { events } = useEventsContext();
  const { cartItems, setCartItems } = useCartContext();

  useEffect(() => {
    console.log("cartItems: ", cartItems);
  }, [cartItems]);

  const findEvent = (eventId: string) => {
    console.log("event Id");
    const foundEvent = events.find((event: Event) => event._id === eventId);
    console.log("found Event: ", foundEvent);
    return foundEvent;
  };

  const addToCartHandler = () => {
    console.log("events: ", events);
    console.log("add to cart ID", _id);
    const foundEvent = findEvent(_id);
    if (!foundEvent) return;

    setCartItems((prev) => {
      const alreadyExists = prev.some((item) => item._id === foundEvent._id);
      if (alreadyExists) return prev;
      return [...prev, foundEvent];
    });
  };
  return (
    <div className={styles.eventWrapper}>
      <div className={styles.eventHeader}>
        <span className={styles.eventTitle}>{title}</span>
      </div>
      <div className={styles.eventImageWrapper}>
        <i className="fas fa-map-marker"></i>
        <img
          src={flyerFront}
          alt={`Flyer for ${title}`}
          className={styles.eventImage}
        />
      </div>
      <div className={styles.eventBottomSection}>
        <div className={styles.eventLocationWrapper}>
          <div className={styles.eventVenueWrapper}>
            <FontAwesomeIcon icon={faMapMarker} />
            <div className={styles.eventLocationTitle}>{venue}</div>
          </div>
          <span className="eventStartTime">I Starts: {startTime}</span>{" "}
          <br></br>
          <span className="eventStartTime">I Ends: {endTime}</span>
        </div>
      </div>
      <div className={styles.addEventSection}>
        <button className={styles.addButton} onClick={addToCartHandler}>
          +
        </button>
      </div>
    </div>
  );
};
