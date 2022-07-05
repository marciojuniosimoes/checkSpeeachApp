import "./formulario.css";
import Footer from "../Footer/footer";

import React from "react";

const formulario = () => {
  return (
    <div className="container-form">
      <div className="controle-box-form">
        <div className="box-form">
          <form>
            <div className="div-nome-email">
              <label>Nome</label>
              <input className="nome" placeholder="Escreva seu nome aqui.." />
              <label>E-mail</label>
              <input
                type="email"
                className="email"
                placeholder="Escreva seu e-mail aqui"
              />
            </div>
            <div className="div-telefone-pais">
              <div className="telefone-pais">
                <label>Telefone</label>
                <input placeholder="DDD xxxxx-xxxx" />
              </div>
              <div className="select">
                <label> País</label>
                <select>
                  <option>Brasil</option>
                  <option>Inglaterra</option>
                  <option>França</option>
                  <option>Laos</option>
                  <option>Canadá</option>
                  <option>Túnisia</option>
                </select>
              </div>
            </div>
            <div className="textarea">
              <label>Mensagem</label>
              <input placeholder="escreva aqui sua dúvida/mensagem" />
            </div>
            <div className="btn-form">
              <button className="btn-enviar">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default formulario;
