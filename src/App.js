import React, { Component } from 'react';

import FindDealership from './components/FindDealership';
import DealershipResults from './components/DealershipResults';
import ContactDetails from './components/ContactDetails';

import dealerships from './data/dealerships';

import './App.css';
import './App.scss';

class App extends Component {
  render () {
    return(
      <div className="container">
        <FindDealership />
        <ContactDetails />
      </div>
    )

  }
}

export default App;