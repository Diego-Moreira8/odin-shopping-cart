import styled from "styled-components";
import Slide from "./Slide";
import { useEffect, useState } from "react";

const StyledCarousel = styled.div`
  ${(props) => props.theme.container};
  position: relative;
  max-width: 700px;
  height: 393px;
  margin: 0 auto;
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
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: ${(props) => props.theme.main};
  }
`;

export default function Carousel({ products }) {
  const slides = products.map((p) => (
    <Slide
      key={p.id}
      id={p.id}
      imgSrc={p.image}
      imgAlt={p.title}
      tittle={p.title}
      price={p.price}
    />
  ));

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeSlide = (slide) => setCurrentSlide(slide);

  useEffect(() => {
    const key = setInterval(() => {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);

    return () => {
      clearInterval(key);
    };
  }, [currentSlide]);

  return (
    <StyledCarousel>
      {slides[currentSlide]}
      <SlideSelector>
        <li>
          <Button
            aria-label="Jump to slide 1"
            className={currentSlide === 0 && "active"}
            onClick={() => handleChangeSlide(0)}
          />
        </li>
        <li>
          <Button
            aria-label="Jump to slide 2"
            className={currentSlide === 1 && "active"}
            onClick={() => handleChangeSlide(1)}
          />
        </li>
        <li>
          <Button
            aria-label="Jump to slide 3"
            className={currentSlide === 2 && "active"}
            onClick={() => handleChangeSlide(2)}
          />
        </li>
      </SlideSelector>
    </StyledCarousel>
  );
}
