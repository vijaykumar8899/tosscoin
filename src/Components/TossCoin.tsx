import React, { useState } from 'react';
import '../Styles/TossCoin.css';
import headsImage from '../assets/heads.jpg';  // Import heads image
import tailsImage from '../assets/tails.jpg';  // Import tails image

export const TossCoin = () => {
  const [result, setResult] = useState('Heads');
  const [isFlipping, setIsFlipping] = useState(false);

  const tossCoin = () => {
    setIsFlipping(true);

    setTimeout(() => {
      const coin = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(coin);
      setIsFlipping(false);
    }, 3000);
  };

  return (
    <div>
      <h1 className='heading'>Toss Coin</h1>
      <div className={`coin ${isFlipping ? 'flipping' : ''}`}>
        <div
          className={`coin-face coin-head ${result === 'Heads' && !isFlipping ? 'show' : ''}`}
          style={{ backgroundImage: `url(${headsImage})` }} // Use imported image
        ></div>
        <div
          className={`coin-face coin-tail ${result === 'Tails' && !isFlipping ? 'show' : ''}`}
          style={{ backgroundImage: `url(${tailsImage})` }} // Use imported image
        ></div>
      </div>
      <h1>{result}</h1>
      <button onClick={tossCoin} disabled={isFlipping}>
        {isFlipping ? 'Tossing...' : 'Toss Coin'}
      </button>
    </div>
  );
};
