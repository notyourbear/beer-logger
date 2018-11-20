import React, { Component } from "react";
import OL from "../component/ol.jsx";
import { API_SERVER_URI } from "../../../config";

class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: this.props.drinks ? this.props.drinks : []
    };
  }

  render() {
    let { drinks } = this.state;
    console.log({ drinks, state: this.state });
    return <OL listItems={drinks} />;
  }
}

export default DrinkList;
