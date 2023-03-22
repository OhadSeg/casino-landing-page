import React from "react";
import "./InstructionItem.css";

function InstructionItem(props) {

    const {title, content, icon, id} = props.data;

    return (
      <div className="instructions-container">
        <div className="instruction-card">
          <img src={icon} alt="Icon 1" />
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  }
  
  export default InstructionItem;
