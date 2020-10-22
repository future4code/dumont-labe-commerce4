import React from "react"
import styled from "styled-components";

const ContainerdoItem = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    align-items: center;

    p {
        margin: 0;
    }

`
class ItemCarrinho extends React.Component {
    render(){
        return <ContainerdoItem>
            <p>1x</p>
            <p>Produto</p>
            <button>Remover</button>
        </ContainerdoItem>
    }
};

export default ItemCarrinho;