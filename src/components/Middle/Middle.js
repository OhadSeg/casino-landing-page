import React from 'react';
import GamesList from '../GamesList/GamesList';
import Instructions from '../Instructions/Instructions';
import MainHeader from '../MainHeader/MainHeader';
import './Middle.css';

const Middle = () => {
  return (
    <div className="middle-part">
      <MainHeader />
      <GamesList />
      <div style={{ padding: '0rem 6rem ' }}>
        <hr />
      </div>
      <Instructions />
    </div>
  );
};

export default Middle;
