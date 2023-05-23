import React, { useState } from 'react';

import Guess from '../components/Guess';
import { OptionsInterface } from '../App';

interface CountryInterface {
  name: string;
  capital: string;
}
interface QuizInterface {
  options: CountryInterface[];
  handleOptions: React.Dispatch<React.SetStateAction<OptionsInterface[]>>;
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
      <div className="options">
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
      </div>
      <p
        style={{
          color: '#2cbf2c',
          visibility: !correctText ? 'hidden' : 'visible',
        }}
      >
        Correct!
      </p>
      <p
        style={{
          color: '#f00',
          visibility: !incorrectText ? 'hidden' : 'visible',
        }}
      >
        Incorrect!
      </p>
      <p style={{ visibility: !incorrectText ? 'hidden' : 'visible' }}>
        Correct Answer: {currentCountry.capital}
      </p>
      <p>
        Your Score:{' '}
        <span style={{ color: score >= 7 ? '#0f0' : '#f00' }}>{score}</span>
      </p>
    </div>
  );
};

export default Quiz;
