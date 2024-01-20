import React from "react";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Trainer from "./Trainer/Trainer";
import Gallery from "./Gallery/Gallery";
import { Navbar } from "../component";

const Container = () => {
  return (
    <div>
      <div className="component-header">
        <Navbar />
        <Header />
      </div>
      <div>
        <About />
        <Pricing />
        <Gallery />
        <Trainer />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};

export default Container;
