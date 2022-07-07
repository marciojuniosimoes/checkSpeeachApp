import './footer.css'
import WhatsApp from "../../assets/whatsapp.png"
import Instagram from "../../assets/instagram.png"
import Linkedin  from "../../assets/linkedin.png"
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook.png"
import Logo from "../../assets/Logo.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'



import React from 'react'


const footer = () => {
  return (
    <div className='div-footer'>
        <div className='menu-footer'>
            <span className='h1-menu'>Menu</span>
 
       <AnchorLink href='#dobra01'>Início</AnchorLink>
       <AnchorLink href='#dobra02'>Clientes</AnchorLink>
       <AnchorLink href='#dobra03'>Soluções</AnchorLink>
       <AnchorLink href='#dobra04'>Preços</AnchorLink>
       <AnchorLink href='#dobra05'>Contatos</AnchorLink>
        </div>
        <div className='links-externos'
        >
            <a href='https://web.whatsapp.com/' target="blank"><img src={WhatsApp} className='instagram' alt='whatsapp'/></a>
            <a href='https://www.instagram.com/' target="blank"><img src={Instagram} className='instagram' alt='instagram'/></a>
            <a href='https://www.linkedin.com/' target="blank"><img src={Linkedin} className='linkedln'alt='linkedin'/></a>
            <a href='https://twitter.com/' target="blank"><img src={Twitter} className='facebook' alt='facebook'/></a>
            <a href='https://www.facebook.com/' target="blank"><img src={Facebook} className='twiter' alt='twitter'/></a>

        </div>
        <div className='footer-direitos'>
            <img src={Logo} alt="logo"/>
            <span>CheckSpeechApp | 2022 | Todos os direitos reservados.</span>
            </div>    



    </div>
  )
}

export default footer