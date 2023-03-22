import React from "react";
import "./Instructions.css";
import Icon1 from "../../assets/Icons/number-one.png";
import Icon2 from "../../assets/Icons/number-two.png";
import Icon3 from "../../assets/Icons/number-three.png";
import InstructionItem from "../InstructionItem/InstructionItem";

const instructionList = [
    {
        id: 1,
        title: "Regístrate en Codere",
        content:"Si todavía no eres usuario, abre tu nueva cuenta en menos de 1 minuto.",
        icon: Icon1
    },
    {
        id: 2,
        title: "Deposita y apuesta",
        content:"¡Las mejores ligas del mundo están de vuelta!",
        icon: Icon2
    },
    {
        id: 3,
        title: "Gana",
        content: "Déjate guiar por tu intuición y haz tu apuestas",
        icon: Icon3
    }
] 

function Instructions() {  
  return (
    <div className="instructions-container">
    {
        instructionList.map((instruction)=>{
            return(
                <InstructionItem data = {instruction} ></InstructionItem>
            )
        })
    }
    </div>
  );
}

export default Instructions;

