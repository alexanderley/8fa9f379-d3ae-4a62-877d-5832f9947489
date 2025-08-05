import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";

import { EventsProvider } from "./context/EventsContext";
import { CartProvider } from "./context/CartContext";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

createRoot(container).render(
  <StrictMode>
    <EventsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </EventsProvider>
  </StrictMode>
);
