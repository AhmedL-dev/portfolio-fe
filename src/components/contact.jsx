import React, { useContext, useEffect } from "react";
import VizSensor from "react-visibility-sensor";
import _ from "lodash";

import { NavValueContext } from "../contexts/navValueContext";
import { VizContext } from "../contexts/visibilityContext";

import { makeStyles } from "@material-ui/core/styles";
import HeroImageGrid from "../common/heroImageGrid";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

import image from "../assets/contact.jpg";

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

const Contact = () => {
  const classes = useStyle();
  const [navValue, setNavValue] = useContext(NavValueContext);
  const [vizValue, setVizValue] = useContext(VizContext);

  useEffect(() => {
    if (Object.keys(vizValue).every((k) => !vizValue[k])) {
      setVizValue(true);
      setNavValue(false);
    } else vizValue["contact"] && setNavValue(2);
  }, [vizValue, setVizValue]);

  return (
    <HeroImageGrid container image={image} alignItems="center" justify="center">
      <Grid item>
        <VizSensor
          partialVisibility
          onChange={(isVisible) => {
            let vizV = { ...vizValue };
            if (isVisible) vizV = _.mapValues(vizV, () => false);
            vizV["contact"] = isVisible;
            setVizValue(vizV);
          }}
        >
          <section id="contact">
            <Typography className={classes.heroContent2} align="center">
              CONTACT ME
            </Typography>
            <Typography className={classes.heroContent1} align="center">
              I'd love to hear from you
            </Typography>
          </section>
        </VizSensor>
      </Grid>

      <Grid style={{ marginTop: "5em" }} item container justify="space-evenly">
        <Grid item container md direction="column" alignItems="center">
          <PhoneAndroidIcon color="secondary" style={{ fontSize: 100 }} />
          <Typography className={classes.heroContent1} align="center">
            (+212) 623-776 245
          </Typography>
        </Grid>
        <Grid item container md direction="column" alignItems="center">
          <EmailIcon color="secondary" style={{ fontSize: 100 }} />
          <Typography className={classes.heroContent1} align="center">
            laadraouiahmed@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </HeroImageGrid>
  );
};

export default Contact;
