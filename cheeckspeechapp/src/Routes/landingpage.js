import Dobra from "../Paginas/Dobra01/dobra01";
import Home from "../Componentes/home/home";
import Dobra02 from "../Paginas/Dobra02/dobra02";
import Dobra03 from "../Paginas/Dobra03/dobra03";
import Dobra04 from "../Paginas/Dobra04/dobra04";
import Dobra05 from "../Paginas/Dobra05/dobra05";
import NavBar from "../Componentes/header/header";
import Cookies from "../Componentes/Cookies/cookies";

import React from "react";

const landingpage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Dobra />
      <Dobra02 />
      <Dobra03 />
      <Dobra04 />
      <Dobra05 />
      <Cookies />
    </div>
  );
};

export default landingpage;
