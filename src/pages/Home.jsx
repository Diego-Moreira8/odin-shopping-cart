import { useOutletContext } from "react-router-dom";
import Carousel from "../components/Carousel";
import Trending from "../components/Trending";

export default function Home() {
  const [products] = useOutletContext();

  return (
    <div>
      <section>
        <h1>Welcome to FakeStore!</h1>
        <Carousel products={products.slice(0, 3)} />
      </section>
      <Trending products={products.slice(-8)} />
    </div>
  );
}
