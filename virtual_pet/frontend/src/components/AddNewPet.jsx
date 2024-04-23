import React, { Component } from 'react';
import './AddNewPet.css';

class AddNewPet extends Component {
  state = {
    name: '',
    type: '',
    breed: '',
    color: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // send the new pet to be added
    this.props.addNewPet({
      name: this.state.name,
      type: this.state.type,
      breed: this.state.breed,
      color: this.state.color,
    });
    this.setState({ name: '', type: '', breed: '', color: '' });
  };

  render() {
    return (
      <div className="add-pet-dialog">
        <header>Add New Pet</header>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              id="type"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed:</label>
            <input
              type="text"
              id="breed"
              value={this.state.breed}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Color:</label>
            <input
              type="text"
              id="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="Add Pet" />
        </form>
      </div>
    );
  }
}

export default AddNewPet;
