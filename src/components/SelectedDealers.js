import React from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

class SelectedDealers extends React.Component {

  render() {

    return (
      <div className="selected-item">
        <div className="selected-item__title">Selected Dealership</div>
        <div className="selected-item__group">
          <div className="map-selected">
            <Map
              google={this.props.google}
              className="map"
              initialCenter={{
                lat: 51.509865,
                lng: -0.118092
              }}
              style={{height: '100%', position: 'relative !important', width: '100%'}}
              zoom={12}>
            </Map>
          </div>
          <div className="result-item">
            <div className="result-item__name">Carl Rosner Motorcycles</div>
            <div className="result-item__address1">249 London Road,</div>
            <div className="result-item__address2">Romford, Essex</div>
            <div className="result-item__postcode">RM7 9NB</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZ2OyAnEn93gLYmTIkw0EKN7Zw1h5wKwc')
})(SelectedDealers)