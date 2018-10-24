import React, { Component } from "react";
import Input from "../component/input.jsx";

import { API_SERVER_URI } from "../../../config";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      key: "",
      value: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  cleanForm = () => {
    this.setState({
      key: "",
      value: ""
    });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let toSend = {};
    toSend[this.state.key] = this.state.value;

    let responsePromise = fetch(API_SERVER_URI, {
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
    const { key, value } = this.state;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <Input
          text="Key"
          label="Key"
          type="text"
          id="key"
          value={key}
          handleChange={this.handleChange}
        />
        <Input
          text="Value"
          label="Value"
          type="text"
          id="value"
          value={value}
          handleChange={this.handleChange}
        />
        <button className="btn btn-small btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormContainer;
