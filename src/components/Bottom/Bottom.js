import React from "react";
import "./Bottom.css";
import LogoList from "../LogoList/LogoList";
import { paymentMethods, sponsors } from "../../data/sponsors";

const Bottom = () => {
  return (
    <div>
      <div className="button-center">
        <button> Registrate Ahora </button>
      </div>
      <div className="gray-background">
        <h1>Métodos para depositar y retirar</h1>
        <LogoList logos={paymentMethods} />
      </div>
      <LogoList logos={sponsors} />
    </div>
  );
};

export default Bottom;
