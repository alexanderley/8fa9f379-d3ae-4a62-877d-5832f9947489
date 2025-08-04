import React, { useContext } from "react";

import { EventsContext } from "../../context/EventsContext";
import { EventElement } from "../EventElement/EventElement";

import styles from "./Events.module.scss";

import { Event, GroupedEvents } from "../../types/eventTypes";

export default function Events() {
  const context = useContext(EventsContext);
  const groupedEvents = context?.groupedEvents || {};

  return (
    <>
      <div className={styles.eventsWrapper}>
        <h2>Public Events</h2>
        {Object.keys(groupedEvents).map((dateKey) => (
          <div key={dateKey} className={styles.eventDayGroup}>
            <h3 className={styles.eventDay}>{dateKey}</h3>
            <div className={styles.eventGrid}>
              {groupedEvents[dateKey].map((event: Event) => (
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
          </div>
        ))}
      </div>
    </>
  );
}
