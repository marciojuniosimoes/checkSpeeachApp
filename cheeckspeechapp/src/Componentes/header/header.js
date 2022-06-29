

import React from 'react'
import './header.css'
import Logo from'../../assets/Logo.svg'

const header = () => {
  return (
    <div className='header-flutuante'>
             <div className='logo'>
            <img src={Logo}/>
            <h1>cheeckSpeech</h1>
        </div>
       <nav>
        <a >Início</a>
            <a>Soluções</a>
            <a>Clientes</a>
            <a>Preços</a>
            <a>Contatos</a>
        </nav>
        </div>

  )
}

export default header;