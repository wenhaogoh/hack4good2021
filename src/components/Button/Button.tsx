import axios from 'axios';
import React, {useState} from 'react';
import {IChoice} from '../../data/data';
import './Button.css';

interface Props {
  showPercentage: boolean;
  show: boolean;
  choice: IChoice;
  totalCount: number;
  setIsAnsweredToTrue: () => void;
}

const Button = ({
  showPercentage,
  show,
  choice,
  totalCount,
  setIsAnsweredToTrue,
}: Props) => {
  const [selected, setSelected] = useState(false);

  const onClickHandler = () => {
    setSelected(true);
    setIsAnsweredToTrue();
    axios.put(`choices/${choice.id}`, {count: choice.count + 1});
  };

  if (!showPercentage && selected) {
    setSelected(false);
  }

  const classes = ['Button'];

  const allChoicesCount = totalCount + 1;
  let currentChoiceCount = choice.count;

  if (selected) {
    classes.push('selected');
    currentChoiceCount += 1;
  }

  const percentage = Math.round((currentChoiceCount / allChoicesCount) * 100);

  return (
    <div
      className={classes.join(' ')}
      onClick={onClickHandler}
      style={
        show && showPercentage
          ? {
              visibility: 'visible',
              pointerEvents: 'none',
              backgroundPosition: `${100 - percentage}% 0%`,
            }
          : show
          ? {visibility: 'visible'}
          : undefined
      }
    >
      <div>
        {choice.name}
        {showPercentage ? `: ${percentage}%` : null}
      </div>
    </div>
  );
};

export default Button;
