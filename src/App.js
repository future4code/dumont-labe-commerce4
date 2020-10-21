import React from "react";

import Home from "./components/Home";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Produtos />
      <Carrinho />
      
    </div>
  );
}

export default App;
