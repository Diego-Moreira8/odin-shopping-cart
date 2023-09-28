import styled from "styled-components";
import Slide from "./Slide";

// Delete when done
import test from "../images/test.jpg";

const StyledCarousel = styled.div`
  position: relative;
  max-width: 700px;
  height: 393px;
  background-color: ${(props) => props.theme.canvas};
  box-shadow: ${(props) => props.theme.shadow};
  margin: 0 auto;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideSelector = styled.ul`
  position: absolute;
  bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  box-shadow: ${(props) => props.theme.shortShadow};
  padding: 0.25rem 1rem;
  border-radius: 1rem;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.canvas};
  box-shadow: ${(props) => props.theme.shortInsetShadow};
  width: 1rem;
  height: 1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  //background-color: ${(props) => props.theme.main};
`;

export default function Carousel() {
  return (
    <StyledCarousel>
      <Slide
        imgSrc={test}
        imgAlt={"Alt"}
        tittle={"Men s Cotton Jacket"}
        price={99.99}
      />
      <SlideSelector>
        <Button />
        <Button />
        <Button />
      </SlideSelector>
    </StyledCarousel>
  );
}
