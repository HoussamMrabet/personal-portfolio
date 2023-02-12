import React from "react";

const navItems = ["home", "about", "work", "skills", "testimonial", "contact"];

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        >
          {""}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
