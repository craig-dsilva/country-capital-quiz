import React, { useEffect, useState } from 'react';
import Guess from '../components/Guess';

import Countries from '../data/capitals.json';

const Quiz = () => {
  const [options, setOptions] = useState<any>([]);
  const [currentCountry, setCurrentCountry] = useState<any>(
    Countries[Math.round(Math.random() * Countries.length - 1)]
  );
  const [correctText, setCorrectText] = useState(false);
  const [incorrectText, setIncorrectText] = useState(false);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(Countries[Math.round(Math.random() * Countries.length - 1)]);
    }
    arr.splice(Math.round(Math.random() * 4), 0, currentCountry);
    setOptions([...options, ...arr]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCountry]);

  const checkAnswer = (capital: string) => {
    if (capital === currentCountry.capital) {
      setCorrectText(true);
      setTimeout(() => {
        setCorrectText(false);
        setCurrentCountry(
          Countries[Math.round(Math.random() * Countries.length - 1)]
        );
        setOptions([]);
      }, 2000);
    } else {
      setIncorrectText(true);
      setTimeout(() => setIncorrectText(false), 2000);
    }
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
    </div>
  );
};

export default Quiz;
