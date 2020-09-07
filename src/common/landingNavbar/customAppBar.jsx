import React, { useState, useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const CustomAppBar = ({ children, color = "primary" }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [scroll, setScroll] = useState(false);
  const [transition, setTransition] = useState("");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 && setScroll(true);
      window.scrollY > 200 && setTransition("");
      window.scrollY < 100 && setScroll(false);
      window.scrollY < 200 && setTransition("0.3s ease");
    });
    // return () => document.removeEventListener("scroll");
  });

  // matchesSM && setTransition("");
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      elevation={scroll || matchesSM ? 4 : 0}
      color={scroll || matchesSM ? color : "transparent"}
      style={{
        transition: matchesSM ? "" : transition,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container alignItems="center" justify="space-between">
            {children}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
