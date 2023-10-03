import styled from "styled-components";

const StyledErrorMessage = styled.p`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.canvas};
  box-shadow: ${(props) => props.theme.shadow};
  text-align: center;
  max-width: 300px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  line-height: 1.25;
  border-radius: 1rem;
`;

export default function ErrorMessage({ error }) {
  return (
    <StyledErrorMessage>
      An error occurred while trying to load our products. Try reloading the
      page. <br /> {error}
    </StyledErrorMessage>
  );
}
