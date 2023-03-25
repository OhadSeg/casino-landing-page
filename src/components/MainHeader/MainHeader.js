import React from 'react';
import './MainHeader.css';

function MainHeader() {
  return (
    <div>
      <div className="header-wrapper">
        <div className="left-lines">
          <div className="green-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <h1 className="jackpot">EL JACKPOT ESTÁ PARA EXPLOTAR</h1>
        <div className="right-lines">
          <div className="green-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div style={{ padding: '0rem 6rem ' }}>
        <hr />
      </div>
    </div>
  );
}

export default MainHeader;
