import { Link } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../icons/shopping-cart.svg";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.main};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  display: block;

  &:hover {
    background-color: #ffffff1c;
  }
`;

const Brand = styled(StyledLink)`
  font: 3rem Rancho, cursive;

  &:hover {
    background-color: transparent;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CartLink = styled(StyledLink)`
  position: relative;
`;

const CartIcon = styled.img`
  height: 1.75rem;
`;

const CartCounter = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.warning};
  font-size: 0.65rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Brand to="/">FakeStore</Brand>
        <nav>
          <NavLinks>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/products">Products</StyledLink>
            </li>
            <li>
              <CartLink to="/cart" title="Shopping Cart">
                <CartIcon src={cartIcon} alt="Shopping-cart Icon" />
                <CartCounter>99+</CartCounter>
              </CartLink>
            </li>
          </NavLinks>
        </nav>
      </Wrapper>
    </StyledHeader>
  );
}
