import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;

  @media (max-width: 400px) {
    flex-flow: column;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Built by Diego Moreira in 2023.</p>
      <p>
        <a href="https://diegomoreira.vercel.app">Visit my website!</a>
      </p>
    </StyledFooter>
  );
}
