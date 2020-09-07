import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  helperText: {
    fontSize: "1rem",
    width: "100%",
  },
  input: {
    height: "2.7em",
  },
}));

export default function Input({
  name,
  label,
  variant = "outlined",
  type,
  value,
  onChange,
  error,
}) {
  const classes = useStyles();

  // const htmlFor = error ? "component-error" : `component-${variant}`;
  return (
    <FormControl
      fullWidth
      variant={variant}
      error={Boolean(error)}
      className={classes.root}
      htmlFor={name}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <OutlinedInput
        className={classes.input}
        name={name}
        label={label}
        onChange={onChange}
        type={type}
        id={name}
        value={value}
      />
      {error && (
        <FormHelperText className={classes.helperText}>{error}</FormHelperText>
      )}
    </FormControl>
  );
}
