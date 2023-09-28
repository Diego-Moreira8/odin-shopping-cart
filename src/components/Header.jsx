import { Link } from "react-router-dom";
import styled from "styled-components";

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
              <StyledLink to="/cart">Cart</StyledLink>
            </li>
          </NavLinks>
        </nav>
      </Wrapper>
    </StyledHeader>
  );
}
