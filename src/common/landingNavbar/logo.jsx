import React from "react";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tablogo: {
    ...theme.typography.tablogo,
    minWidth: 10,
    marginLeft: "25px",
  },
}));

const Logo = ({ setNavValue, name, link }) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.tablogo}
      style={{ textDecoration: "none" }}
      href={link}
      onClick={() => setTimeout(() => setNavValue(false), 1000)}
    >
      {name}
    </Link>
  );
};

export default Logo;
