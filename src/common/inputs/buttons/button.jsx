import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function MyButton({
  variant = "contained",
  disabled,
  color,
  children,
  onClick,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        color={color}
        type="submit"
      >
        {children}
      </Button>
    </div>
  );
}
