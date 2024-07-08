import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/Homepage/HomePage";
import { SeachBooksPage } from "./layouts/SearchBooksPage/SeachBooksPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SeachBooksPage />
      <Footer />
    </div>
  );
}
