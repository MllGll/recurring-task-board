import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  title: "dark",

  color: {
    background: "#212529",
    inputField: "#212529",
    primary: {
      main: "#495057",
      light: "#343a40",
      dark: "#6d7278",
    },
    secondary: {
      main: "#b6bcc2",
      dark: "#e1e3e6",
    },
    common: {
      white: "#FFFFFF",
      green: "#16db65",
      orange: "#ffaa00",
      red: "#da1e37",
    },
  },
});

export default theme;
