
import './cards.css'
import React from 'react'
import { Link } from 'react-router-dom'

const card = ({titulo,paragrafo}) => {
  return (
    <div className='card-principal'>
            <div className="card-precos">
        <div className="card-preco01">
          <div className="card-titulo">
            <h1>{titulo}</h1>
          </div>
          <div className="card-texto-preco">
          <span>
           {paragrafo}
          </span>
          <Link to='/contatos'>
          <button className="assine">Assine agora</button>
          </Link>
          </div>
        </div>
        <div className="card-preco02"></div>
      </div>
    </div>
  )
}

export default card