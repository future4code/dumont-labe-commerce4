import React from "react";
import Card from "./Card"
import styled from "styled-components"

const estoquePesquisa = styled.div`
display: grid;
justify-content:center;
align-items:space-between;
`

function Produtos() {
  return (
  <estoquePesquisa>
      <p>Estoque</p>
      <select>
          <option>Maior Preço</option>
          <option>Menor Preço</option>
      </select>
      <Card/>

  </estoquePesquisa>
  )
}

export default Produtos;
