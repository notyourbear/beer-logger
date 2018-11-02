import React, { Component } from "react";
import Input from "../component/input.jsx";
import Select from "../component/select.jsx";

import { API_SERVER_URI } from "../../../config";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: "",
      user: "",
      location: ""
    };
  }

  cleanForm = () => {
    this.setState({
      beer: "",
      user: "",
      location: ""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let toSend = {};
    toSend[this.state.key] = this.state.value;

    let responsePromise = fetch(`${API_SERVER_URI}drink`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSend)
    });

    responsePromise
      .then(response => response.json())
      .then(data => {
        this.state.handleStateUpdate(data);
        this.cleanForm();
      })
      .catch(err => console.error(err));
  };

  render() {
    let { beer, user, location } = this.state;
    let availableBeers = this.props.beer;
    let availableUsers = this.props.user;
    let availableLocations = this.props.location;
    console.log({ props: this.props, availableBeers });
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <Select
          text="User"
          id="user"
          options={availableUsers}
          value={user}
          onChange={this.handleChange}
        />
        <Select
          text="Beer"
          id="beer"
          options={availableBeers}
          value={beer}
          onChange={this.handleChange}
        />
        <Select
          text="Location"
          id="location"
          options={availableLocations}
          value={location}
          onChange={this.handleChange}
        />
        <button className="btn btn-small btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormContainer;
