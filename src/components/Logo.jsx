import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  font: bold 3rem Rancho, cursive;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  display: block;
`;

export default function Logo() {
  return <StyledLogo to="/">FakeStore</StyledLogo>;
}
