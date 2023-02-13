import React from "react";
import { NavigationDots, SocialMedia } from "./components";

import { Header, Footer, About, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <NavigationDots />
      <SocialMedia />
    </div>
  );
};

export default App;
