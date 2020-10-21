import React from "react";

import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import "./App.css";
import styled from "styled-components"


const AppContainer = styled.div`
background-color: red;
`
class App extends React.Component {
  state = {
    cards: "",
    filtro: "",
    carrinho: "",
  };
  render() {
    return (
      <AppContainer>
        <Home />
        <Produtos />
        <Carrinho />
        <Filtro />
      </AppContainer>
    );
  }
}

export default App;
