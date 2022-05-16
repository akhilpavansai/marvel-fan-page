import { ThemeProvider } from "@mui/material";
import React from "react";
import HomePage from "./pages/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
