import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Content from "./content";

const useStyles = makeStyles({
  list: {
    width: "70em",
    marginTop: "4em",
  },
  drawer: {
    zIndex: 1,
  },
});

export default function CardDetail({
  state,
  toggleDrawer,
  anchor,
  detail,
  title,
}) {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      anchor={anchor}
      open={state}
      onClose={toggleDrawer(false)}
    >
      <div className={classes.list}>
        <Content content={detail} title={title} />
      </div>
    </Drawer>
  );
}
