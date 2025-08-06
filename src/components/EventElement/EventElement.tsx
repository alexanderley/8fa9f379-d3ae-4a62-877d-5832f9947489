import React from "react";
import styles from "../EventElement/EventElement.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import RoundButton from "../ui/RoundButton/RoundButton";

import { EventElementProps } from "../../types/eventTypes";
import { useEventsContext } from "../../context/EventsContext";
import { useCartContext } from "../../context/CartContext";

export const EventElement: React.FC<EventElementProps> = ({
  _id,
  title,
  flyerFront,
  venue,
  startTime,
  endTime,
  venueLocation,
  hasAddButton,
  hasDeleteButton,
}) => {
  const { findEvent } = useEventsContext();
  const { addToCart, removeFromCart } = useCartContext();

  const eventClickHandler = (url: string) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  const addToCartHandler = () => {
    const foundEvent = findEvent(_id);
    if (!foundEvent) return;
    addToCart(foundEvent);
  };

  const removeFromCartHandler = () => {
    removeFromCart(_id);
  };

  return (
    <div className={styles.eventWrapper}>
      <div className={styles.eventHeader}>
        <img
          className={styles.circleImg}
          src="https://images.unsplash.com/photo-1578946956271-e8234ecaaadd?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span className={styles.eventTitle}>{title}</span>
      </div>
      <div className={styles.eventImageWrapper}>
        <img
          src={flyerFront}
          alt={`Flyer for ${title}`}
          className={styles.eventImage}
        />
      </div>
      <div className={styles.eventBottomSection}>
        <div className={styles.eventLocationWrapper}>
          <div
            className={styles.eventVenueWrapper}
            onClick={() => eventClickHandler(venueLocation)}
          >
            <FontAwesomeIcon icon={faMapMarker} className={styles.mapIcon} />
            <div className={styles.eventLocationTitle}>{venue}</div>
          </div>
          {startTime && endTime ? (
            <>
              <span className="eventStartTime">I Starts: {startTime}</span>
              <br />
              <span className="eventStartTime">I Ends: {endTime}</span>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.addEventSection}>
        {hasAddButton && (
          <RoundButton
            onClick={addToCartHandler}
            icon={<FontAwesomeIcon icon={faPlus} />}
            variant="add"
            ariaLabel="Add to cart"
          />
        )}
        {hasDeleteButton && (
          <RoundButton
            onClick={removeFromCartHandler}
            icon={<FontAwesomeIcon icon={faTrash} />}
            variant="delete"
            ariaLabel="Remove from cart"
          />
        )}
      </div>
    </div>
  );
};
