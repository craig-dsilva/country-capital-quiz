import React from 'react';

interface GuessInterface {
  capital: string;
  handleAnswer: (capital: string) => void;
  disableGuess: boolean;
}

const Guess: React.FC<GuessInterface> = ({
  capital,
  handleAnswer,
  disableGuess,
}) => {
  return (
    <button disabled={disableGuess} onClick={() => handleAnswer(capital)}>
      {capital}
    </button>
  );
};

export default Guess;
