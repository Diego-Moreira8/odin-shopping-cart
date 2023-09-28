import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const Content = styled.div``;

export default function App() {
  return (
    <StyledBody>
      <Content>
        <Header />
        <Outlet />
      </Content>
      <Footer />
    </StyledBody>
  );
}
