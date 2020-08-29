import React from "react";

import Section from "../../../common/section";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeroImageGrid from "../../../common/heroImageGrid";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

import image from "../../../assets/contact.jpg";

const useStyle = makeStyles((theme) => ({
  heroContent1: {
    ...theme.typography.hero,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  infos: {
    ...theme.typography.hero,
    fontSize: "1.7rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5em",
      fontSize: "1.5rem",
    },
  },
  heroContent2: {
    ...theme.typography.hero,
    fontWeight: 700,
    fontSize: "4rem",
    textShadow: "0.5px 0.5px 2px #000000",
    [theme.breakpoints.down("sm")]: {
      fontWeight: 700,
      fontSize: "3rem",
    },
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
  icons: {
    fontSize: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: 70,
      marginTop: "1em",
    },
  },
}));

const Contact = ({ id, index, background }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeroImageGrid container image={image} alignItems="center" justify="center">
      <Section id={id} index={index} background={background}>
        <Grid item>
          <Typography className={classes.heroContent2} align="center">
            CONTACT ME
          </Typography>
          <Typography className={classes.heroContent1} align="center">
            I'd love to hear from you
          </Typography>
        </Grid>

        <Grid
          style={{ marginTop: matchesSM ? "0em" : "4em" }}
          item
          container
          justify="space-evenly"
        >
          <Grid
            style={{ marginRight: matchesSM ? 0 : "3em" }}
            item
            container
            md
            direction="column"
            alignItems="center"
          >
            <PhoneAndroidIcon color="secondary" className={classes.icons} />
            <Typography className={classes.infos} align="center">
              (+212) 623-776 245
            </Typography>
          </Grid>
          <Grid item container md direction="column" alignItems="center">
            <EmailIcon color="secondary" className={classes.icons} />
            <Typography className={classes.infos} align="center">
              laadraouiahmed@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </HeroImageGrid>
  );
};

export default Contact;
