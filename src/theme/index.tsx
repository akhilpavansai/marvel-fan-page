import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    textColors?: PaletteOptions["textColors"];
  }

  interface PaletteOptions {
    textColors?: {
      highEmphasis?: string;
      mediumEmphasis?: string;
      lowEmphasis?: string;
      white?: string;
      success?: string;
      error?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),

    h1: {
      fontSize: "24px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "28px",
    },

    h2: {
      fontSize: "24px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "28px",
    },

    subtitle1: {
      fontSize: "20px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    subtitle2: {
      fontSize: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    body1: {
      fontSize: "18px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    body2: {
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "24px",
    },

    button: {
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "20px",
    },
    caption: {
      fontSize: "14px",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "20px",
    },

    overline: {
      fontSize: "14px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "20px",
    },
  },

  palette: {
    primary: {
      light: "#F2F5FF",
      100: "#C6CEF7",
      300: "#9191F2",
      500: "#6B4DE0",
      dark: "#4D1C8C",
    },

    secondary: {
      light: "#F9F5FA",
      100: "#EBDAF2",
      A400: "#C898D9",
      500: "#C898D9",
      dark: "#9E62B2",
    },

    success: {
      main: "#4D8066",
    },

    error: {
      200: "#FC5C5C",
      500: "#DA4D4D",
    },

    grey: {
      50: "#F8F8FA",
      100: "#E9E8ED",
      200: "#D4D2D9",
      300: "#9F9DA6",
      500: "#6D6C73",
      700: "#3C3B40",
    },

    textColors: {
      highEmphasis: "#2D2A38",
      mediumEmphasis: "#5A5766",
      lowEmphasis: "#757380",
      white: "#FFFFFF",
    },
  },
});

export default theme;

export const EXTRA_COLORS = {
  light_grey: "#F6F5F7",
  light_blue: "#C6CEF7",
  primary_gradient: "#6B4DE0",
  white: "#FFFFFF",
  high_emphasis: "#2D2A38",
  medium_emphasis: "#5A5766",
  low_emphasis: "#757380",
  button_text: "#FAFAFC",
};

export const pxToRem = (px: number) => {
  return `${px * 0.063}rem`;
};
