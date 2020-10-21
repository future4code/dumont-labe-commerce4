import React from "react";

import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import "./App.css";

class App extends React.Component {
  state = {
    home: [],
    filtro: "",
    carrinho: "",
  };
  render() {
    return (
      <div className="App">
        <Home />
        <Produtos />
        <Carrinho />
        <div>
          <Filtro />
        </div>
      </div>
    );
  }
}

export default App;
