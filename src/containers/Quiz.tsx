import React from 'react';

interface QuizInterface {
  country: { name: string; capital: string };
}

const Quiz: React.FC<QuizInterface> = ({ country }) => {
  return (
    <div className="quiz">
      <h2>Guess the capital of {country.name} ?</h2>
    </div>
  );
};

export default Quiz;
