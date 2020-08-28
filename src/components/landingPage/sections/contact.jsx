import React from "react";

import Section from "../../../common/section";

import { makeStyles } from "@material-ui/core/styles";
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
          style={{ marginTop: "5em" }}
          item
          container
          justify="space-evenly"
        >
          <Grid item container md direction="column" alignItems="center">
            <PhoneAndroidIcon color="secondary" className={classes.icons} />
            <Typography className={classes.heroContent1} align="center">
              (+212) 623-776 245
            </Typography>
          </Grid>
          <Grid item container md direction="column" alignItems="center">
            <EmailIcon color="secondary" className={classes.icons} />
            <Typography className={classes.heroContent1} align="center">
              laadraouiahmed@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </HeroImageGrid>
  );
};

export default Contact;
