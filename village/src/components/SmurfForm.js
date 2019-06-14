import React, { Component } from 'react';
import axios from 'axios';

import './SmurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: `${this.state.height}cm`
    })
    .then(res => console.log(res));

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
    
    this.props.getData();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <label>Add New Smurf</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            type='text'
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            type='number'
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Height"
            type='number'
            value={this.state.height}
            name="height"
          />
          <label className='age'>smurf years</label>
          <label className='cm'>cm</label>
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
