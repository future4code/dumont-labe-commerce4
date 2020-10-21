import React from "react";

import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Produtos />
      <Carrinho />
      <Filtro/>
      
    </div>
  );
}

export default App;
