import React from "react";
import styled from "styled-components"


const DivFiltro = styled.div`
display: flex;
justify-content: space-evenly;
background-color: #1d3557;


.inputValores {
  border-radius: 10px;
  width: 100px;
  height: 20px;
  border-style: none;
}

.inputBusca {
  border-radius: 10px;
  width: 400px;
  height: 20px;
  border-style: none;
}
`

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
       
        <div>
          <DivInput>
            <input className="inputValores" 
            type="number"
            placeholder="Valor mínimo"
            value={this.props.filtroMin}
            onChange={this.props.onChangeFiltroMin}
            />
          </DivInput>
        </div>

        <div>
          <DivInput>
            <input className="inputValores" 
            type="number"
            placeholder="Valor máximo"
            value={this.props.filtroMax}
            onChange={this.props.onChangeFiltroMax}
            />
          </DivInput>
        </div>

        <div>
          <DivInput>
            <input className="inputBusca" 
            type="text"
            placeholder="Buscar"
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
