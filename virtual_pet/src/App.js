import { Component } from 'react';
import PetList from './components/PetList';
import './App.css';

class App extends Component {
  // optional
  constructor(props) {
    super(props);
    this.state = {
      pets: [
        {
          id: 1,
          type: 'Dog',
          name: 'Max',
          breed: 'Labrador',
          color: 'Golden',
          mood: 'Happy',
          energy: 100,
        },
        {
          id: 2,
          type: 'Cat',
          name: 'Bella',
          breed: 'Siamese',
          color: 'Cream',
          mood: 'Excited',
          energy: 95,
        },
        {
          id: 3,
          type: 'Bird',
          name: 'Charlie',
          breed: 'Parakeet',
          color: 'Green',
          mood: 'Relaxed',
          energy: 85,
        },
        {
          id: 4,
          type: 'Fish',
          name: 'Nemo',
          breed: 'Clownfish',
          color: 'Orange',
          mood: 'Playful',
          energy: 90,
        },
        {
          id: 5,
          type: 'Dog',
          name: 'Buddy',
          breed: 'Golden Retriever',
          color: 'Golden',
          mood: 'Hungry',
          energy: 80,
        },
        {
          id: 6,
          type: 'Cat',
          name: 'Daisy',
          breed: 'Persian',
          color: 'White',
          mood: 'Calm',
          energy: 75,
        },
        {
          id: 7,
          type: 'Bird',
          name: 'Rocky',
          breed: 'Cockatiel',
          color: 'Gray',
          mood: 'Sleepy',
          energy: 70,
        },
        {
          id: 8,
          type: 'Fish',
          name: 'Goldie',
          breed: 'Goldfish',
          color: 'Gold',
          mood: 'Energetic',
          energy: 85,
        },
        {
          id: 9,
          type: 'Dog',
          name: 'Bailey',
          breed: 'Siberian Husky',
          color: 'Gray',
          mood: 'Anxious',
          energy: 90,
        },
        {
          id: 10,
          type: 'Cat',
          name: 'Sadie',
          breed: 'Maine Coon',
          color: 'Gray and White',
          mood: 'Nervous',
          energy: 95,
        },
      ],
    };
  }

  componentDidMount() {}

  feedPet = (id) => {
    const updatedPetList = this.state.pets.map((petObj) => {
      if (petObj.id === id) {
        const energy = Math.min(petObj.energy + 10, 100)

        return {
          ...petObj,
          mood: energy === 100 ? 'Full' : 'Happy',
          energy,
        };
      }
      return petObj;
    });

    this.setState((prevState) => ({
      ...prevState,
      pets: updatedPetList,
    }));
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

    this.setState((prevState) => ({
      ...prevState,
      pets: updatedPetList,
    }));
  };

  render() {
    return (
      <PetList
        pets={this.state.pets}
        feedPet={this.feedPet}
        playWithPet={this.playWithPet}
      />
    );
  }
}

export default App;
