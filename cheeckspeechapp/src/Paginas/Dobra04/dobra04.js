import "./dobra04.css";
import Cards from "../../Componentes/Cards/card";
import React from "react";

const dobra04 = (props) => {
  return (
    <div className="container-principal-dobra04">
      <div className="card-dobra04">
        <h1>Investimento</h1>
      </div>
      <div className="div-cards">
        <Cards
          titulo="BEGINNER"
          paragrafo="

R$29 por mês ou R$328 para uma compra anual.

Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto excedente)

Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto excedente)

Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)

Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)"
        />
        <Cards  titulo='Business' paragrafo='R$44 por mês ou R$499 para uma compra anual.

Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto excedente)

Transcrição de Áudio em tempo real - 120 minutos (R$0,40 / minuto excedente)

Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto excedente)

Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos (R$0,35 / minuto excedente)'/>
        <Cards titulo='ENTERPRISE' paragrafo='preço sob consulta. 

Preços especiais para grandes volumes.

Prioridade no suporte técnico.

Gestor de conta dedicado.'/>
      </div>
    </div>
  );
};

export default dobra04;
