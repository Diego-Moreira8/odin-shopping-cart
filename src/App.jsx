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
  const [userCart, setUserCart] = useState([]);

  const addToCart = (productId, amount) => {
    const alreadyOnCart = userCart.find((item) => item.productId === productId);

    if (alreadyOnCart) {
      const updatedUserCart = userCart.map((item) =>
        item.productId === productId
          ? { ...item, amount: item.amount + amount }
          : item
      );
      setUserCart(updatedUserCart);
    } else {
      setUserCart((prev) => [...prev, { productId, amount }]);
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
        {products && <Outlet context={[products, addToCart]} />}
      </Content>
      <Footer />
    </StyledBody>
  );
}
