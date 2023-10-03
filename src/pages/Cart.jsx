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
  const [products, addToCart, userCart] = useOutletContext();

  const cartList = userCart.map((item) => {
    const productToMap = products.find(
      (product) => product.id === item.productId
    );

    return (
      <CartProduct
        key={productToMap.id}
        imgSrc={productToMap.image}
        imgAlt={productToMap.title}
        title={productToMap.title}
        amount={item.quantity}
        price={productToMap.price}
      />
    );
  });

  const cartValue = userCart.reduce((acc, curr) => {
    const product = products.find((p) => p.id === curr.productId);
    return acc + product.price * curr.quantity;
  }, 0);

  return (
    <section>
      <h1>Shopping Cart</h1>
      <CartContainer>
        {cartList}
        <Wrapper>
          <TotalPrice>Total price: $ {cartValue.toFixed(2)}</TotalPrice>
          <button className="ok" type="button">
            Check-out
          </button>
        </Wrapper>
      </CartContainer>
    </section>
  );
}
