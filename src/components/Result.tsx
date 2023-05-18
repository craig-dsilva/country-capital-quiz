import React from 'react';

const Result: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div>
      <p>Game Over!</p>
      <p>Your Score: {score}</p>
      <p data-testid="outcome">{score >= 7 ? 'You Win!' : 'You Lose!'}</p>
    </div>
  );
};

export default Result;
