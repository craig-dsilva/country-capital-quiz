import React, { useState } from 'react';

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
  const [questionNumber, setQuestionNumber] = useState(1);
  const [disableGuess, setDisableGuess] = useState(false);

  const checkAnswer = (capital: string) => {
    if (capital === currentCountry.capital) {
      setCorrectText(true);
      handleCorrectCount((count) => count + 1);
      setDisableGuess(true);
    } else {
      setIncorrectText(true);
      setDisableGuess(true);
    }
    setTimeout(() => {
      setCorrectText(false);
      setIncorrectText(false);
      setDisableGuess(false);
      setQuestionNumber((count) => count + 1);
      handleCountry();
      handleOptions([]);
    }, 2000);
  };

  return (
    <div className="quiz">
      <h2>Guess the capital of {currentCountry.name} ?</h2>
      <p>Question {questionNumber} / 10</p>
      {options.map(
        (option: { name: string; capital: string }, index: number) => (
          <Guess
            key={index}
            capital={option.capital}
            handleAnswer={checkAnswer}
            disableGuess={disableGuess}
          />
        )
      )}
      {incorrectText ? <p>Incorrect!</p> : correctText && <p>Correct!</p>}
      {incorrectText && <p>Correct Answer: {currentCountry.capital}</p>}
      <p>Your Score: {score}</p>
    </div>
  );
};

export default Quiz;
