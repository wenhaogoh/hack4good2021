import React from 'react';
import './Question.css';

interface Props {
  question: string;
}

const Question = ({question}: Props) => {
  return <div className={'Question'}>{question}</div>;
};

export default Question;
