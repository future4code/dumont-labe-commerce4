import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  border: 1px solid black;
`;

const CardsFilter = styled.div``;

class Produtos extends React.Component {
  render() {
    return (
      <CardsContainer>
        <p>Estoque de produtos: 10</p>
        <CardsFilter>
          <label>
            Filtrar:
            <select>
              <option>Maior preço</option>
              <option>Menor preço</option>
            </select>
          </label>
        </CardsFilter>
        <Card />
        <Card />
        <Card />
        <Card /> 
      </CardsContainer>
    );
  }
}

export default Produtos;
