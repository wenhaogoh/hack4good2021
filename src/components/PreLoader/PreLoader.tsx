import React from 'react';
import Spinner from '../Spinner/Spinner';
import './PreLoader.css';

interface Props {
  show: boolean;
}

const PreLoader = ({show}: Props) => {
  return (
    <div className="PreLoader" style={show ? undefined : {opacity: '0'}}>
      <Spinner />
    </div>
  );
};

export default PreLoader;
