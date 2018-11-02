import React, { Component } from "react";
import Input from "../component/input.jsx";
import Select from "../component/select.jsx";

import { API_SERVER_URI } from "../../../config";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: props.beer.length ? props.beer[0] : {},
      user: props.user.length ? props.user[0] : {},
      location: props.location.length ? props.location[0] : {}
    };
  }

  handleChange = event => {
    let id = event.target.id;
    let item = this.props[id].find(item => {
      return event.target.value === item._id;
    });
    this.setState({ [id]: item });
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
    let { beer, user, location } = this.state;
    let availableBeers = this.props.beer;
    let availableUsers = this.props.user;
    let availableLocations = this.props.location;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <Select
          text="User"
          id="user"
          options={availableUsers}
          value={user._id}
          onChange={this.handleChange}
        />
        <Select
          text="Beer"
          id="beer"
          options={availableBeers}
          value={beer._id}
          onChange={this.handleChange}
        />
        <Select
          text="Location"
          id="location"
          options={availableLocations}
          value={location._id}
          onChange={this.handleChange}
        />
        <button className="btn btn-small btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormContainer;
