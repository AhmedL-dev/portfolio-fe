import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "40px",
  },
  indicator: {
    backgroundColor: theme.palette.common.indicator || "secondary",
  },
}));

const NavTabs = ({ navValue, onChange, items }) => {
  const classes = useStyles();

  return (
    <Tabs
      classes={{
        indicator: classes.indicator,
      }}
      className={classes.tabContainer}
      value={navValue}
      onChange={onChange}
    >
      {items.map((item) => (
        <Tab
          key={item.label}
          disableTouchRipple
          className={classes.tab}
          label={item.label}
          href={item.link}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;
