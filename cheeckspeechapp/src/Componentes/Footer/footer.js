import './footer.css'
import WhatsApp from "../../assets/whatsapp.png"
import Instagram from "../../assets/instagram.png"
import Linkedin  from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook.png"
import Logo from "../../assets/Logo.svg"



import React from 'react'


const footer = () => {
  return (
    <div className='div-footer'>
        <div className='menu-footer'>
            <span className='h1-menu'>Menu</span>
       <a href='/sobre'>Início</a>
       <a href='/solucoes'>Soluções</a>
       <a href='/clientes'>Clientes</a>
       <a href='/precos'>Preços</a>
       <a href='/contatos'>Contatos</a>
        </div>
        <div className='links-externos'
        >
            <a href='https://web.whatsapp.com/' target="blank"><img src={WhatsApp} className='instagram'/></a>
            <a href='https://www.instagram.com/' target="blank"><img src={Instagram} className='instagram'/></a>
            <a href='https://www.linkedin.com/' target="blank"><img src={Linkedin} className='linkedln'/></a>
            <a href='https://twitter.com/' target="blank"><img src={Twitter} className='facebook'/></a>
            <a href='https://www.facebook.com/' target="blank"><img src={Facebook} className='twiter'/></a>

        </div>
        <div className='footer-direitos'>
            <img src={Logo}/>
            <span>CheeckSpeechApp | 2022 | Todos os direitos reservados.</span>
            </div>    



    </div>
  )
}

export default footer