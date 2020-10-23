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

class Filtro extends React.Component {
  render() {
    return (

      <DivFiltro>    
        <h3>Filtros</h3>
        <div>
          <DivInput>
            Valor Mínimo:
            <input type="number"
            value={this.props.filtroMin}
            onChange={this.props.onChangeFiltroMin}
            />
          </DivInput>
        </div>
        <div>
          <DivInput>
            Valor Máximo:
            <input type="number"
            value={this.props.filtroMax}
            onChange={this.props.onChangeFiltroMax}
            />
          </DivInput>
        </div>
        <div>
          <DivInput>
            Busca por nome:
            <input type="text"
            value={this.props.filtroNome}
            onChange={this.props.onChangeFiltroNome}
            />
          </DivInput>
        </div>
      </DivFiltro>
    );
  }
}

export default Filtro;
