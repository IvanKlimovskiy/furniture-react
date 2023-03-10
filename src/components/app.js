import Header from "./header";
import styled from "styled-components";
import Promo from "./promo";
import Gallery from "./gallery";

// CSS IN JS
const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EDEFF0;
  width: 100%;`

// CSS IN JS

function App() {
  return (
    <>
      <Header/>
      <Content>
        <Promo/>
      </Content>
      <Gallery/>
    </>
  );
}

export default App;
