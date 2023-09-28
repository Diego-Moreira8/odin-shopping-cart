import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSlide = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  width: 191px;
  height: 213px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

export default function Slide({ imgSrc, imgAlt, tittle, price }) {
  return (
    <StyledSlide>
      <Image src={imgSrc} alt={imgAlt} />
      <Wrapper>
        <Title>{tittle}</Title>
        <Price>$ {price}</Price>
      </Wrapper>
    </StyledSlide>
  );
}
