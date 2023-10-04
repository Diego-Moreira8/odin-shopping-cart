import { useState } from "react";
import { useOutletContext, useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledProductPage = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 2rem;

  @media (max-width: 800px) {
    flex-flow: column;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;

  @media (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;

const Title = styled.h1`
  font: bold 2rem Roboto, sans-serif;
  text-align: left;
  margin: 0 0 1rem 0;
`;

const Description = styled.p`
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

const AmountInput = styled.input`
  ${(props) => props.theme.amountInput};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function ProductPage() {
  const { id } = useParams();
  const [products, addToCart] = useOutletContext();
  const [currQuantity, setCurrQuantity] = useState(1);

  const product = products[products.findIndex((p) => p.id === parseInt(id))];

  const handleChange = (e) => setCurrQuantity(e.target.value);

  return (
    <StyledProductPage>
      <Image src={product.image} alt={product.title} />

      <div>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>

        <PriceRow>
          <Price>$ {product.price.toFixed(2)}</Price>
          <span>
            ×{currQuantity} = $ {(product.price * currQuantity).toFixed(2)}
          </span>
        </PriceRow>

        <Wrapper>
          <label htmlFor="amount">Amount:</label>
          <AmountInput
            onChange={handleChange}
            type="number"
            value={currQuantity}
            id="amount"
          />
          <Link to="/cart">
            <button
              className="ok"
              type="button"
              onClick={() => addToCart(product.id, parseInt(currQuantity))}
            >
              Add to cart
            </button>
          </Link>
        </Wrapper>
      </div>
    </StyledProductPage>
  );
}
