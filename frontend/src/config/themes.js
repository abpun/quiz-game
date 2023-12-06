import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#555555",
    },
    secondary: {
      main: "#212121",
      dark: "#333333",
    },
    text: {
      primary: "#B0B8C4",
      secondary: "#B1B2B3",
    },
    background: {
      default: "#121212",
    },
  },
  transitions: {
    create: (props) => `all 0ms ease-out`,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#FFFFFF",
      dark: "#F0f0f0",
    },
    text: {
      primary: "#2196f3",
      secondary: "#333333",
    },
    background: {
      default: "#ecf5ff",
    },
  },
  transitions: {
    create: (props) => `all 0ms ease-out`,
  },
});
