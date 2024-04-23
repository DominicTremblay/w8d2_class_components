import React from 'react';
import './PetItem.css';

const PetItem = (props) => {
  return (
    <article className="pet-item">
      <header>
        {props.name} {props.type}
      </header>

      <button onClick={() => props.feedPet(props.id)}>Feed</button>
      <button onClick={() => props.playWithPet(props.id)}>Play</button>

      <ul>
        <li>Breed:{props.breed}</li>
        <li>Color: {props.color}</li>
        <li>Energy: {props.energy}</li>
        <li>Mood: {props.mood}</li>
      </ul>
    </article>
  );
};

export default PetItem;
