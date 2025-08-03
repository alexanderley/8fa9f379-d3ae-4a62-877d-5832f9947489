import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { EventsContext } from "../../context/EventsContext";
import { EventElement } from "../EventElement/EventElement";

import styles from "./Events.module.scss";

export default function Events() {
  const { events, groupedEvents } = useContext(EventsContext);

  useEffect(() => {
    console.log("CTX groupedEvents: ", groupedEvents);
  }, [groupedEvents]);

  return (
    <>
      <div className={styles.eventsWrapper}>
        <h2>Public Events</h2>
        {Object.keys(groupedEvents).map((dateKey) => (
          <div key={dateKey} className={styles.eventDayGroup}>
            <h3 className={styles.eventDay}>{dateKey}</h3>
            <div className={styles.eventGrid}>
              {groupedEvents[dateKey].map((event) => (
                <EventElement
                  key={event._id}
                  date={event.date}
                  title={event.title}
                  flyerFront={event.flyerFront}
                  venue={event.venue?.name}
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
