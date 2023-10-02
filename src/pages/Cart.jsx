import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";

const CartContainer = styled.div`
  ${(props) => props.theme.container}
  max-width: 1000px;
  padding: 3rem;
  margin: 0 auto;
`;

const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
      <CartContainer>
        {test}
        <Wrapper>
          <TotalPrice>Total price: $ 9000.99</TotalPrice>
          <button className="ok" type="button">
            Check-out
          </button>
        </Wrapper>
      </CartContainer>
    </section>
  );
}
