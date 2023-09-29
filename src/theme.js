const colors = {
  main: "#EE964B",
  canvas: "#FFF",
  text: "#1D1D1D",
  ok: "#04B600",
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  `,
};

const theme = { ...colors, ...shadows, ...elements };

export default theme;
