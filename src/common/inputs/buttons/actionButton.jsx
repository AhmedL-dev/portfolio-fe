import React from "react";

import Button from "@material-ui/core/Button";

const ActionButton = ({ actionLinks }) => {
  const actionButton = (
    <Button
      onClick={() => {
        actionLinks.map((al) => window.open(al, "_blank"));
      }}
      title={actionLinks}
      size="small"
      color="primary"
    >
      live version
    </Button>
  );

  return actionLinks ? actionButton : " ";
};

export default ActionButton;
