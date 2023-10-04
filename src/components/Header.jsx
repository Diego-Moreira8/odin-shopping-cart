import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.main};
  box-shadow: ${(props) => props.theme.shadow};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 550px) {
    flex-flow: column;
  }
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

const Nav = styled.nav`
  @media (max-width: 550px) {
    width: 100%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 550px) {
    justify-content: space-evenly;
  }
`;

const CartLink = styled(StyledLink)`
  position: relative;
`;

const CartIcon = styled.svg`
  height: 1.75rem;
  fill: ${(props) => props.theme.text};
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

export default function Header({ userCart }) {
  const itemsOnCart = userCart.reduce((acc, curr) => acc + curr.quantity, 0);
  let counter;

  if (itemsOnCart === 0) {
    counter = 0;
  } else if (itemsOnCart > 99) {
    counter = "99+";
  } else {
    counter = itemsOnCart;
  }

  return (
    <StyledHeader>
      <Wrapper>
        <Logo />
        <Nav>
          <NavLinks>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/products">Products</StyledLink>
            </li>
            <li>
              <CartLink to="/cart" title="Shopping Cart">
                <CartIcon
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.69384 25.6375C7.11463 25.6375 6.62086 25.4313 6.21252 25.0188C5.80419 24.6063 5.60002 24.1105 5.60002 23.5313C5.60002 22.9521 5.80625 22.4583 6.21871 22.05C6.63118 21.6417 7.12702 21.4375 7.70621 21.4375C8.28542 21.4375 8.77919 21.6437 9.18752 22.0562C9.59586 22.4687 9.80002 22.9645 9.80002 23.5437C9.80002 24.1229 9.5938 24.6167 9.18134 25.025C8.76887 25.4333 8.27303 25.6375 7.69384 25.6375ZM20.2938 25.6375C19.7146 25.6375 19.2209 25.4313 18.8125 25.0188C18.4042 24.6063 18.2 24.1105 18.2 23.5313C18.2 22.9521 18.4063 22.4583 18.8187 22.05C19.2312 21.6417 19.727 21.4375 20.3062 21.4375C20.8854 21.4375 21.3792 21.6437 21.7875 22.0562C22.1959 22.4687 22.4 22.9645 22.4 23.5437C22.4 24.1229 22.1938 24.6167 21.7813 25.025C21.3689 25.4333 20.873 25.6375 20.2938 25.6375ZM8.10836 8.1375L9.85836 12.3958H18.5209L20.1542 8.1375H8.10836ZM6.73752 5.1625H22.2542C22.869 5.1625 23.3289 5.41528 23.634 5.92084C23.9391 6.42639 23.9556 6.95139 23.6834 7.49584L21.1058 13.8791C20.8992 14.3291 20.5922 14.6951 20.1848 14.9771C19.7775 15.259 19.3201 15.4 18.8125 15.4H9.74169L8.77919 17.0625H22.8375V20.0375H8.05002C7.00002 20.0375 6.23683 19.6082 5.76044 18.7497C5.28405 17.8912 5.29864 17.0469 5.80419 16.2167L7.23336 13.825L3.64586 5.3375H0.962524V2.3625H5.54169L6.73752 5.1625Z" />
                </CartIcon>
                <CartCounter>{counter}</CartCounter>
              </CartLink>
            </li>
          </NavLinks>
        </Nav>
      </Wrapper>
    </StyledHeader>
  );
}
