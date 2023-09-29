import styled from "styled-components";
import ProductCard from "./ProductCard";

const TrendingWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
`;

export default function Trending({ products }) {
  const trendingProducts = products
    .slice(-8)
    .map((p) => (
      <ProductCard
        key={p.id}
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
