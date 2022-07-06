import React from "react";
import "./home.css";
import planeta from "../../assets/planeta.mov";

const home = () => {
  return (
    <div id="Home" className="container-home">
      <video autoPlay={true} loop>
        <source src={planeta} />
      </video>
      <div className="banner-texto">
        <h1>CheckSpeech AI</h1>
      </div>
    </div>
  );
};

export default home;
