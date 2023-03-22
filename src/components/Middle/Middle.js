import React from "react";
import GamesList from "../GamesList/GamesList";
import Instructions from "../Instructions/Instructions";
import MainHeader from "../MainHeader/MainHeader";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle-part">
      <MainHeader />
      <GamesList />
      <Instructions/>
    </div>
  );
};

export default Middle;
