import React from "react";

import Section from "../../../common/section";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    [theme.breakpoints.down("sm")]: {
      fontWeight: 700,
      fontSize: "3rem",
    },
  },
}));

const HeroBlock = ({ id, index, background }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeroImageGrid container image={image} alignItems="center" justify="center">
      <Section id={id} index={index} background={background}>
        <Typography className={classes.heroContent1} align="center">
          Hi I am a Full-stack
        </Typography>
        {matchesSM ? (
          <Typography className={classes.heroContent2} align="center">
            Python
            <br />
            Node.Js
            <br />
            React.Js
          </Typography>
        ) : (
          <Typography className={classes.heroContent2} align="center">
            Python | Node.Js | React.Js
          </Typography>
        )}

        <Typography className={classes.heroContent1} align="center">
          developer
        </Typography>
      </Section>
    </HeroImageGrid>
  );
};

export default HeroBlock;
