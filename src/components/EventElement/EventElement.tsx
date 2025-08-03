import React from "react";
import styles from "../EventElement/EventElement.module.scss";

// font-awesome inport
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

// #Todo correct the venue
type EventElementProps = {
  title: string;
  date: string;
  flyerFront: string;
  venue: string;
  startTime: string;
  endTime: string;
};

export const EventElement: React.FC<EventElementProps> = ({
  title,
  date,
  flyerFront,
  venue,
  startTime,
  endTime,
}) => {
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
            <div className="eventLocationTitle">{venue}</div>
          </div>
          <span className="eventStartTime">I Starts: {startTime}</span>{" "}
          <br></br>
          <span className="eventStartTime">I Ends: {endTime}</span>
        </div>
      </div>
      <div className={styles.addEventSection}>
        <button className={styles.addButton}>+</button>
      </div>
    </div>
  );
};
