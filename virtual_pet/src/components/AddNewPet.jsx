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

    this.props.addNewPet({
      name: this.state.name,
      type: this.state.type,
      breed: this.state.breed,
      color: this.state.color,
    });

    this.setState({
      name: '',
      type: '',
      breed: '',
      color: '',
    });
  };

  render() {
    return (
      <section className="add-pet-dialog">
        <header>Add New Pet</header>

        <div className="add-pet-frm">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                id="type"
                onChange={this.handleChange}
                value={this.state.type}
              />
            </div>

            <div className="form-group">
              <label htmlFor="breed">Breed:</label>
              <input
                type="text"
                id="breed"
                onChange={this.handleChange}
                value={this.state.breed}
              />
            </div>

            <div className="form-group">
              <label htmlFor="color">Color:</label>
              <input
                type="text"
                id="color"
                onChange={this.handleChange}
                value={this.state.color}
              />
            </div>

            <div className="submit-btn">
              <input type="submit" value="Add Pet" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddNewPet;
