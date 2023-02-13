import { useState } from "react";
import { HiMenuAlt4, HiX, HiMoon, HiSun } from "react-icons/hi";
import { motion } from "framer-motion";

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkReaderEnabled,
  setFetchMethod
} from "darkreader";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];

  const clickHandle = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };

  const darkModeHandle = (e) => {
    e.stopPropagation();
    setFetchMethod(window.fetch);
    if (isDarkReaderEnabled()) {
      disableDarkMode();
      setDarkMode(false);
    } else {
      enableDarkMode({
        brightness: 90,
        contrast: 110,
        sepia: 0,
      });
      setDarkMode(true);
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" draggable="false" />
      </div>
      <ul className="app__navbar-links">
        {navItems.map((element) => (
          <li className="app__flex p-text" key={`link-${element}`}>
            <div />
            <a href={`#${element}`}>{element}</a>
          </li>
        ))}
      </ul>
      
      {/* eslint-disable-next-line*/}
      <a href="javascript:void(0)" style={{cursor: "pointer", color: "black", textDecoration: "none"}} onClick={(e) => darkModeHandle(e)}>{ darkMode ? <HiSun style={{color: "white", width: "30px", height: "30px"}}/>:<HiMoon style={{width: "30px", height: "30px"}} />}</a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={(e) => clickHandle(e)} />
          
        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={(e) => clickHandle(e)} />
            </motion.span>
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
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
