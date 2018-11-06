import React, { Component } from "react";
import Input from "../component/input.jsx";
import Select from "../component/select.jsx";
import Checkbox from "../component/checkbox.jsx";
import { API_SERVER_URI } from "../../../config";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: props.beer.length ? props.beer[0] : {},
      user: props.user.length ? props.user[0] : {},
      location: props.location.length ? props.location[0] : {},
      newBeer: false,
      newLocation: false,
      newUser: false
    };
  }

  handleSelectChange = event => {
    let id = event.target.id;
    let item = this.props[id].find(item => {
      return event.target.value === item._id;
    });
    this.setState({ [id]: item });
  };

  handleInputChange = event => {
    let id = event.target.id;
    let value = event.target.checked;
    console.log(event.target, { value });
    this.setState({ [id]: value }, () => console.log(this.state));
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // let toSend = {};
    // toSend[this.state.key] = this.state.value;
    //
    // let responsePromise = fetch(`${API_SERVER_URI}drink`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(toSend)
    // });
    //
    // responsePromise
    //   .then(response => response.json())
    //   .then(data => {
    //     this.state.handleStateUpdate(data);
    //     this.cleanForm();
    //   })
    //   .catch(err => console.error(err));
  };

  render() {
    let { beer, user, location, newBeer, newLocation, newUser } = this.state;
    let availableBeers = this.props.beer;
    let availableUsers = this.props.user;
    let availableLocations = this.props.location;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        {newUser ? null : (
          <Select
            text="User"
            id="user"
            options={availableUsers}
            value={user._id}
            onChange={this.handleSelectChange}
          />
        )}
        <Checkbox
          label="is it a new user?"
          text="newUser"
          id="newUser"
          value={newUser}
          onChange={this.handleInputChange}
        />
        {newBeer ? null : (
          <Select
            text="Beer"
            id="beer"
            options={availableBeers}
            value={beer._id}
            onChange={this.handleSelectChange}
          />
        )}
        <Checkbox
          label="is it a new beer?"
          text="newBeer"
          id="newBeer"
          value={newBeer}
          onChange={this.handleInputChange}
        />
        {newLocation ? null : (
          <Select
            text="Location"
            id="location"
            options={availableLocations}
            value={location._id}
            onChange={this.handleSelectChange}
          />
        )}
        <Checkbox
          label="is it a new location?"
          text="newLocation"
          id="newLocation"
          value={newLocation}
          onChange={this.handleInputChange}
        />
        <button className="btn btn-small btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormContainer;
