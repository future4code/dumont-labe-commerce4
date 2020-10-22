import React from "react";
import styled from "styled-components"
import ItemCarrinho from "./ItemCarrinho";

const ContainerdoCarrinho = styled.div`
  border: 1px solid black;
  padding: 8px;
`;
const ContainerLista = styled.div`
  display: grid;
  gap: 4px;
`

class Carrinho extends React.Component {
  render(){
    return <ContainerdoCarrinho>
      <h3>Carrinho:</h3>
      <ContainerLista>
        <ItemCarrinho/>
        <ItemCarrinho/>
        <ItemCarrinho/>
        <ItemCarrinho/>
      </ContainerLista>
      <p>Valor total: R$ 500,00</p>
    </ContainerdoCarrinho>
  }
}

export default Carrinho;
