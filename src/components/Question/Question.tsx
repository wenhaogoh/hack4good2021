import React from 'react';

interface Props {
  question?: string;
}

const Question = ({question}: Props) => {
  return <div>{question ? <h3>{question}</h3> : null}</div>;
};

export default Question;
