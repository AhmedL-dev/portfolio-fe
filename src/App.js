import React, { Component } from "react";

import theme from "./common/Theme";
import { ThemeProvider } from "@material-ui/styles";

import "./App.css";
import NavBar from "./components/navbar";
import LandingPage from "./components/landingPage";

import { NavValueProvider } from "./contexts/navValueContext";
import { VizProvider } from "./contexts/visibilityContext";

class App extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavValueProvider>
          <VizProvider>
            <NavBar />
            <LandingPage />
          </VizProvider>
        </NavValueProvider>
      </ThemeProvider>
    );
  }
}

export default App;
