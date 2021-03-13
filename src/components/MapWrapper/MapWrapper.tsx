import React, {useMemo, useState} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import {Map} from 'leaflet';
import DisplayMapPosition from '../DisplayMapPosition/DisplayMapPosition';

const MapContainerStyles = {
  height: '100%',
  width: '100%',
};

const MapWrapperStyles = {
  height: '100%',
  width: '100%',
};

const MapWrapper = () => {
  const [map, setMap] = useState<Map>();

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={[1.3572131537770602, 103.82177452789621]}
        zoom={12}
        scrollWheelZoom={true}
        style={MapContainerStyles}
        minZoom={12}
        whenCreated={setMap}
        maxBounds={[
          [1.1995861429497816, 103.57531994410239],
          [1.4790950519824577, 104.0842943523785],
        ]}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    ),
    []
  );

  return (
    <div style={MapWrapperStyles}>
      {map ? <DisplayMapPosition map={map} /> : null}
      {displayMap}
    </div>
  );
};

export default MapWrapper;
