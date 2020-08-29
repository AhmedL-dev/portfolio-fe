import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Content from "./content";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "70em",
    marginTop: "4em",
    [theme.breakpoints.down("lg")]: {
      width: "65em",
    },
    [theme.breakpoints.down("md")]: {
      width: "50em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "35em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "23em",
    },
  },
  drawer: {
    zIndex: 1,
  },
}));

export default function DrawerDetail({
  open,
  toggleDrawer,
  anchor,
  detail,
  title,
}) {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      disableSwipeToOpen
      className={classes.drawer}
      anchor={anchor}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(false)}
    >
      <div className={classes.list}>
        <Content content={detail} title={title} />
      </div>
    </SwipeableDrawer>
  );
}
