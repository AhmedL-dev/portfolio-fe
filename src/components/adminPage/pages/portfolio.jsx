import React, { useState } from "react";
import ProjectCards from "../../landingPage/projectCards";
import projectService from "../../../services/projectService";
import ProjectForm from "./../projectForm";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const PortfolioAdmin = () => {
  const [preview, setPreview] = useState(false);
  const data = projectService.getProjects();
  return (
    <Grid container direction="column" style={{ width: "90%" }}>
      <Grid item container justify="flex-end" style={{ margin: "2em" }}>
        <Button variant="contained" onClick={() => setPreview(!preview)}>
          {!preview ? "Preview" : "Edit"}
        </Button>
      </Grid>
      <Grid item container justify="center">
        {preview ? <ProjectCards /> : <ProjectForm />}
      </Grid>
    </Grid>
  );
};

export default PortfolioAdmin;
