import { EventItem } from "./eventTypes";

export type CartContextType = {
  cartItems: EventItem[];
  addToCart: (event: EventItem) => void;
  removeFromCart: (id: string) => void;
};

export type CartProviderProps = {
  children: React.ReactNode;
};
