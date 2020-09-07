import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import history from "../../history";
import authService from "../../services/authService";

import AdminNavbar from "../ui/adminNavbar";
import _ from "lodash";
import HeroBlock from "./pages/heroBlock";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

class Admin extends Component {
  state = {};

  componentDidMount() {
    const user = authService.getCurrentUser();
    if (!user) history.push("/login");
    else if (!_.includes(user.roles, "admin")) history.push("/access_denied");
  }

  render() {
    const base_path = this.props.match.path;

    return (
      <React.Fragment>
        <AdminNavbar />
        <Switch>
          <Route path={base_path + "/hero"} component={HeroBlock} />
          <Route path={base_path + "/about"} component={About} />
          <Route path={base_path + "/portfolio"} component={Portfolio} />
          <Route path={base_path + "/skills"} component={Skills} />
          <Route path={base_path + "/contact"} component={Contact} />
          <Redirect from={base_path + "/"} to={base_path + "/hero"} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Admin;
