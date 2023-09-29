import styled from "styled-components";

const CartContainer = styled.div`
  ${(props) => props.theme.container}
  width: 100px;
  height: 100px;
`;

export default function Cart() {
  return (
    <section>
      <h1>Shopping Cart</h1>
      <CartContainer></CartContainer>
    </section>
  );
}
