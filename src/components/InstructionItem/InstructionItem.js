import React from 'react';
import './InstructionItem.css';

function InstructionItem({ data }) {
  const { title, content, icon } = data;

  return (
    <div className="instructions-container">
      <div className="instruction-card">
        <img src={icon} className="icon" alt="content" />
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default InstructionItem;
