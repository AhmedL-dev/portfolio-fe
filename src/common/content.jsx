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
    marginBottom: "2em",
  },

  text: {
    marginBottom: "2em",
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
        {content.map((d, i) => {
          if (d && d.type === "image")
            return (
              <Grid
                key={i}
                item
                className={classes.imageContainer}
                // style={{ width: d.width ? d.width : "100%" }}
                style={{ width: d.width }}
              >
                <img
                  alt="presentation"
                  className={classes.image}
                  src={d.content}
                />
              </Grid>
            );
          if (d && d.type === "string")
            return (
              <Grid key={i} item container className={classes.textContainer}>
                <Typography className={classes.text} variant="body2" paragraph>
                  {d.content}
                </Typography>
              </Grid>
            );
          else return "no content";
        })}
      </Grid>
    </Fragment>
  );
};

export default Content;
