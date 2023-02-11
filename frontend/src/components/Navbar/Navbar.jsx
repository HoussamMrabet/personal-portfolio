import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const navElements = [
    "Home",
    "About",
    "Work",
    "Skills",
    "Testimonial",
    "Contact",
  ];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navabar-links">
        {navElements.map((element) => (
          <li className="app__flex p-text" key={`link-${element}`}>
            <div />
            <a href={`#${element}`}>{element}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
