import React, {useState} from 'react';
import './Loader.css';
import Typewriter from 'typewriter-effect';

interface Props {
  show: boolean;
}

const Loader = ({show}: Props) => {
  const [isTranslating, setIsTranslating] = useState(false);

  return (
    <div className="Loader" style={show ? {opacity: 1} : undefined}>
      <h1
        style={
          isTranslating
            ? {transform: 'translateY(-40vh)', fontSize: 20}
            : undefined
        }
      >
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(5000)
              .changeDelay(60)
              .typeString('The Social Census')
              .callFunction(() =>
                setTimeout(() => setIsTranslating(true), 1000)
              )
              .start();
          }}
        />
      </h1>
    </div>
  );
};

export default Loader;
