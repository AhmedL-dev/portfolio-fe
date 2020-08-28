import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0A2963";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const greyBlack = "#212121";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      greyBlack: greyBlack,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    white: {
      main: "white",
    },
    black: {
      main: "black",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
        fontWeight: 400,
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      textTransform: "None",
      fontWeight: 300,
      fontSize: "1rem",
      color: "white",
    },
    hero: {
      // textShadow: "2px 2px black",
      fontFamily: "Roboto",
      textTransform: "None",
      fontWeight: 300,
      fontSize: "2rem",
      color: "white",
    },
    tablogo: {
      fontFamily: "Roboto",
      fontSize: "1.75rem",
      color: "white",
      fontWeight: 300,
    },

    h2: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: "arcBlue",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 200,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 200,
      color: "White",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "white",
    },
    body2: {
      fontSize: "1.25rem",
      fontWeight: 200,
      color: arcGrey,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      color: arcBlue,
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontWeight: "bold",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
