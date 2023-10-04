import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
  }

  section{
    padding: 0 2rem;
    
    @media (max-width: 550px) {
      padding: 0 1rem;
    }
  }

  h1 {
    font: 3rem Rancho, cursive;
    text-align: center;
    margin: 4rem 1rem 2rem 1rem;
    
    @media (max-width: 650px) {
      margin: 2rem 1rem 1rem 1rem;
    
  }
  }

  button {
    cursor: pointer;
    background-color: ${theme.main};
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font: bold 1rem Roboto, sans-serif;
    transition: transform 100ms ease-in-out;

    &.ok {
      background-color: ${theme.ok};
      color: ${theme.canvas};
    }
    
    &.danger {
      background-color: ${theme.danger};
      color: ${theme.canvas};
    }

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

`;

export default GlobalStyles;
