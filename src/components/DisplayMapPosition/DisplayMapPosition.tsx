import {Map} from 'leaflet';
import React, {useCallback, useEffect, useState} from 'react';

interface Props {
  map: Map;
}

const DisplayMapPosition = ({map}: Props) => {
  const [position, setPosition] = useState(map.getCenter());

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on('move', onMove);
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      latitude: {position.lat} longtitude: {position.lng}
    </p>
  );
};

export default DisplayMapPosition;
