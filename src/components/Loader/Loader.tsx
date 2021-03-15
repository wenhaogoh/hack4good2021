import React, {useState} from 'react';
import './Loader.css';

interface Props {
  show: boolean;
}

const Loader = ({show}: Props) => {
  const [isTranslating, setIsTranslating] = useState(false);

  if (show) {
    setTimeout(() => {
      setIsTranslating(true);
    }, 2000);
  }

  return (
    <div className="Loader" style={show ? {opacity: 1} : undefined}>
      <h1
        className="h1"
        style={isTranslating ? {transform: 'translateY(-400px)'} : undefined}
      >
        The Social Census
      </h1>
    </div>
  );
};

export default Loader;
