import styled from "styled-components";
import ProductCard from "./ProductCard";

const TrendingWrapper = styled.div`
  ${(props) => props.theme.productsContainer};
`;

export default function Trending({ products }) {
  const trendingProducts = products.map((p) => (
    <ProductCard
      key={p.id}
      id={p.id}
      imgSrc={p.image}
      imgAlt={p.title}
      title={p.title}
      price={p.price}
    />
  ));

  return (
    <section>
      <h1>Check this out!</h1>
      <TrendingWrapper>{trendingProducts}</TrendingWrapper>
    </section>
  );
}
