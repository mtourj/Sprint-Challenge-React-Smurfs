import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import axios from "axios";

import "./app.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const smurfsData = await axios.get("http://localhost:3333/smurfs");
    await this.setState({ smurfs: smurfsData.data });
  };

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink to="/" exact>Smurfs</NavLink>
          <NavLink to="/smurf-form" exact>Add Smurf</NavLink>
        </div>
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} getData={this.getData} />}
        />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
