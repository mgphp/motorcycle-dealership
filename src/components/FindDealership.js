import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Map, GoogleApiWrapper,Marker} from 'google-maps-react';
import DealershipResults from './DealershipResults';
import Dealerships from '../data/dealerships';
import Maps from './Map';
// import MapMarkers from './MapObjects';

console.log(Maps);

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

    this.renderMap(postcode);

    let element = document.querySelector('.results');
    element.classList.remove('hidden');
  }

  selectDealership(dealership) {

    let listItem = document.querySelector('li.selected');
    let element = document.querySelector(`li[data-id="${dealership.id}"]`);
    let btnContinue = document.querySelector('.btn__continue');
    btnContinue.removeAttribute('disabled');
    btnContinue.classList.remove('btn--grey');
    btnContinue.classList.add('btn--active');

    // Remove active status if set
    if (listItem != null) {
      listItem.classList.remove('selected');
    }
    element.classList.add('selected');

    // Update state
    this.setState({
      dealershipSelect: dealership
    });

    this.renderMap(dealership.postcode);

  }

  renderMap(postcode) {
    let geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({address: postcode},
      function (results, status) {
        let g_lat = results[0].geometry.location.lat();
        let g_long = results[0].geometry.location.lng();
        this.setState({
          lat: g_lat,
          lng: g_long
        });

        ReactDOM.render(
          <Map google={this.props.google}
               initialCenter={{
                 lat: 40.854885,
                 lng: -88.081807
               }}
               center={{
                 lat: g_lat,
                 lng: g_long
               }}
               style={{width: '100%', height: '100%', position: 'relative'}}
               className={'map'}
               zoom={14}>
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: 37.778519, lng: -122.405640}} />
            <Marker
              name={'Dolores park'}
              position={{lat: 37.759703, lng: -122.428093}} />
            <Marker />
          </Map>

          ,document.getElementById('map-container'));

      }.bind(this),
    );
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
                required="required"
              />
            </div>
            <button className="btn btn__search btn--grey">Search</button>
            <button className="btn btn__location btn--dark">Use my location</button>
          </div>
        </form>
          <div className="results hidden">
            <div className="results__right-block">
              <div className="map-wrapper">
                <div id="map-container"></div>
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