import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useFakeStore from "./hooks/useFakeStore";
import useShoppingCart from "./hooks/useShoppingCart";
import ErrorMessage from "./components/ErrorMessage";

const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export default function App() {
  const { products, loading, error } = useFakeStore();
  const { userCart, addToCart, changeQuantity, deleteItem } = useShoppingCart();

  return (
    <StyledBody>
      <div>
        <Header userCart={userCart} />
        {loading && <h1>Loading...</h1>}
        {error && <ErrorMessage error={error} />}
        {products && (
          <Outlet
            context={[
              products,
              addToCart,
              userCart,
              changeQuantity,
              deleteItem,
            ]}
          />
        )}
      </div>
      <Footer />
    </StyledBody>
  );
}
