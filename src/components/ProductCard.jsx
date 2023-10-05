import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProductCard = styled(Link)`
  ${(props) => props.theme.container};
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: transform 300ms ease-out, box-shadow 300ms ease-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${(props) => props.theme.longShadow};
  }
`;

const Img = styled.img`
  width: 170px;
  height: 170px;
  object-fit: contain;
`;

const TextElements = styled.div`
  height: 1rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Title = styled.div`
  text-align: center;
`;

const Price = styled(TextElements)`
  font-size: 1.5rem;
  height: 1.5rem;
  font-weight: bold;
`;

export default function ProductCard(props) {
  const { id, imgSrc, imgAlt, title, price } = props;

  return (
    <StyledProductCard to={`/product/${id}`}>
      <Img src={imgSrc} alt={imgAlt} />
      <Title>{title}</Title>
      <Price>$ {price.toFixed(2)}</Price>
    </StyledProductCard>
  );
}
