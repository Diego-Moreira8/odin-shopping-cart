import styled from "styled-components";
import Carousel from "../components/Carousel";

const StyledSection = styled.section`
  padding: 0 2rem;
`;

export default function Home() {
  return (
    <StyledSection>
      <h1>Welcome to FakeStore!</h1>
      <Carousel />
    </StyledSection>
  );
}
