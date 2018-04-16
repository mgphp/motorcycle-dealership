import React, {Component} from 'react';

import {Map, GoogleApiWrapper} from 'google-maps-react';
import DealershipResults from './DealershipResults';
import Dealerships from '../data/dealerships';
// import MapMarkers from './MapObjects';

class FindDealership extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
      dealerships: Dealerships,
      dealershipSelect: null,
      id: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let postcode = this.refs.postcode.value;
    let geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({address: postcode},
      function (results, status) {
        let g_lat = results[0].geometry.location.lat();
        let g_long = results[0].geometry.location.lng();
        this.setState({
          lat: g_lat,
          lng: g_long
        })
      }.bind(this),
    );

    let element = document.querySelector('.results');
    element.classList.remove('hidden');
  }

  selectDealership(dealership) {

    let listItem = document.querySelector('li.selected');
    let element = document.querySelector(`li[data-id="${dealership.id}"]`);

    // Remove active status if set
    if (listItem != null) {
      listItem.classList.remove('selected');
    }
    element.classList.add('selected');

    // Update state
    this.setState({
      dealershipSelect: dealership
    });
  }

  changeStage(e) {
    e.preventDefault();
    let stage2 = document.querySelector('.stage2');
    let stage1 = document.querySelector('.stage1');
    stage2.classList.remove('hidden');
    stage1.classList.add('hidden');
  }

  render() {
    return (
      <section className="stage1">
        <form className="find-dealership" ref="postcodeSearch" onSubmit={this.handleSubmit}>
        <h2>Find a Motorcycle dealership</h2>
        <p>Please enter a postcode, address or location and press search to find the closest dealership.</p>
          <div className="form__upper">
            <div className="form__group">
              <label>Postcode</label>
              <input
                type="text"
                ref="postcode"
                name="postcode"
                placeholder="e.g M1 3BE"
              />
            </div>
            <button className="btn btn__search btn--grey">Search</button>
            <button className="btn btn__location btn--dark">Use my location</button>
          </div>
        </form>
          <div className="results hidden">
            <div className="results__right-block">
              <div className="map-wrapper" style={style}>
              <Map
                google={this.props.google}
                className="map"
                initialCenter={{
                  lat: 51.509865,
                  lng: -0.118092
                }}


                style={{height: '100%', position: 'relative !important', width: '100%'}}
                zoom={14}>
                {/*<MapMarkers dealership={Dealerships} />*/}
              </Map>
              </div>
            </div>
            <div className="results__left-block">
              <DealershipResults
                onDealershipSelect={dealershipSelect => this.selectDealership(dealershipSelect)}
                dealership={this.state.dealerships}
              />
            </div>
          </div>
          <div className="button__block">
            <form onClick={this.changeStage}>
              <button className="btn btn__continue btn--grey" disabled="disabled">Continue to next step</button>
            </form>
          </div>
      </section>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCZ2OyAnEn93gLYmTIkw0EKN7Zw1h5wKwc')
})(FindDealership)