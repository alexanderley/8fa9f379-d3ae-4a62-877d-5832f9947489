import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import {
  Event,
  GroupedEvents,
  EventsContextType,
  EventsProviderProps,
} from "../types/eventTypes";

export const EventsContext = createContext<EventsContextType>({
  events: [],
  groupedEvents: {},
});

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [groupedEvents, setGroupedEvents] = useState<GroupedEvents>({});

  const groupEventsByDay = (eventsToGroup: Event[]): GroupedEvents => {
    const sortedEvents = [...eventsToGroup].sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return sortedEvents.reduce((acc: GroupedEvents, event) => {
      const date = new Date(event.date);
      const formatted = date
        .toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
        .toUpperCase();

      const startTime = new Date(event.startTime);
      const endTime = new Date(event.endTime);

      const formattedStart = startTime.toLocaleString("de-DE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const formattedEnd = endTime.toLocaleString("de-DE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const enhancedEvent = {
        ...event,
        formattedStart,
        formattedEnd,
      };

      if (!acc[formatted]) acc[formatted] = [];
      acc[formatted].push(enhancedEvent);
      return acc;
    }, {});
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get<Event[]>(
        "https://teclead-ventures.github.io/data/london-events.json"
      );
      setEvents(response.data);
      setGroupedEvents(groupEventsByDay(response.data));
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, groupedEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = () => {
  return useContext(EventsContext);
};
