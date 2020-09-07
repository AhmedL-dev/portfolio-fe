import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import LoginForm from "./loginForm";

const Login = (props) => {
  return (
    <div style={{ height: "90vh", margin: 0, padding: 0 }}>
      <Grid
        style={{ height: "100%", overflow: "auto" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper variant="outlined">
          <div style={{ margin: "2em" }}>
            <Typography align="center" variant="h2">
              Login
            </Typography>
            <LoginForm {...props} />
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
