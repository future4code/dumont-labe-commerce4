import React from "react";
import styled from "styled-components"

const CardsContainer = styled.div`
  border: 2px solid black;
  background-color: blue;
`

const CardInfos = styled.div`
   
`

const AddCarrinho = styled.button`
  align-self: center;
`

class Card extends React.Component {
  render() {
    return (
      <CardsContainer>
        <img src={'https://picsum.photos/300/300'} />
        <CardInfos>
          <p>Nome do produto</p>
          <p>Preço do produto</p>
          <button>Adicionar ao carrinho</button>
        </CardInfos>
      </CardsContainer>
    )    
  }
}
  
export default Card;
