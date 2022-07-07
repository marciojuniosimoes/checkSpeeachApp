import React from "react";
import "./header.css";
import Logo from "../../assets/Logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
/*import { Link } from "react-router-dom";*/

const header = () => {
  return (
    <div className="header-flutuante">
      <div className="logo">
        <div className="img-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="txt-logo">
          <AnchorLink className="sem-efeito" href="#Home">
            <h1>checkSpeech</h1>
          </AnchorLink>
        </div>
      </div>
      <nav>
        <AnchorLink className="efeito" href="#dobra01">Início</AnchorLink>
        <AnchorLink className="efeito"  href="#dobra02">Clientes</AnchorLink>
        <AnchorLink className="efeito"  href="#dobra03"> Soluções</AnchorLink>
        <AnchorLink className="efeito"  href="#dobra04">Preços</AnchorLink>
        <AnchorLink className="efeito"  href="#dobra05">Contato</AnchorLink>
      </nav>
    </div>
  );
};

export default header;
