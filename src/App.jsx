import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Navbar />
      <Events />
    </>
  );
}

export default App;

//  <Route path="/" element={<HomePage />} />
//   <Route path="/cart" element={<CartPage />} />
