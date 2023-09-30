import styled from "styled-components";
import Carousel from "../components/Carousel";
import { useOutletContext } from "react-router-dom";
import Trending from "../components/Trending";

const StyledHome = styled.div``;

export default function Home() {
  const [products] = useOutletContext();

  return (
    <StyledHome>
      <section>
        <h1>Welcome to FakeStore!</h1>
        <Carousel products={products.slice(0, 3)} />
      </section>
      <Trending products={products.slice(0, 9)} />
    </StyledHome>
  );
}
