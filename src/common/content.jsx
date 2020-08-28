import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    margin: "1em",
  },
  contentContainer: {
    width: "100%",
  },
  textContainer: {
    width: "90%",
  },
  imageContainer: {
    width: "90%",
    boxShadow: "0px 5px 16px -10px rgba(0,0,0,0.75)",
  },

  text: {
    margin: "2em",
    width: "100%",
  },
  image: {
    width: "100%",
  },
});

const Content = ({ content, title }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.contentContainer}
      >
        <Typography variant="h2" className={classes.title}>
          {title.toUpperCase()}
        </Typography>
        {content.map((d) => {
          if (d && d.type === "image")
            return (
              <Grid key={d.content} item className={classes.imageContainer}>
                <img
                  className={classes.image}
                  key={d.content}
                  src={d.content}
                />
              </Grid>
            );
          if (d && d.type === "string")
            return (
              <Grid
                key={d.content}
                item
                container
                className={classes.textContainer}
              >
                <Typography
                  className={classes.text}
                  key={d.content}
                  variant="body2"
                  paragraph
                >
                  {d.content}
                </Typography>
              </Grid>
            );
        })}
      </Grid>
    </Fragment>
  );
};

export default Content;
