import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Cartpage from "./pages/Cartpage/Cartpage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </Router>
  );
}

export default App;
