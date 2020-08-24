import React, { useContext } from "react";

import { NavValueContext } from "../contexts/navValueContext";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
}));

function ColorOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "primary" : "transparent",
  });
}

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [navValue, setNavValue] = useContext(NavValueContext);

  const handleChange = (event, newValue) => {
    setTimeout(() => setNavValue(newValue), 1000);
  };

  return (
    <React.Fragment>
      <ColorOnScroll {...props}>
        <AppBar position="fixed" style={{ transition: "0.3s ease" }}>
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
      </ColorOnScroll>
    </React.Fragment>
  );
}
