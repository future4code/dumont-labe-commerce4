
import React from "react"; 
 
import Home from " ./components/Home";
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
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
