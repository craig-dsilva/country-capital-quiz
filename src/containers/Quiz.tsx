import React, { useEffect, useState } from 'react';
import Guess from '../components/Guess';

import initialData from '../data/capitals.json';

const Quiz = () => {
  // const [countries, setCountries] = useState(initialData);
  const [options, setOptions] = useState<any>([]);
  const [currentCountry, setCurrentCountry] = useState(initialData[0]);
  const [correctText, setCorrectText] = useState(false);
  const [incorrectText, setIncorrectText] = useState(false);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(initialData[i]);
    }
    setOptions([...options, ...arr]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAnswer = (capital: string) => {
    if (capital === currentCountry.capital) {
      setCorrectText(true);
      setTimeout(() => setCorrectText(false), 2000);
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
      {incorrectText && <p>Incorrect !</p>}
      {correctText && <p>Correct !</p>}
    </div>
  );
};

export default Quiz;
