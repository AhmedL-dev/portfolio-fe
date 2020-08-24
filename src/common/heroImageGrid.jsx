import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const HeroImageGrid = ({ image, ...rest }) => {
  const useStyles = makeStyles((theme) => ({
    background: {
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      // minHeight: "45.95em",
      minHeight: "49.95em",
      flexDirection: "column",
      display: "-ms-flexbox",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${image})`,
        backgroundAttachment: "inherit",
      },
    },
  }));

  const classes = useStyles();

  return <Grid {...rest} className={classes.background} />;
};

export default HeroImageGrid;
