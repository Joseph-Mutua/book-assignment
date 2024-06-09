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
      turquoiseLight: "#cffafa", // Turquoise Light
      teal: "#4aa088", // Teal
      yellowDark: "#fabd33", // Yellow
      turquoiseDark1: "#53c2c2", // Turquoise Dark 1
      orangePastel: "#FFE6DC", // Orange Pastel
    },
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
    h6: {
      fontWeight: 700,
      color: "#335c6e", // Steel Blue
    },
    body1: {
      color: "#28B8B8", // Turquoise Dark 2
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
