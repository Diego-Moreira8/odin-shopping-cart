const colors = {
  main: "#EE964B",
  canvas: "#FFF",
  text: "#1D1D1D",
  ok: "#067a03",
  warning: "#FFF597",
  danger: "#D00000",
};

const shadows = {
  shadow: "0 0 10px 2px #00000025",
  shortShadow: "0 0 4px 1px #00000025",
  longShadow: "0 0 10px 6px #00000025",
  shortInsetShadow: "inset 0 0 2px 0px #00000025",
};

const elements = {
  container: `
    background-color: ${colors.canvas};
    box-shadow: ${shadows.shadow};
    border-radius: 1rem;
  `,
  productsContainer: `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    
    @media (max-width: 550px) {
      gap: 1rem;
    }
  `,
  quantityInput: `
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem 0.25rem 0.25rem 1rem;
    width: 5rem;
    text-align: center;
    font-size: 1rem;
    box-shadow: ${shadows.shortInsetShadow};
  `,
};

const theme = { ...colors, ...shadows, ...elements };

export default theme;
