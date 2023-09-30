import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
  }

  section{
    padding: 0 2rem;
  }

  h1 {
    font: 3rem Rancho, cursive;
    text-align: center;
    margin: 4rem 1rem 2rem 1rem;
  }
`;

export default GlobalStyles;
