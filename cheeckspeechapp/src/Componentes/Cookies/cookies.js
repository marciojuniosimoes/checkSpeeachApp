import "./cookies.css";

import React, { useState } from "react";
/*let LgpdUrl = `https://jsonplaceholder.typicode.com/posts`*/





const cookies = () => {

  const [abrirModal, setAbrirModal]= useState(false)

  const btnDesativado =()=>{
    setAbrirModal(true)

  }
  return (
    <div className={ abrirModal=== false ? 'div-container-cookie':"cookie-desativado"} >
      <div className="cookie-texto">
        <span>
        Este site utiliza Cookies e Tecnologias semelhantes para melhorar sua
        experiência.
        <br />
        Ao utilizar nosso site você concorda que esta de acordo com a nossa
        Política de Privacidade.
        </span>
      </div>
      <div className="cookie-button">
        <button onClick={btnDesativado} > Concordo.</button>
      </div>
    </div>
  );
};

export default cookies;
