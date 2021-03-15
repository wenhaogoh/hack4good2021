import React from 'react';
import Choice from '../Choice/Choice';
import './Answer.css';

interface Props {
  setIsAnsweredToTrue: () => void;
  choices: string[];
}

const Answer = ({setIsAnsweredToTrue, choices}: Props) => {
  return (
    <div className="Answer">
      {choices.map((choice, index) => (
        <Choice
          key={index}
          choice={choice}
          setIsAnsweredToTrue={setIsAnsweredToTrue}
        />
      ))}
    </div>
  );
};

export default Answer;
