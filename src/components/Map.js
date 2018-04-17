import React from 'react';
import ReactDOM from 'react-dom';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const Maps = ({lat, lon}) => {

  return(
    <Map
      google={this.props.google}
      className="map"
      initialCenter={{
        lat: 51.509865,
        lng: -0.118092
      }}
      center={{
        lat: lat,
        lng: lon,
      }}
      style={{height: '100%', width: '100%'}}
      zoom={14}>
    </Map>
  )
};

export default Maps;
