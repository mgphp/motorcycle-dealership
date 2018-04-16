import React from 'react';
import {Marker} from 'google-maps-react';

const MapObjects = (props) => {

  const markers = props.dealership.map((marker, index) => {

    return(
      <Marker
        name={marker.name}
        title="The marker`s title will appear as a tooltip."
      />
    )
  })
  return (
    { markers }
  );
}

export default MapObjects;