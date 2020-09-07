import React from "react";

import CardsList from "../../common/cardsList";
import projectService from "../../services/projectService";

const ProjectCards = () => {
  const data = projectService.getProjects();

  return <CardsList data={data} actions={("github", "live")} />;
};

export default ProjectCards;
