import { useEffect, useState } from "react";

export default function useFakeStore() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return { products, loading, error };
}
