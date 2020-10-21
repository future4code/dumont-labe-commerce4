import React from "react";

function Filtro() {
  return (
    <div>
        
      <h2>Filtro</h2>
      <p>Valor Máximo</p>
      <input type="number" min="0" />
      {/* <input type="range"/> */}
      <p>Valor Maximo</p>
      <input type="number" min="0"/>
      <p>Valor Buscar</p>
      <input type="text"/>

    </div>
  );
}

export default Filtro;
