import "promise-polyfill/src/polyfill";
import "whatwg-fetch";

import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Form from "./modules/form/container/form.jsx";

import { API_SERVER_URI } from "./config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: null
    };
  }

  componentDidMount() {
    fetch(API_SERVER_URI)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          data
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.error(err);
      });
  }

  handleStateUpdate = data => {
    this.setState({ data: data });
  };

  render() {
    return (
      <main className="container">
        <section className="row justify-content-center">
          <div className="col-6">
            <Form handleStateUpdate={this.handleStateUpdate} />
          </div>
        </section>
      </main>
    );
  }
}

export default hot(module)(App);
