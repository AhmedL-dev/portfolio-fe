import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import Card from "./card";

const CardsList = ({ data }) => {
  return (
    <Fragment>
      <Grid style={{ marginTop: "5em" }} item container justify="space-evenly">
        {data.map((d) => (
          <Card key={d.title} image={d.image} title={d.title} body={d.body} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default CardsList;
