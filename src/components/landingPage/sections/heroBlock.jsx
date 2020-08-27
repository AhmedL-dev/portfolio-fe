import React from "react";

import Section from "../../../common/section";

import { makeStyles } from "@material-ui/core/styles";
import HeroImageGrid from "../../../common/heroImageGrid";
import Typography from "@material-ui/core/Typography";

import image from "../../../assets/first-fond.jpg";

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

const HeroBlock = ({ id, index, background }) => {
  const classes = useStyle();
  return (
    <HeroImageGrid container image={image} alignItems="center" justify="center">
      <Section id={id} index={index} background={background}>
        <Typography className={classes.heroContent1} align="center">
          Hi I am a Full-stack
        </Typography>
        <Typography className={classes.heroContent2} align="center">
          Python | Node.Js | React.Js
        </Typography>
        <Typography className={classes.heroContent1} align="center">
          developer
        </Typography>
      </Section>
    </HeroImageGrid>
  );
};

export default HeroBlock;
