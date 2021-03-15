import React, {useState} from 'react';
import './Button.css';

interface Props {
  showPercentage: boolean;
  show: boolean;
  label: string;
  percentage: number;
  setIsAnsweredToTrue: () => void;
}

const Button = ({
  percentage,
  showPercentage,
  show,
  label,
  setIsAnsweredToTrue,
}: Props) => {
  const [selected, setSelected] = useState(false);

  const onClickHandler = () => {
    setSelected(true);
    setIsAnsweredToTrue();
  };

  if (!showPercentage && selected) {
    setSelected(false);
  }

  const classes = ['Button'];

  if (selected) {
    classes.push('selected');
  }

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
      <div>{label}</div>
      {showPercentage ? <div>{percentage}%</div> : null}
    </div>
  );
};

export default Button;
