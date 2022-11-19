import React from 'react';

const Result: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div>
      <p>Game Over!</p>
      <p>Your Score: {score}</p>
      {score >= 7 ? <p>You Win!</p> : <p>You Lose!</p>}
    </div>
  );
};

export default Result;
