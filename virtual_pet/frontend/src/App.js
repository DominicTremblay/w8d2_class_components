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
    const updatedPetList = this.state.pets.map((petObj) => {
      if (petObj.id === id) {
        const energy = Math.min(petObj.energy + 10, 100);

        return {
          ...petObj,
          mood: energy === 100 ? 'Full' : 'Happy',
          energy,
        };
      }
      return petObj;
    });

    this.setState({
      pets: updatedPetList,
    });
  };

  playWithPet = (id) => {
    const updatedPetList = this.state.pets.map((petObj) => {
      if (petObj.id === id) {
        const energy = Math.max(petObj.energy - 10, 0);
        return {
          ...petObj,
          energy,
          mood: energy <= 0 ? 'Hungry' : 'Happy',
        };
      }

      return petObj;
    });

    this.setState({
      pets: updatedPetList,
    });
  };

  addNewPet = (petObj) => {
    petObj.id = this.state.pets.length + 1;
    petObj.energy = 100;
    petObj.mood = 'Happy';
    this.setState({
      pets: [...this.state.pets, petObj],
      displayPetForm: false,
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
