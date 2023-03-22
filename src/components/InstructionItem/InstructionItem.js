import React from "react";
import "./InstructionItem.css";

function InstructionItem(props) {
  const { title, content, icon, id } = props.data;

  return (
    <div className="instructions-container">
      <div className="instruction-card">
        <div className="icon">
          <img src={icon} alt="content" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default InstructionItem;

// <div className="instructions-container">
//   <div className="instruction-card">
//     <img src={icon} alt="content" />
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// </div>
