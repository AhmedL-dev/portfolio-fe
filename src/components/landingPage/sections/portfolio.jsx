import React from "react";

import Section from "../../../common/section";
import CardsList from "../../../common/cardsList";
import projectService from "../../../services/projectService";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) => ({
  title: {
    ...theme.typography.hero,
    color: "black",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },

  content: {
    fontSize: "1.1rem",
    color: "#686868",
    fontWeight: 400,
    fontFamily: "arial",
  },
}));

const Portfolio = ({ id, index, background }) => {
  const classes = useStyle();
  const data = projectService.getProjects();

  return (
    <Section id={id} index={index} background={background}>
      <Grid container justify="center">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ maxWidth: "45em" }}
        >
          <Typography align="center" className={classes.title}>
            PORTFOLIO
          </Typography>
          <Typography className={classes.content}>
            Some of my latest work.
          </Typography>
        </Grid>
        <Grid item container>
          <CardsList data={data} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Portfolio;
