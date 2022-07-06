import "./dobra01.css";
import fotodobra01 from "../../assets/retangulo.svg";
import { Link } from "react-router-dom";

import React from "react";

const dobra01 = () => {
  return (
    <div className="container-principal">
      <div className="card-txt">
        <h1>CheeckSpeech</h1>
        <h3>
          O CheckSpeech AI é um conjunto de APIs de conversão de fala em textos,
          bem como a interpretação do sentimento dominante nos dizeres. <br />
          Nossa solução é treinada em mais de 500.000 horas de áudios,
          transcritos por humanos de uma ampla variedade de idades,
          nacionalidades, sotaques e níveis de instruções.
          <br /> A API é comercializada no modelo SAAS (software as a service).
        </h3>
        <Link to="/contatos">
      <button>Conheça Agora!</button>
        </Link>
      </div>
      <div className="card-foto">
        <img src={fotodobra01} alt="pht01" />
      </div>
    </div>
  );
};

export default dobra01;
