import React from "react";
import "./header.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <div className="header-flutuante">
      <div className="logo">
        <div className="img-logo">
          {/*<Link className="sem-efeito" to="/">*/}
          <img src={Logo} alt="logo" />
          {/*</Link>*/}
        </div>
        <div className="txt-logo">
          <Link className="sem-efeito" to='/'>
          <h1>cheeckSpeech</h1>
          </Link>
        </div>
      </div>
      <nav>
        <Link className="efeito" to="/sobre">Inicio</Link>
        <Link className="efeito" to="/solucoes">Soluções</Link>
        <Link className="efeito" to="/clientes">Clientes</Link>
        <Link className="efeito" to="/precos">Preços</Link>
        <Link className="efeito" to="/contatos">Contatos</Link>

        </nav>
  
    </div>
  );
};

export default header;
