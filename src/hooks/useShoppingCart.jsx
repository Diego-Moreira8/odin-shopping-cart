import { useState, useEffect } from "react";

export default function () {
  const savedCart = JSON.parse(localStorage.getItem("userCart"));
  const [userCart, setUserCart] = useState(savedCart ? savedCart : []);

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

  return {
    userCart,
    addToCart,
    changeQuantity,
    deleteItem,
  };
}
