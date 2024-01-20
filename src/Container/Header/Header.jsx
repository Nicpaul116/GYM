import React from "react";
import "./header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="Container_Header-all" id="Home">
      <div className="Container_header-wrap">
        <div className="header_h3">
          <h3>BUILD UP YOUR</h3>
        </div>
        <div className="header_h1">
          <h1>BODY SHAPE</h1>
        </div>
        <div className="header_p">
          <p>Build Your Body and Fitness with Professional Touch</p>
        </div>
        <div className="Container_header-button">
          <Link to="#prices">
            <button className="header_button">JOIN US</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
