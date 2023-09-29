import styled from "styled-components";

const cardElementsWidth = "170px";

const StyledProductCard = styled.div`
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 1rem;
  width: calc(${cardElementsWidth} + 2rem);
  cursor: pointer;
  transition: transform 300ms ease-out, box-shadow 300ms ease-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: ${(props) => props.theme.longShadow};
  }
`;

const Img = styled.img`
  width: ${cardElementsWidth};
  height: 170px;
  object-fit: contain;
`;

const TextElements = styled.div`
  width: ${cardElementsWidth};
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
  const { imgSrc, imgAlt, title, price } = props;

  return (
    <StyledProductCard>
      <Img src={imgSrc} alt={imgAlt} />
      <Title>{title}</Title>
      <Price>$ {price.toFixed(2)}</Price>
    </StyledProductCard>
  );
}