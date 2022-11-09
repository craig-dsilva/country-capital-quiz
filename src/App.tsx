import React, { useState } from 'react';
import Quiz from './containers/Quiz';

import initialData from './data/capitals.json';

const App = () => {
  const [countries, setCountries] = useState(initialData);

  return (
    <div className="App">
      <h1>Country Capital Quiz</h1>
      <Quiz country={countries[0]} />
    </div>
  );
};

export default App;
