import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 100,
    marginTop: "4em",
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down("xs")]: {
      marginTop: "3.5em",
    },
  },
  fullList: {
    width: "auto",
  },
  listItemText: {
    ...theme.typography.white,
    fontWeight: 400,
    fontFamily: "Arial",
    fontSize: "1.1rem",
    opacity: 0.7,
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  listItemSelected: {
    ...theme.typography.white,
    fontWeight: 400,
    fontFamily: "Arial",
    fontSize: "1.1rem",
    opacity: 1,
  },
}));

export default function Drawer({
  navValue,
  onChange,
  items,
  menuIconColor = "white",
  anchor = "top",
}) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List disablePadding>
        {items.map((item, i) => (
          <ListItem
            key={i}
            button
            component="a"
            href={item.link}
            className={
              i === navValue ? classes.listItemSelected : classes.listItem
            }
            onClick={(e) => onChange(e, i)}
            selected={i === navValue}
          >
            <ListItemText disableTypography>
              <Typography
                className={
                  i === navValue
                    ? classes.listItemSelected
                    : classes.listItemText
                }
              >
                {item.label}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton onClick={toggleDrawer(anchor, !state)}>
          <MenuIcon style={{ color: menuIconColor }} />
        </IconButton>
        <SwipeableDrawer
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
