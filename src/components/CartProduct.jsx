import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 650px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ProductTextsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  gap: 1rem;

  @media (max-width: 650px) {
    gap: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;

  @media (max-width: 650px) {
    width: 50px;
    height: 50px;
  }
`;

const Title = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.text};

  &:hover {
    text-decoration: underline;
  }
`;

const PricingWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 650px) {
    flex-flow: column;
    gap: 0.5rem;
    align-items: start;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityInput = styled.input`
  ${(props) => props.theme.quantityInput};
`;

const TotalPrice = styled.div`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: ${(props) => props.theme.text};
  }

  &:hover {
    background-color: ${(props) => props.theme.danger};

    svg {
      fill: ${(props) => props.theme.canvas};
    }
  }
`;

export default function CartProduct(props) {
  const {
    id,
    imgSrc,
    imgAlt,
    title,
    quantity,
    price,
    changeQuantity,
    deleteItem,
  } = props;

  const handleChange = (e) => {
    if (e.target.value === "") {
      changeQuantity(id, 0);
    } else {
      changeQuantity(id, parseInt(e.target.value));
    }
  };

  return (
    <StyledCartProduct>
      <ProductWrapper>
        <Link to={`/product/${id}`}>
          <Image src={imgSrc} alt={imgAlt} />
        </Link>

        <ProductTextsWrapper>
          <Title to={`/product/${id}`}>{title}</Title>

          <PricingWrapper>
            <QuantityWrapper>
              <label htmlFor={`quantity-id-${id}`}>Quantity:</label>
              <QuantityInput
                type="number"
                id={`quantity-id-${id}`}
                onChange={handleChange}
                value={quantity}
                min={1}
              />
            </QuantityWrapper>
            <TotalPrice>$ {(price * quantity).toFixed(2)}</TotalPrice>
          </PricingWrapper>
        </ProductTextsWrapper>
      </ProductWrapper>

      <DeleteButton aria-label="Remove item" onClick={() => deleteItem(id)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.52499 19.2499C4.69665 19.2499 3.9979 18.9653 3.42874 18.3962C2.85957 17.827 2.57499 17.1282 2.57499 16.2999V4.8749H0.799988V1.9249H7.02499V0.149902H12.925V1.9249H19.2V4.8749H17.425V16.2891C17.425 17.1296 17.1404 17.8332 16.5712 18.3999C16.0021 18.9666 15.3033 19.2499 14.475 19.2499H5.52499ZM14.475 4.8749H5.52499V16.2999H14.475V4.8749ZM7.14999 14.7749H9.52499V6.3749H7.14999V14.7749ZM10.475 14.7749H12.85V6.3749H10.475V14.7749Z" />
        </svg>
      </DeleteButton>
    </StyledCartProduct>
  );
}
