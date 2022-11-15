import React from 'react';

interface GuessInterface {
  capital: string;
  handleAnswer: (capital: string) => void;
}

const Guess: React.FC<GuessInterface> = ({ capital, handleAnswer }) => {
  return <button onClick={() => handleAnswer(capital)}>{capital}</button>;
};

export default Guess;
