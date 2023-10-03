import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ProductsWrapper = styled.div`
  ${(props) => props.theme.productsContainer}
`;

export default function Products() {
  const [products] = useOutletContext();

  const allProducts = products.map((p) => (
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
      <h1>Products</h1>
      <ProductsWrapper>{allProducts}</ProductsWrapper>
    </section>
  );
}
