import React from 'react';
import './Button.css';

interface Props {
  label: string;
  onClickHandler: () => void;
}

const Button = ({label, onClickHandler}: Props) => {
  return (
    <div className="Button" onClick={onClickHandler}>
      {label}
    </div>
  );
};

export default Button;
