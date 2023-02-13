import React, {useState} from "react";

const navItems = ["home", "about", "work", "skills", "testimonial", "contact"];

const NavigationDots = () => {
  const [active, setActive] = useState("home");

  const clickHandler = (item) => {
    setActive(item);
  }
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          onClick={() => clickHandler(item)}
        >
          {""}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
