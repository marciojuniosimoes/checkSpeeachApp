import React from "react";
import { useState } from "react";
import "./tabs.css";

const tabs = () => {
  const [alterar, setAlterar] = useState(1);

  const abaAtual = (index) => {
    setAlterar(index);
  };

  return (
    <div className="container-abas">
      <div className="card-aba">
        <button
          className={alterar === 1 ? "ativado" : "desativado"}
          onClick={() => abaAtual(1)}
        >
          Transcrição de áudio
          <br /> pré-gravado
        </button>
        <button
          className={alterar === 2 ? "ativado" : "desativado"}
          onClick={() => abaAtual(2)}
        >
          Transcrição de Áudio em tempo real (streaming){" "}
        </button>
        <button
          className={alterar === 3 ? "ativado" : "desativado"}
          onClick={() => abaAtual(3)}
        >
          Identificação de Idiomas em áudios
        </button>
        <button
          className={alterar === 4 ? "ativado" : "desativado"}
          onClick={() => abaAtual(4)}
        >
          Análise de sentimento a partir do áudio (áudio pré-gravado)
        </button>
      </div>
      <div
        className={alterar === 1 ? "conteudo-abas" : "conteudo-desativado"}
        id="aba1"
      >
        <h3>
          {" "}
          Transcrição de áudio
          <br /> pré-gravado
        </h3>
        <div className="linha"></div>

        <p>
          {" "}
          API de transcrição de voz assíncrona para áudio pré-gravado.
          <br /> Temos uma das melhores engines de reconhecimento de fala do
          mundo!
          <br /> O recurso speech-to-text assíncrono é um parceiro estratégico
          para o seu negócio.
          <br /> Esteja você extraindo insights de áudio ou transcrevendo
          conteúdo em escala.
        </p>
      </div>
      <div
        className={alterar === 2 ? "conteudo-abas" : "conteudo-desativado"}
        id="aba2"
      >
        <h3> Transcrição de Áudio<br/> em tempo real (streaming)</h3>
        <div className="linha"></div>
        <p>
          O recurso live-speech-to-text de transcrição ao vivo possibilita<br/> o uso
          de legendas em tempo real para o seu negócio.<br/> Nossas legendas garantem
          que as palestras <br/> e treinamentos ao vivo sejam acessíveis e possam ser
          arquivadas para uso futuro.
        </p>
      </div>
      <div
        className={alterar === 3 ? "conteudo-abas" : "conteudo-desativado"}
        id="aba3"
      >
        <h3>Identificação de<br/> Idiomas em áudios</h3>
        <div className="linha"></div>
        <p>
          Obtendo fala e insights a nível global. <br/>Nossa solução tem suporte a 52
          idiomas.
        </p>
      </div>
      <div
        className={alterar === 4 ? "conteudo-abas" : "conteudo-desativado"}
        id="aba4"
      >
        <h3> Análise de sentimento a partir<br/> do áudio (áudio pré-gravado)</h3>
        <div className="linha"></div>
        <p>
          Encontre os momentos mais importantes em trechos de falas,<br/> diferencie
          falas positivas e negativas e tome decisões de negócios <br/> mais
          assertivas com uma compreensão mais profunda.
        </p>
      </div>
    </div>
  );
};

export default tabs;
