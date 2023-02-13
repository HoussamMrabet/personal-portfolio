import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { isEnabled as isDarkReaderEnabled } from "darkreader";

const AppWrapp = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <div className="p-text">All right reserved &copy; </div>
            <div className="p-text">-2023 Houbet-</div>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapp;
