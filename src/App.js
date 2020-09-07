import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import history from "./history";
import theme from "./common/Theme";
import Admin from "./components/adminPage/adminPage";
import Login from "./components/auth/login";
import LandingPage from "./components/landingPage/landingPage";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Route exact path="/" component={LandingPage} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
