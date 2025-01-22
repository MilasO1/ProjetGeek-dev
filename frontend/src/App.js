import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./templates/Home";
import Shop from "./templates/Shop";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
