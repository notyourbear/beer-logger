import "promise-polyfill/src/polyfill";
import "whatwg-fetch";

import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Router, Link } from "@reach/router";

import Form from "./modules/form/container/form.jsx";
import SignIn from "./modules/form/container/signin.jsx";

import { API_SERVER_URI, API_GETS, LOGIN_SERVER_URI } from "./config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        beer: [],
        location: [],
        user: []
      },
      token: "",
      loading: true
    };
  }

  componentDidMount() {
    let promises = API_GETS.map(endpoint =>
      fetch(`${API_SERVER_URI}${endpoint}`).then(response => response.json())
    );

    Promise.all(promises)
      .then(dataArray => {
        let data = {};
        API_GETS.forEach((endpoint, i) => (data[endpoint] = dataArray[i]));
        this.setState({ loading: false, data });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.error(err);
      });
  }

  login = data => {
    if (!data.username || !data.password) return;
    fetch(`${LOGIN_SERVER_URI}`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data })
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(data => this.setState({ token: data.token }))
      .catch(err => console.error(err));
  };

  render() {
    let { beer, user } = this.state.data;
    let { token, loading } = this.state;
    let locations = this.state.data.location;

    return (
      <>
        <nav>
          <Link to="/">Home</Link> <Link to="/signin">Sign In</Link>
        </nav>
        <main className="container">
          {loading ? null : (
            <Router>
              <Form
                path="/"
                beer={beer}
                user={user}
                locations={locations}
                token={token}
              />
              <SignIn path="/signin" handleSubmit={this.login} />
            </Router>
          )}
        </main>
      </>
    );
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default hot(module)(App);
