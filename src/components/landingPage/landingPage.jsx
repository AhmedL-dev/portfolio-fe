import React from "react";

import HeroBlock from "./sections/heroBlock";
import About from "./sections/about";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroBlock id="heroBlock" index={false} />
      <About id="about" index={0} />
      <Portfolio id="portfolio" index={1} />
      <Skills id="skills" index={2} background="#F0F0F0" />
      <Contact id="contact" index={3} />
    </React.Fragment>
  );
};

export default LandingPage;
