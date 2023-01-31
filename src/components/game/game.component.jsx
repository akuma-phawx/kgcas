import React from 'react';

const Game = ({ game }) => {
  const startGame = () => {
    // Redirect to the game's start URL if it exists
    if (game.startUrl) window.location.replace(game.startUrl);
  };

  return (
    <div>
      <img
        className="background-image"
        src={game.thumb.url}
        alt={`${game.title} by ${game.providerName}`}
        onClick={startGame}
      />
    </div>
  );
};
export default Game;
