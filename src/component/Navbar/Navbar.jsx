import React, { useState } from "react";
import "./navbar.css";
import icons8 from "../../Assets/dumbbells-8492.png";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Menu = () => (
  <>
    <p>
      <Link to="Home">Home</Link>
    </p>
    <p>
      <Link to="#About">About</Link>
    </p>
    <p>
      <Link to="#Pricing">Pricing</Link>
    </p>
    <p>
      <Link to="#Gallery">Gallery</Link>
    </p>
    <p>
      <Link to="#Blog">Blog</Link>
    </p>
    <p>
      <Link to="#Contact" smooth>
        Contact
      </Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="component_navbar-all">
      <div className="component_navbar-wrap">
        <div className="component_navbar-image">
          <img src={icons8} alt="#" />
        </div>
        <div className="component_navbar-links">
          <Menu />
        </div>
        <div className="component_navbar-button">
          <Link to="/Signin">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="navbar_menu">
          {toggleMenu ? (
            <AiOutlineClose
              size={27}
              onClick={() => setToggleMenu(false)}
              className="menu"
            />
          ) : (
            <MdOutlineMenu
              size={27}
              onClick={() => setToggleMenu(true)}
              className="menu"
            />
          )}
          {toggleMenu && (
            <div className="component_menu-navbar">
              <div className="component_menu-navbar-links">
                <Menu />
                <div className="component_menu-join">
                  <div className="component_menu-button">
                    <button>JOIN US</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
