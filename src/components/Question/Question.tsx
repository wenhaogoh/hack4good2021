import React from 'react';
import './Question.css';

interface Props {
  question: string;
}

const Question = ({question}: Props) => {
  return (
    <>
      {question.trim().length === 0 ? null : (
        <div className={'Question'}>{question}</div>
      )}
    </>
  );
};

export default Question;
