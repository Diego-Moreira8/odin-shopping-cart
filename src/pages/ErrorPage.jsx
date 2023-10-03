import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import styled from "styled-components";

const StyledErrorPage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 100vh;
  text-align: center;
`;

export default function ErrorPage() {
  return (
    <StyledErrorPage>
      <Logo />
      <p>Oh no, this page doesn't exist!</p>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </StyledErrorPage>
  );
}
