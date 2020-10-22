import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ContainerDeProdutos = styled.div`
  border: 1px solid black;

`;

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 8px;

`

class Produtos extends React.Component {
  render() {
    return (
      <ContainerDeProdutos>
        <Cabecalho>
        <p>Estoque de produtos: 10</p>
          <label>
            Ordenação:
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </label>
        </Cabecalho>
        <GridProdutos>
          {this.props.produtos.map((produto) => {
            return <Card produto={produto}/> 
          })}
        </GridProdutos>
      </ContainerDeProdutos>
    );
  }
}

export default Produtos;
