import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/Homepage/ExploreTopBooks";
import { Carousel } from "./layouts/Homepage/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
