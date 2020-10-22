
import React from "react"; 
 
import Produtos from "./components/produtos/Produtos";  
import Carrinho from "./components/carrinho/Carrinho";
import Filtro from "./components/filtro/Filtro";
import "./App.css";
import styled from "styled-components"


const AppContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
`;
class App extends React.Component {
  state = {
    cards: "",
    filtro: "",
    carrinho: "",
  };
  render() {
    return (
      <AppContainer>
        <Filtro />
        <Produtos />
        <Carrinho />
      </AppContainer>
    );
  }
}

export default App;
