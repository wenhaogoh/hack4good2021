import React from 'react';
import './Disclaimer.css';

interface Props {
  show: boolean;
  onClick: () => void;
}

const Disclaimer = ({show, onClick}: Props) => {
  return (
    <div
      className="Disclaimer"
      style={show ? {opacity: 1} : {pointerEvents: 'none'}}
    >
      <div className="Title">Disclaimer</div>
      <div className="Text">
        Questions asked by The Social Census may feel personal and cause
        discomfort.
      </div>
      <div className="Text">
        Feel free to utilise the "skip question" option should you feel
        uncomfortable answering any of them.
      </div>
      <div className="Text">
        Do keep an open mind while answering these questions and have fun!
      </div>
      <div className="Text Start" onClick={onClick}>
        Begin
      </div>
    </div>
  );
};

export default Disclaimer;
