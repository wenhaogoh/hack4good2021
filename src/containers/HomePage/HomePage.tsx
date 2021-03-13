import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import MapWrapper from '../../components/MapWrapper/MapWrapper';

const HomePageStyles = {
  height: '100%',
};

const HomePage = () => {
  return (
    <div style={HomePageStyles}>
      <NavBar />
      <MapWrapper />
    </div>
  );
};

export default HomePage;
