
import './cards.css'
import React from 'react'

const card = ({titulo,paragrafo}) => {
  return (
    <div>
            <div className="card-precos">
        <div className="card-preco01">
          <div className="card-titulo">
            <h1>{titulo}</h1>
          </div>
          <div className="card-texto-preco">
          <span>
           {paragrafo}
          </span>
          <button className="assine">Assine agora</button>
          </div>
        </div>
        <div className="card-preco02"></div>
      </div>
    </div>
  )
}

export default card