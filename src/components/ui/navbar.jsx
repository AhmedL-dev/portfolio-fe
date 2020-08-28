import React, { useContext, useState, useEffect } from "react";

import { NavValueContext } from "../../contexts/navValueContext";

import Link from "@material-ui/core/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "40px",
  },
  tablogo: {
    ...theme.typography.tablogo,
    minWidth: 10,
    marginLeft: "25px",
  },
  indicator: {
    backgroundColor: "white",
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,

    // transition: " 0.3s ease",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [navValue, setNavValue] = useContext(NavValueContext);
  const [scroll, setScroll] = useState(false);
  const [transition, setTransition] = useState("0.3s ease");

  const handleChange = (event, newValue) => {
    setTimeout(() => setNavValue(newValue), 1000);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 && setScroll(true);
      window.scrollY > 200 && setTransition("");
      window.scrollY < 100 && setScroll(false);
      window.scrollY < 200 && setTransition("0.3s ease");
    });
  }, []);

  return (
    <React.Fragment>
      <div style={{ transition: " 0.3s ease" }}>
        <AppBar
          position="fixed"
          className={classes.appBar}
          elevation={scroll ? 4 : 0}
          color={scroll ? "primary" : "transparent"}
          style={{
            transition: transition,
            // backgroundColor: scroll ? "black" : "transparent",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Link
                className={classes.tablogo}
                style={{ textDecoration: "none" }}
                href="#"
                onClick={() => setTimeout(() => setNavValue(false), 1000)}
              >
                LAADRAOUI
              </Link>
              <Tabs
                classes={{
                  indicator: classes.indicator,
                }}
                className={classes.tabContainer}
                value={navValue}
                onChange={handleChange}
              >
                <Tab
                  disableTouchRipple
                  className={classes.tab}
                  label="ABOUT"
                  href="#about"
                />
                <Tab
                  disableTouchRipple
                  className={classes.tab}
                  label="PORTFOLIO"
                  href="#portfolio"
                />
                <Tab
                  disableTouchRipple
                  className={classes.tab}
                  label="SKILLS"
                  href="#skills"
                />
                <Tab
                  disableTouchRipple
                  className={classes.tab}
                  label="CONTACT"
                  href="#contact"
                />
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
