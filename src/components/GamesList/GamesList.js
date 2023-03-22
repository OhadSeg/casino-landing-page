import React from 'react';
import games from '../../data/games';
import GameItem from '../GameItem/GameItem';
import './GamesList.css';

const GamesList = () => {
  return (
    <div className="games-list">
      {games.map((game) => (
        <>
          <GameItem key={game.id} image={game.photo} price={game.amount} />
        </>
      ))}
    </div>
  );
};

export default GamesList;
