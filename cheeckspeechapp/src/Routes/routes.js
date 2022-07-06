import Dobra from "../Paginas/Dobra01/dobra01";
import Home from "../Componentes/home/home";
import Dobra02 from "../Paginas/Dobra02/dobra02";
import Dobra03 from "../Paginas/Dobra03/dobra03";
import Dobra04 from "../Paginas/Dobra04/dobra04";
import Dobra05 from "../Paginas/Dobra05/dobra05";
import NavBar from "../Componentes/header/header";
import Cookies from "../Componentes/Cookies/cookies"


import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import React from "react";

const routes = () => {
  return (
    <div>
      <Router>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Dobra />} />
          <Route path="/clientes" element={<Dobra02 />} />
          <Route path="/solucoes" element={<Dobra03 />} />
          <Route path="/precos" element={<Dobra04 />} />
          <Route path="/contatos" element={<Dobra05 />} />
        </Routes>
        <Cookies/>

      </Router>


    </div>
  );
};

export default routes;
