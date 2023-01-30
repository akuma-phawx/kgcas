import './slots.styles.scss';
import reels from '../../reels';
import Button from '../../components/button/button.component';
import { useState, useEffect } from 'react';

const Slots = () => {
  const [spinResult, setSpinResult] = useState(['❓', '❓', '❓']);
  const [coins, setCoins] = useState(20);
  const [spinResultText, setSpinResultText] = useState('\u200B');

  // Check the winning condition and update the coins and spin result text
  useEffect(() => {
    const checkWinningCondition = () => {
      const [r1, r2, r3] = spinResult;
      let reward = 0;

      // Check for three matching symbols
      if (r1 === r2 && r2 === r3) {
        if (r1 === '🍒') reward = 50;
        if (r1 === '🍎') reward = 20;
        if (r1 === '🍌') reward = 15;
        if (r1 === '🍋') reward = 3;
      }
      // Check for two matching symbols
      else {
        if (r1 === r2) {
          if (r1 === '🍒') reward = 40;
          if (r1 === '🍎') reward = 10;
          if (r1 === '🍌') reward = 5;
        }
        if (r2 === r3) {
          if (r2 === '🍒') reward = 40;
          if (r2 === '🍎') reward = 10;
          if (r2 === '🍌') reward = 5;
        }
      }

      // Update coins and spin result text
      setCoins((prevCoins) => prevCoins + reward);
      setSpinResultText((prevText) => (reward ? `+${reward}` : '\u200B'));
    };
    checkWinningCondition();
  }, [spinResult]);

  // Spin function that takes coins and sets the spin result
  function spin() {
    if (coins === 0) return alert('No Coins Left!');
    setCoins((prevCoins) => prevCoins - 1);
    const result = reels.map(
      (reel) => reel[Math.floor(Math.random() * reel.length)]
    );
    setSpinResult(result);
  }

  return (
    <div className="slots-game-container">
      <div className="coin-container">
        <span className="spin-result-text">{spinResultText}</span>
        <span>
          Remaining <span>🪙</span>: {coins}
        </span>
      </div>
      <div className="reels-container">
        <div className="reel">
          <span> {spinResult[0]} </span>
        </div>
        <div className="reel">
          <span> {spinResult[1]}</span>
        </div>
        <div className="reel">
          {' '}
          <span> {spinResult[2]}</span>
        </div>
      </div>
      <Button
        clickHandler={spin}
        displayText="Spin"
        givenClass="spin-button"
        givenType="button"
      />
    </div>
  );
};

export default Slots;
