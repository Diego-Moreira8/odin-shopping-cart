import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyles from "./styles/globalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
