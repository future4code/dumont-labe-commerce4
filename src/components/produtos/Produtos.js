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
  state = {
    ordenacao: "Crescente"
  }

  pegaListaFiltrada = () => {
    return this.props.produtos
      .filter((produto) => produto.valor <= this.props.filtroMax)
      .filter((produto) => produto.valor >= this.props.filtroMin)
      .filter((produto) => produto.nome.includes(this.props.filtroNome))
      .sort((a, b) => this.state.ordenacao === "Crescente" ? a.valor - b.valor : b.valor - a.valor)
  }

  render() {
    const listaFiltrada = this.pegaListaFiltrada()
    return (
      <ContainerDeProdutos>
        <Cabecalho>
          <p>Estoque de produtos: {listaFiltrada.length}</p>
          <label>
            Ordenação:
            <select value={this.state.ordenacao}>
              <option value={"Crescente"}>Crescente</option>
              <option value={"Decrescente"}>Decrescente</option>
            </select>
          </label>
        </Cabecalho>
        <GridProdutos>
          {listaFiltrada.map((produto) => {
            return <Card
              produto={produto} 
              adicionaProdutoNoCarrinho={this.props.adicionaProdutoNoCarrinho}
            /> 
          })}
        </GridProdutos>
      </ContainerDeProdutos>
    );
  }
}

export default Produtos;
