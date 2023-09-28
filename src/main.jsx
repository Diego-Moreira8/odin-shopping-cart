import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./css/reset.css";
import GlobalStyles from "./globalStyles.js";
import { ThemeProvider } from "styled-components";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
