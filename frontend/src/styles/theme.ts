import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5acccc",
    },
    secondary: {
      main: "#f76434",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#335c6e",
      secondary: "#28B8B8",
    },
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
    h6: {
      fontWeight: 700,
      color: "#335c6e",
    },
    body1: {
      color: "#28B8B8",
    },
  },
});

export default theme;
