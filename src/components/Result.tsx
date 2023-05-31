import React from 'react';

interface ResultInterface { score: number; restart: () => void }

const Result: React.FC<ResultInterface> = ({ score, restart }) => {
  return (
    <div>
      <p>Game Over!</p>
      <p>Your Score: {score}</p>
      <p data-testid="outcome">{score >= 7 ? 'You Win!' : 'You Lose!'}</p>
      <button className='restart-button' onClick={restart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
