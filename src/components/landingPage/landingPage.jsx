import React from "react";

import { ThemeProvider } from "@material-ui/styles";

import theme from "../../common/Theme";
import NavBar from "../ui/navbar";
import HeroBlock from "./sections/heroBlock";
import About from "./sections/about";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";
import { NavValueProvider } from "../../contexts/navValueContext";
import { VizProvider } from "../../contexts/visibilityContext";

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavValueProvider>
        <VizProvider>
          <NavBar />
          <HeroBlock id="heroBlock" index={false} />
          <About id="about" index={0} />
          <Portfolio id="portfolio" index={1} background="#F6F9FF" />
          <Skills id="skills" index={2} background="#F0F0F0" />
          <Contact id="contact" index={3} />
        </VizProvider>
      </NavValueProvider>
    </ThemeProvider>
  );
};

export default LandingPage;
