import React from 'react';
import './Question.css';

interface Props {
  question?: string;
}

const Question = ({question}: Props) => {
  return (
    <div>{question ? <div className={'Question'}>{question}</div> : null}</div>
  );
};

export default Question;
