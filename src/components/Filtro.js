import React from "react";
import styled from "styled-components"

const DivInput = styled.div`
display: grid;
justify-content:center;
`

const DivFiltro = styled.div`
width: 30%;
heigth: 30%;
background-color: blue;
`

function Filtro() {
  return (

    <DivFiltro>

    <DivInput>
      <h2>Filtros</h2>
      <p>Valor Máximo</p>
      <input type="number" min="0" />
      {/* <input type="range"/> */}
      <p>Valor Maximo</p>
      <input type="number" min="0"/>
      <p>Valor Buscar</p>
      <input type="text"/>
    </DivInput>

    </DivFiltro>
  );
}

export default Filtro;
