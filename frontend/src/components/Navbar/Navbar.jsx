import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Work",
    "Skills",
    "Testimonial",
    "Contact",
  ];

  const clickHandle = e => {
    e.stopPropagation();
    setToggle(prevState => !prevState);
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

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={(e) => clickHandle(e)} />

        {toggle && (
          <motion.div
          initial={{width: 0}}
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
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
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
