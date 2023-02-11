import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
      <ul className="app__navbar-links">
        {navElements.map((element) => (
          <li className="app__flex p-text" key={`link-${element}`}>
            <div />
            <a href={`#${element}`}>{element}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
          transition={{ duration: 0.85, ease: "easeOut" }}
          whileInView={{ x: [300, 0] }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navElements.map((element) => (
                <li key={element}>
                  <a href={`#${element}`} onClick={() => setToggle(false)}>{element}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
