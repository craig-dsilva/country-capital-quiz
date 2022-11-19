import React, { useEffect, useState } from 'react';

import Guess from '../components/Guess';

interface CountryInterface {
  name: string;
  capital: string;
}
interface QuizInterface {
  options: CountryInterface[];
  handleOptions: React.Dispatch<React.SetStateAction<never[]>>;
  currentCountry: CountryInterface;
  handleCountry: React.Dispatch<React.SetStateAction<void>>;
  score: number;
  handleCorrectCount: React.Dispatch<React.SetStateAction<number>>;
}

const Quiz: React.FC<QuizInterface> = ({
  options,
  handleOptions,
  currentCountry,
  handleCountry,
  score,
  handleCorrectCount,
}) => {
  const [correctText, setCorrectText] = useState(false);
  const [incorrectText, setIncorrectText] = useState(false);

  const checkAnswer = (capital: string) => {
    if (capital === currentCountry.capital) {
      setCorrectText(true);
      handleCorrectCount((count) => count + 1);
    } else {
      setIncorrectText(true);
    }
    setTimeout(() => {
      setCorrectText(false);
      setIncorrectText(false);
      handleCountry();
      handleOptions([]);
    }, 2000);
  };

  return (
    <div className="quiz">
      <h2>Guess the capital of {currentCountry.name} ?</h2>
      {options.map(
        (option: { name: string; capital: string }, index: number) => (
          <Guess
            key={index}
            capital={option.capital}
            handleAnswer={checkAnswer}
          />
        )
      )}
      {incorrectText ? <p>Incorrect!</p> : correctText && <p>Correct!</p>}
      <p>Your Score: {score}</p>
    </div>
  );
};

export default Quiz;
