import React, { useContext, useEffect } from "react";

import HeroBlock from "./heroBlock";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroBlock />
      <About />
      <Skills />
      <Contact />
    </React.Fragment>
  );
};

export default LandingPage;
