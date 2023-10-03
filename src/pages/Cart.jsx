import { useOutletContext, Link } from "react-router-dom";
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
  const [products, addToCart, userCart, changeQuantity, deleteItem] =
    useOutletContext();

  const cartList = userCart.map((item) => {
    const productToMap = products.find(
      (product) => product.id === item.productId
    );

    return (
      <CartProduct
        key={productToMap.id}
        id={productToMap.id}
        imgSrc={productToMap.image}
        imgAlt={productToMap.title}
        title={productToMap.title}
        quantity={item.quantity}
        price={productToMap.price}
        changeQuantity={changeQuantity}
        deleteItem={deleteItem}
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
        {userCart.length === 0 && (
          <p>
            Looks empty in here...{" "}
            <Link to="/products">Add some products!</Link>
          </p>
        )}
        {userCart.length > 0 && cartList}
        {userCart.length > 0 && (
          <Wrapper>
            <TotalPrice>Total price: $ {cartValue.toFixed(2)}</TotalPrice>
            <button className="ok" type="button">
              Check-out
            </button>
          </Wrapper>
        )}
      </CartContainer>
    </section>
  );
}
