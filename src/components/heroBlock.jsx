import React, { useContext, useEffect } from "react";
import VizSensor from "react-visibility-sensor";
import _ from "lodash";

import { NavValueContext } from "../contexts/navValueContext";
import { VizContext } from "../contexts/visibilityContext";

import { makeStyles } from "@material-ui/core/styles";
import HeroImageGrid from "../common/heroImageGrid";
import Typography from "@material-ui/core/Typography";

import image from "../assets/first-fond.jpg";

const useStyle = makeStyles((theme) => ({
  heroContent1: {
    ...theme.typography.hero,
  },
  heroContent2: {
    ...theme.typography.hero,
    fontWeight: 700,
    fontSize: "4rem",
  },
  avatar: {
    height: "15em",
    width: "15em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

const HeroBlock = () => {
  const classes = useStyle();
  const [navValue, setNavValue] = useContext(NavValueContext);
  const [vizValue, setVizValue] = useContext(VizContext);

  useEffect(() => {
    if (Object.keys(vizValue).every((k) => !vizValue[k])) {
      setVizValue(true);
      setNavValue(false);
    } else vizValue["heroBlock"] && setNavValue(false);
  }, [vizValue, setVizValue]);

  return (
    <HeroImageGrid container image={image} alignItems="center" justify="center">
      <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          let vizV = { ...vizValue };
          if (isVisible) vizV = _.mapValues(vizV, () => false);
          vizV["heroBlock"] = isVisible;
          setVizValue(vizV);
        }}
      >
        <React.Fragment>
          <Typography className={classes.heroContent1} align="center">
            Hi I am a Full-stack
          </Typography>
          <Typography className={classes.heroContent2} align="center">
            Python | Node.Js | React.Js
          </Typography>
          <Typography className={classes.heroContent1} align="center">
            developer
          </Typography>
        </React.Fragment>
      </VizSensor>
    </HeroImageGrid>
  );
};

export default HeroBlock;
