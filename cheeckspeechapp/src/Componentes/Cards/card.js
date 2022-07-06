
import './cards.css'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
         <AnchorLink href='#dobra05'>
          <button className="assine">Assine agora</button>

         </AnchorLink>
        
          </div>
        </div>
        <div className="card-preco02"></div>
      </div>
    </div>
  )
}

export default card