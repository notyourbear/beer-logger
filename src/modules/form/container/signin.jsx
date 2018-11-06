import React, { Component } from "react";
import Input from "../component/input.jsx";
import { API_SERVER_URI } from "../../../config";

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    let id = event.target.id;
    let value = event.target.value;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.handleSubmit(data);
  };

  render() {
    let { username, password } = this.state;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <>
          <Input
            text="username"
            type="text"
            id="username"
            label="username"
            value={username}
            onChange={this.handleInputChange}
          />
          <Input
            text="password"
            type="password"
            id="password"
            label="type"
            value={password}
            onChange={this.handleInputChange}
          />
        </>
        <button className="btn btn-small btn-primary">Submit</button>
      </form>
    );
  }
}

export default SignInContainer;
