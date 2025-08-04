import { useEventsContext } from "../../context/EventsContext";
import { useCartContext } from "../../context/CartContext";
import { EventElement } from "../EventElement/EventElement";

import styles from "./Events.module.scss";

import { Event } from "../../types/eventTypes";

export default function Events() {
  const { groupedEvents } = useEventsContext();
  const { cartItems } = useCartContext();

  // lookup for cartIds
  const cartIds = new Set(cartItems.map((item) => item._id));

  return (
    <div className={styles.eventsWrapper}>
      <h2>Public Events</h2>

      {Object.entries(groupedEvents).map(([dateKey, events]) => {
        // filter the object based on the cartIds
        const filteredEvents = events.filter(
          (event) => !cartIds.has(event._id)
        );
        // Skip date group if no events are left
        if (filteredEvents.length === 0) return null;

        return (
          <div key={dateKey} className={styles.eventDayGroup}>
            <h3 className={styles.eventDay}>{dateKey}</h3>
            <div className={styles.eventGrid}>
              {filteredEvents.map((event) => (
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
        );
      })}
    </div>
  );
}
