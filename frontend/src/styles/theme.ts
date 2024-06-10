import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5acccc", // Turquoise
    },
    secondary: {
      main: "#f76434", // Orange Red
    },
    background: {
      default: "#ffffff", // White
    },
    text: {
      primary: "#335c6e", // Steel Blue
      secondary: "#28B8B8", // Turquoise Dark 2
    },
    custom: {
      turquoiseLight: "#cffafa",
      teal: "#4aa088",
      yellowDark: "#fabd33",
      turquoiseDark1: "#53c2c2",
      orangePastel: "#FFE6DC",
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    custom?: {
      turquoiseLight?: string;
      teal?: string;
      yellowDark?: string;
      turquoiseDark1?: string;
      orangePastel?: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      turquoiseLight?: string;
      teal?: string;
      yellowDark?: string;
      turquoiseDark1?: string;
      orangePastel?: string;
    };
  }
}

export default theme;
