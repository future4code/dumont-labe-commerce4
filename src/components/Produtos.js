import React from "react";
import Card from "./Card"

function Produtos() {
  return (
  <div>
      <p>Estoque</p>
      <select>
          <option>Maior Preço</option>
          <option>Menor Preço</option>
      </select>
      <Card/>

  </div>
  )
}

export default Produtos;
