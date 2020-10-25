import React from "react";
import styled from "styled-components"
import ItemCarrinho from "./ItemCarrinho";

const ContainerdoCarrinho = styled.div`
  /* border: 1px solid black; */
  padding: 0px;
`;
const ContainerLista = styled.div`
  display: grid;
  gap: 4px;
`

class Carrinho extends React.Component {
  calculaValorTotal = () => {
    let valorTotal = 0;
    for(let produto of this.props.produtosNoCarrinho){
        valorTotal += produto.valor * produto.quantidade
    }
    return valorTotal
}
  render(){
    return <ContainerdoCarrinho>
      <h3>Carrinho:</h3>
      <ContainerLista>
        {this.props.produtosNoCarrinho.map((produto) => {
          return <ItemCarrinho 
            item={produto}
            removeProdutoCarrinho={this.props.removeProdutoCarrinho}
          />
        })}
        
      </ContainerLista>
      <h4>Valor total: R${this.calculaValorTotal()},00</h4>
    </ContainerdoCarrinho>
  }
}

export default Carrinho;
