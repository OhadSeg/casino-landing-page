import React from "react";
import sponsors from "../../data/sponsors";
import "./LogoList.css";

const LogoList = () => {
  return (
    <div>
    <h1> Metodos para depositar y retirar</h1>
    <div className="logos-list">
    {sponsors.map((logo) => (
      <div
        className="logo"
        style={{ backgroundImage: `url(${logo.photo})` }}
      ></div>
    ))}
  </div>
  </div>
  );
};

export default LogoList;
