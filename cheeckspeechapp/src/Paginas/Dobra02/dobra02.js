import "./dobra02.css";
import Cliente1 from '../../assets/cliente1.svg'
import Cliente2 from '../../assets/cliente2.svg'
import Cliente3 from '../../assets/cliente3.svg'
import Cliente4 from '../../assets/cliente4.svg'

import React from "react";

const dobra02 = () => {
  return (
    <div id="dobra02" className="container-principal-dobra02">
      <div className="card-text">
        <h1>Clientes</h1>
      </div>
      <div className="card-clientes">
        <div className="card-coluna1">
        <img className="clienteNet" src={Cliente1} alt='cliente-logo'  /> 
        <img className="clientes" src={Cliente2} alt='cliente-logo02' /> 

        </div>
        <div className="card-coluna2">
        <img className="clientesTerra" src={Cliente3} alt= 'cliente-logo03'/> 
        <img className="clientesMinty" src={Cliente4} alt='cliente-logo04' /> 

        </div>


      </div>
    </div>
  );
};

export default dobra02;
