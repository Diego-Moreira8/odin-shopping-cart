import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";

const CartContainer = styled.div`
  ${(props) => props.theme.container}
  max-width: 1000px;
  padding: 1rem;
  margin: 0 auto;
`;

export default function Cart() {
  const [products] = useOutletContext();

  const test = products
    .slice(-3)
    .map((p) => (
      <CartProduct
        key={p.id}
        imgSrc={p.image}
        imgAlt={p.title}
        title={p.title}
        amount={1}
        price={p.price}
      />
    ));

  return (
    <section>
      <h1>Shopping Cart</h1>
      <CartContainer>{test}</CartContainer>
    </section>
  );
}
