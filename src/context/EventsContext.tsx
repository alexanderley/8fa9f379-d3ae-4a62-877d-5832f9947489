import axios from "axios";
import React, { createContext, useEffect, useState, ReactNode } from "react";

// Import types
import {
  Event,
  GroupedEvents,
  EventsContextType,
  EventsProviderProps,
} from "../types/eventTypes";

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

const groupEventsByDay = (events: Event[]): GroupedEvents => {
  const sortedEvents = [...events].sort((a, b) => {
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
    console.log("acc: ", acc);
    return acc;
  }, {});
};

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [groupedEvents, setGroupedEvents] = useState<GroupedEvents>({});

  const fetchEvents = async () => {
    try {
      const response = await axios.get<Event[]>(
        "https://teclead-ventures.github.io/data/london-events.json"
      );
      setEvents(response.data);
      const grouped = groupEventsByDay(response.data);
      setGroupedEvents(grouped);
    } catch (err) {
      console.error("Something went wrong when fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log("events: ", events);
  }, [events]);

  useEffect(() => {
    console.log("groupedEvents: ", groupedEvents);
  }, [groupedEvents]);

  useEffect(() => {
    console.log("new events: ", events);
  });

  return (
    <EventsContext.Provider value={{ events, groupedEvents }}>
      {children}
    </EventsContext.Provider>
  );
};
