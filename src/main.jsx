import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { EventsProvider } from "./context/EventsContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventsProvider>
      <App />
    </EventsProvider>
  </StrictMode>
);
