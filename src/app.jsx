import "promise-polyfill/src/polyfill";
import "whatwg-fetch";

import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Form from "./modules/form/container/form.jsx";

import { API_SERVER_URI, API_GETS } from "./config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {
        beer: null,
        location: null,
        user: null
      }
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

  render() {
    let { beer, user, location } = this.state.data;
    let { loading } = this.state;
    return (
      <main className="container">
        <section className="row justify-content-center">
          <div className="col-6">
            {loading ? null : (
              <Form beer={beer} user={user} location={location} />
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default hot(module)(App);
