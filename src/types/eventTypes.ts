import { ReactNode } from "react";

export type EventItem = {
  _id: string;
  title: string;
  description: string;
  date: string;
  flyerFront: string;
  startTime: string;
  endTime: string;
  formattedStart: string;
  formattedEnd: string;
  venue?: {
    contentUrl?: string;
    direction?: string;
    id?: string;
    live?: boolean;
    name?: string;
  };
};

export type GroupedEvents = {
  [formattedDate: string]: EventItem[];
};

export type EventsContextType = {
  events: EventItem[];
  findEvent: (id: string) => EventItem | undefined;
  groupedEvents: GroupedEvents;
};

export type EventsProviderProps = {
  children: ReactNode;
};

export type EventElementProps = {
  _id: string;
  title: string;
  date: string;
  flyerFront: string;
  venue: string;
  startTime: string;
  endTime: string;
  venueLocation: string;
  hasAddButton: boolean;
};
