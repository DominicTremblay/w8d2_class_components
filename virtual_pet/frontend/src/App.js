import { Component } from 'react';
import axios from 'axios';
import PetList from './components/PetList';
import AddNewPet from './components/AddNewPet';

class App extends Component {
  // optional
  constructor(props) {
    super(props);

    // initialize the state
    this.state = {
      pets: [],
      displayAddPet: false,
    };

    // bind the methods of the class
    this.playWithPet = this.playWithPet.bind(this);
  }

  feedPet = (id) => {
    // does not bind the this keyword
    // this is bound to the class itself
    // send the id of the pet to the backend /api/pets/1 and
    // provide the action: feed || play

    axios({
      method: 'PUT',
      url: `/api/pets/${id}`,
      data: {
        action: 'feed',
      },
    })
      .then((response) => {
        const newPet = response.data;

        const updatedPets = this.state.pets.map((petObj) => {
          if (petObj.id === id) {
            return newPet;
          }

          return petObj;
        });

        this.setState({ pets: updatedPets });
      })
      .catch((err) => console.log(`Error: ${err.message}`));
  };

  playWithPet(id) {
    // does rebind the this keyword
    // bind the method in the constructor

    axios({
      method: 'PUT',
      url: `/api/pets/${id}`,
      data: {
        action: 'play',
      },
    })
      .then((response) => {
        const newPet = response.data;

        const updatedPets = this.state.pets.map((petObj) => {
          if (petObj.id === id) {
            return newPet;
          }

          return petObj;
        });

        this.setState({ pets: updatedPets });
      })
      .catch((err) => console.log(`Error: ${err.message}`));
  }

  addNewPet = (petObj) => {
    axios({
      method: 'POST',
      url: '/api/pets',
      data: petObj,
    })
      .then((response) => {
        const newPet = response.data.pet;

        this.setState({
          pets: [...this.state.pets, newPet],
          displayAddPet: false,
        });
      })
      .catch((err) => console.log(`Error: ${err.message}`));
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/pets',
    })
      .then((response) => {
        this.setState({ pets: response.data });
      })
      .catch((err) => console.log(`Error: ${err.message}`));
  }

  componentDidUpdate() {
    console.log("It updated!")
  }

  showAddPet = () => this.setState({ displayAddPet: true });

  render() {
    return (
      <div>
        <PetList
          pets={this.state.pets}
          feedPet={this.feedPet}
          playWithPet={this.playWithPet}
          showAddPet={this.showAddPet}
        />
        {this.state.displayAddPet && <AddNewPet addNewPet={this.addNewPet} />}
      </div>
    );
  }
}

export default App;
