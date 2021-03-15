import React from 'react';
import Button from '../Button/Button';
import './Choice.css';

interface Props {
  setIsAnsweredToTrue: () => void;
  choice: string;
}

const Choice = ({setIsAnsweredToTrue, choice}: Props) => {
  const onClickHandler = () => {
    setIsAnsweredToTrue();
  };

  return (
    <div className="Choice">
      <Button label={choice} onClickHandler={onClickHandler} />
    </div>
  );
};

export default Choice;
