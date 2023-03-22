import React from "react";
import "./Instructions.css";
import Icon1 from "../../assets/Icons/number-one.png";
import Icon2 from "../../assets/Icons/number-two.png";
import Icon3 from "../../assets/Icons/number-three.png";
import InstructionItem from "../InstructionItem/InstructionItem";

const instructionList = [
    {
        id: 1,
        title: "Registrate en Codere",
        content:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: Icon1
    },
    {
        id: 2,
        title: "Deposita y apuesta",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: Icon2
    },
    {
        id: 3,
        title: "Gana",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

