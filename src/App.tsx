/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Result from './components/Result';

import Quiz from './containers/Quiz';

import Countries from './data/capitals.json';

const App = () => {
  const [options, setOptions] = useState<any>([]);
  const [currentCountry, setCurrentCountry] = useState<any>(
    Countries[Math.round(Math.random() * Countries.length - 1)]
  );
  const [countryIds, setCountryIds] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(Math.round(Math.random() * Countries.length - 1));
    }
    setCountryIds([...countryIds, ...arr]);
  }, []);
  const newCountry = () => {
    console.log(countryIds[0]);
    setCurrentCountry(Countries[countryIds[0]]);
    const copyOfCountryIds = [...countryIds];
    copyOfCountryIds.shift();
    setCountryIds(copyOfCountryIds);
  };
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(Countries[Math.round(Math.random() * Countries.length - 1)]);
    }
    arr.splice(Math.round(Math.random() * 4), 0, currentCountry);
    setOptions([...options, ...arr]);
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
        <Result score={correctCount} />
      )}
    </div>
  );
};

export default App;
