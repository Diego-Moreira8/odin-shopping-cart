import styled from "styled-components";
import Carousel from "../components/Carousel";
import { useOutletContext } from "react-router-dom";
import Trending from "../components/Trending";

const StyledSection = styled.section`
  padding: 0 2rem;
`;

export default function Home() {
  const [products] = useOutletContext();

  return (
    <StyledSection>
      <h1>Welcome to FakeStore!</h1>
      <Carousel products={products.slice(0, 3)} />
      <Trending products={products.slice(0, 9)} />
    </StyledSection>
  );
}
