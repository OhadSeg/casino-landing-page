import React from "react";
import "./LogoList.css";

const LogoList = (props) => {
  return (
    <div>
    <h1> Metodos para depositar y retirar</h1>
    <div className="logos-list">
    {props.logos.map((logo) => (
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
