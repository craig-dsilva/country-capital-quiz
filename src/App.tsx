/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import Quiz from './containers/Quiz';
import Result from './components/Result';

import Countries from './data/capitals.json';

export interface OptionsInterface {
  name: string;
  capital: string;
}

const App = () => {
  const [options, setOptions] = useState<OptionsInterface[]>([]);
  const [currentCountry, setCurrentCountry] = useState<OptionsInterface>(
    Countries[Math.floor(Math.random() * Countries.length)]
  );
  const [countryIds, setCountryIds] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);

  const setupCountries = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * Countries.length));
    }
    setCountryIds([...countryIds, ...arr]);
    setCorrectCount(0);
  };

  useEffect(() => {
    setupCountries();
  }, []);

  const newCountry = () => {
    setCurrentCountry(Countries[countryIds[0]]);
    const copyOfCountryIds = [...countryIds];
    copyOfCountryIds.shift();
    setCountryIds(copyOfCountryIds);
  };

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Countries[Math.floor(Math.random() * Countries.length)]);
    }
    const duplicatesRemoved = arr.filter(
      (country) => country.capital !== currentCountry.capital
    );
    if (duplicatesRemoved.length < 5) {
      duplicatesRemoved.push(
        Countries[Math.floor(Math.random() * Countries.length)]
      );
    }
    duplicatesRemoved.splice(Math.floor(Math.random() * 4), 0, currentCountry);
    setOptions([...options, ...duplicatesRemoved]);
  }, [currentCountry]);

  return (
    <div className="App">
      <h1>Country Capital Quiz</h1>
      {countryIds.length > 0 ? (
        <Quiz
          options={options}
          handleOptions={setOptions}
          currentCountry={currentCountry}
          handleCountry={newCountry}
          score={correctCount}
          handleCorrectCount={setCorrectCount}
        />
      ) : (
        <Result score={correctCount} restart={setupCountries} />
      )}
      <a
        href="https://github.com/craig-dsilva/country-capital-quiz"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  );
};

export default App;
