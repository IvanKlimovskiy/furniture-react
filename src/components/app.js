import Header from "./header";
import styled from "styled-components";
import Promo from "./promo";
import Gallery from "./gallery";
import Footer from "./footer";
import UserContext from "../utils/userContext";
import {useState} from "react";

// CSS IN JS
const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EDEFF0;
  width: 100%;`

// CSS IN JS

function App() {

    const userState = useState({name: 'Иван'})

    return (
        <>
            <UserContext.Provider value={userState}>
                <Header/>
                <Content>
                    <Promo/>
                </Content>
                <Gallery/>
                <Footer/>
            </UserContext.Provider>
        </>
    );
}

export default App;
