import React from "react";
import styled from "styled-components"

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: monospace;

  img {
    display: flex;
    width: 32vw;
    align-items: center;
    justify-items: center;
    
  }
`

const CardInfos = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

  p {
    
    font-size:20px;
    margin: 4px 0;
  }

`

const AddCarrinho = styled.button`
  align-self: center;
  margin-top: 4px;
`

class Card extends React.Component {
  render() {
    const produto = this.props.produto
    return (
      <CardsContainer>
        <img src={produto.img} />
        <CardInfos>
          <p><strong>{produto.nome}</strong></p>
          <p>R${produto.valor},00</p>
          <AddCarrinho onClick={() => this.props.adicionaProdutoNoCarrinho(produto.cod)}>
            Adicionar ao carrinho
          </AddCarrinho>
        </CardInfos>
      </CardsContainer>
    )    
  }
}
  
export default Card;
