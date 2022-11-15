import React, { useEffect, useState } from 'react';
import Guess from '../components/Guess';

import initialData from '../data/capitals.json';
interface QuizInterface {
  country: { name: string; capital: string };
}

const Quiz = () => {
  // const [countries, setCountries] = useState(initialData);
  const [options, setOptions] = useState<any>([]);
  const [currentCountry, setCurrentCountry] = useState(initialData[0]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(initialData[i]);
    }
    setOptions([...options, ...arr]);
  }, []);

  const checkAnswer = (capital: string) => {
    if (capital === currentCountry.capital) {
      console.log('correct');
    } else {
      console.log('incorrect');
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
    </div>
  );
};

export default Quiz;
