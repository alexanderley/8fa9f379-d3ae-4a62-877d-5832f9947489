import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App.jsx";

import { EventsProvider } from "./context/EventsContext";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </EventsProvider>
  </StrictMode>
);
