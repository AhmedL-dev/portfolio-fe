import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import Card from "./card";

const CardsList = ({ data }) => {
  return (
    <Fragment>
      <Grid style={{ marginTop: "5em" }} item container justify="space-evenly">
        {data.map((d) => (
          <Card
            key={d.title}
            {...d}
            // image={d.image}
            // title={d.title}
            // body={d.body}
            // github={d.github}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default CardsList;
