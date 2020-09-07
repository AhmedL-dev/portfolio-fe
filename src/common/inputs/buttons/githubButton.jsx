import React, { Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const GithubButton = ({ githubLink }) => {
  const githubButton = (
    <HtmlTooltip
      interactive
      title={
        <Fragment>
          <Typography color="inherit">Github repositories</Typography>
          {githubLink.map((g) => (
            <div key={g}>
              <a href={g} target="_blank" rel="noopener noreferrer">
                {g}
              </a>
            </div>
          ))}
        </Fragment>
      }
    >
      <IconButton
        onClick={() => {
          githubLink.map((g) => window.open(g, "_blank"));
        }}
      >
        <GitHubIcon />
      </IconButton>
    </HtmlTooltip>
  );

  return githubLink ? githubButton : " ";
};

export default GithubButton;
