import React, {Component} from 'react';
import SelectedDealers from './SelectedDealers';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class ContactDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      emailName: '',
      phone: '',
      purchaseDate: null,
      contact: null
    }
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption});

  }

  handleSubmit() {
    //Do our api call using axios here
    // const url = '';
    // axios.post(url, {
    //
    // })
    //   .then(function (response) {
    //
    //   })
    //   .catch(function (error) {
    //
    //   });
    //
    // e.preventDefault();
  }

  render() {

    const {selectedOption} = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <section className="stage2 hidden">
        <SelectedDealers />
        <form onSubmit={this.handleSubmit}>
          <h3>Contact details</h3>
          <p>Please enter your contact details, so the dealership representative can get in to arrange a test drive.</p>
          <ul>
            <li>
              <div className="form__group">
                <label className="form__group-title">Prefix</label>
                <Select
                  name="form-field-name"
                  value={value}
                  onChange={this.handleChange}
                  options={[
                    {value: 'mr', label: 'Mr'},
                    {value: 'mrs', label: 'Mrs'},
                    {value: 'miss', label: 'Miss'},
                  ]}
                />
              </div>
            </li>
            <li>
              <div className="form__group">
                <label>First Name</label>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="Firstname"/>
              </div>
            </li>
            <li>
              <div className="form__group">
                <label>Surname</label>
                <input type="text" name="surname" value={this.state.surname} placeholder="Surname"/>
              </div>
            </li>
            <li>
              <div className="form__group">
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} placeholder="Email"/>
              </div>
            </li>
            <li>
              <div className="form__group">
                <label>Phone</label>
                <input type="text" name="phone" value={this.state.phone} placeholder="Phone"/>
              </div>
            </li>
            <li>
              <div className="form__group">
                <p>When do you plan to purchase your motorcycle?</p>
                <div className="checkbox-group">
                  <ul>
                    <li>
                      <label>
                        <input name="03months" type="checkbox"/>
                        0 - 3 months</label>
                    </li>
                    <li>
                      <label>
                        <input name="46months" type="checkbox"/>
                        4 - 6 months</label>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label>
                        <input name="712months" type="checkbox"/>
                        7 - 12 months</label>
                    </li>
                    <li>
                      <label>
                        <input name="unknown" type="checkbox"/>
                        Unknown</label>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="form__group">
                <h3>Contact preferences</h3>
                <p>Please select which communication channel you would like us to keep you informed of future news and
                  events.</p>
                <p>We can conduct you about Products, Services, Events and Offers by.</p>
                <div className="checkbox-group">
                  <ul>
                    <li>
                      <label>
                        <input name="email" type="checkbox"/>
                        Email</label>
                    </li>
                    <li>
                      <label>
                        <input name="text" type="checkbox"/>
                        Text</label>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <label>
                        <input name="telephone" type="checkbox"/>
                        Telephone</label>
                    </li>
                    <li>
                      <label>
                        <input name="unknown" type="checkbox"/>
                        None of these</label>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="form__group">
                <h3>Terms and conditions</h3>
                <p></p>
                <p>I have read the privacy policy</p>
              </div>
            </li>
            <li>
              <button className="btn btn__continue btn--grey">Send Request</button>
            </li>
          </ul>
        </form>
        <div className="thank-you hidden">
          <div className="thank-you__title">Thank you</div>

        </div>
      </section>

    )
  }
}

export default ContactDetails;
