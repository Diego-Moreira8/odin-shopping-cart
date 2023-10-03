import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const Content = styled.div``;

export default function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCart, setUserCart] = useState([
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 2 },
  ]);

  const addToCart = (productId, quantity) => {
    const alreadyOnCart = userCart.find((item) => item.productId === productId);

    if (alreadyOnCart) {
      const updatedUserCart = userCart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setUserCart(updatedUserCart);
    } else {
      setUserCart((prev) => [...prev, { productId, quantity }]);
    }
  };

  useEffect(() => console.table(userCart), [userCart]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setProducts(null);
        setError(null);

        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`Error on fetch: ${response.status}`);
        let data = await response.json();

        setProducts(data);
        setLoading(false);

        //console.table(data);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <StyledBody>
      <Content>
        <Header userCart={userCart} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {products && <Outlet context={[products, addToCart, userCart]} />}
      </Content>
      <Footer />
    </StyledBody>
  );
}
