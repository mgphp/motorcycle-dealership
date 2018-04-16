import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class SelectedDealers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const style = {
      width: '200px',
      height: '200px'
    }

    return (
      <div className="selected-item">
        <div className="selected-item__title">Selected Dealership</div>
        <div className="selected-item__group">
          <div style={style}>
          <Map
            google={this.props.google}
            className="map"
            initialCenter={{
              lat: 51.509865,
              lng: -0.118092
            }}
            style={{height: '280px !important', position: 'relative !important', width: '500px !important'}}
            zoom={14}>
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