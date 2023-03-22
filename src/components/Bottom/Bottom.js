import React from "react";
import "./Bottom.css";
import LogoList from "../LogoList/LogoList";
import { paymentMethods, sponsors,warnings } from "../../data/sponsors";

const Bottom = () => {
  return (
    <div>
      <div className="button-center">
        <button> Regístrate Ahora </button>
      </div>
      <div className="gray-background">
        <h1>Métodos para depositar y retirar</h1>
        <LogoList logos={paymentMethods} />
      </div>
      <LogoList logos={sponsors} />
      <LogoList logos={warnings} />
      <div className="last-paragrph">
      Codere Apuestas opera en España bajo Codere Online, SAU, 
      con las siguientes licencias otorgadas por la DGOJ: 225-11/GA/A86346038/SGR, AOC/2014/002</div>
    </div>
  );
};

export default Bottom;
