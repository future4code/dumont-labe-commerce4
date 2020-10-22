import React from "react";
import styled from "styled-components"


const DivFiltro = styled.div`
border: 1px solid black;
padding: 8px;
`;

const DivInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`

function Filtro() {
  return (

    <DivFiltro>    
      <h3>Filtros</h3>
      <div>
        <DivInput>
          Valor Mínimo:
          <input type="number" min="0" />
        </DivInput>
      </div>
      <div>
        <DivInput>
          Valor Máximo:
          <input type="number" min="0" />
        </DivInput>
      </div>
      <div>
        <DivInput>
          Busca por nome:
          <input type="text"/>
        </DivInput>
      </div>
    </DivFiltro>
  );
}

export default Filtro;
