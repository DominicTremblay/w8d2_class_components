import { Component } from 'react';
import axios from 'axios';
import PetList from './components/PetList';
import AddNewPet from './components/AddNewPet';
import './App.css';

class App extends Component {
  // optional
  constructor(props) {
    super(props);
    this.state = {
      displayPetForm: false,
      pets: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/pets',
    })
      .then((response) => {
        this.setState({ pets: response.data });
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  }

  feedPet = (id) => {
    axios({
      method: 'PUT',
      url: `/api/pets/${id}`,
      data: { action: 'feed' },
    })
      .then((response) => {
        const newPet = response.data;
        const updatedPetlist = this.state.pets.map((petObj) => {
          if (petObj.id === newPet.id) {
            return newPet;
          }

          return petObj;
        });

        this.setState({ pets: updatedPetlist });
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };

  playWithPet = (id) => {
    axios({
      method: 'PUT',
      url: `/api/pets/${id}`,
      data: { action: 'play' },
    })
      .then((response) => {
        const newPet = response.data;

        const updatedPetlist = this.state.pets.map((petObj) => {
          if (petObj.id === newPet.id) {
            return newPet;
          }

          return petObj;
        });

        this.setState({ pets: updatedPetlist });
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };

  addNewPet = (petObj) => {
    axios({
      method: 'POST',
      url: '/api/pets',
      data: petObj,
    })
      .then((response) => {
        this.setState({
          pets: [...this.state.pets, response.data.pet],
          displayPetForm: false,
        });
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };

  openPetForm = () => this.setState({ displayPetForm: true });

  render() {
    return (
      <>
        <PetList
          pets={this.state.pets}
          feedPet={this.feedPet}
          playWithPet={this.playWithPet}
          openPetForm={this.openPetForm}
        />
        {this.state.displayPetForm && <AddNewPet addNewPet={this.addNewPet} />}
      </>
    );
  }
}

export default App;
