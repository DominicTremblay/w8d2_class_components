import React from 'react';
import './PetItem.css';

function PetItem(props) {
  return (
    <article className="pet-item">
      <header>
        <h2>
          {props.name} ({props.type})
        </h2>
        <button onClick={() => props.feedPet(props.id)}>Feed</button>
        <button onClick={() => props.playWithPet(props.id)}>Play</button>
      </header>
      <ul>
        <li>Breed: {props.breed}</li>
        <li>Color: {props.color}</li>
        <li>Energy: {props.energy}</li>
        <li>Mood: {props.mood}</li>
      </ul>
    </article>
  );
}

export default PetItem;
