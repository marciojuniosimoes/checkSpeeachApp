import "./formulario.css";
import Footer from "../Footer/footer";
import ReCaptchaGoogle from "../ReCaptcha/recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";

const formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function envioForm() {
   
    if (nome === "" && email === "" && telefone === "" && mensagem === "") {
     toast("Preencha todos os campos")
     
    }
  }
  return (
    <div className="container-form">
      <div className="controle-box-form">
        <div className="box-form">
          <form onSubmit={envioForm}>
            <div className="div-nome-email">
              <label>Nome</label>

              <input
                className="nome"
                placeholder="Escreva seu nome aqui.."
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
              <label>E-mail</label>

              <input
                type="email"
                className="email"
                placeholder="Escreva seu e-mail aqui"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="div-telefone-pais">
              <div className="telefone-pais">
                <label>Telefone</label>

                <input
                  placeholder="DDD xxxxx-xxxx"
                  value={telefone}
                  onChange={(e) => {
                    setTelefone(e.target.value);
                  }}
                />
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

              <input
                placeholder="escreva aqui sua dúvida/mensagem"
                value={mensagem}
                onChange={(e) => {
                  setMensagem(e.target.value);
                }}
              />
            </div>
            <div className="btn-form">
              <ReCaptchaGoogle />
              <button className="btn-enviar">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={8000}
       
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default formulario;
