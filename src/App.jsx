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

export default function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const savedCart = JSON.parse(localStorage.getItem("userCart"));
  const [userCart, setUserCart] = useState(savedCart ? savedCart : []);

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
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(userCart));
  }, [userCart]);

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

  const changeQuantity = (productId, quantity) => {
    const updatedUserCart = userCart.map((item) =>
      item.productId === productId ? { ...item, quantity: quantity } : item
    );
    setUserCart(updatedUserCart);
  };

  const deleteItem = (productId) => {
    setUserCart(userCart.filter((item) => item.productId !== productId));
  };

  return (
    <StyledBody>
      <div>
        <Header userCart={userCart} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
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
