import React, { useContext, useEffect } from "react";
import styles from "../EventElement/EventElement.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { EventElementProps } from "../../types/eventTypes";
import { useEventsContext } from "../../context/EventsContext";
import { useCartContext } from "../../context/CartContext";

import { Event } from "../../types/eventTypes";

export const EventElement: React.FC<EventElementProps> = ({
  _id,
  title,
  flyerFront,
  venue,
  startTime,
  endTime,
  venueLocation,
  hasAddButton,
}) => {
  const { events } = useEventsContext();
  const { setCartItems } = useCartContext();

  const findEvent = (eventId: string) => {
    const foundEvent = events.find((event: Event) => event._id === eventId);
    return foundEvent;
  };
  // #Todo memorize this with useCallback eventually
  const eventClickHandler = (url: string) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  // #Todo memorize this with useCallback eventually
  const addToCartHandler = () => {
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
          ) : (
            ""
          )}
        </div>
      </div>
      {hasAddButton ? (
        <div className={styles.addEventSection}>
          <button className={styles.addButton} onClick={addToCartHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
