import React from 'react';
import PetItem from './PetItem';
import './PetList.css';

function PetList(props) {
  const petList = props.pets?.map((petObj) => (
    <PetItem key={petObj.id} {...petObj} feedPet={props.feedPet} playWithPet={props.playWithPet} />
  ));
  return (
    <section className="pet-list-section">
      <header>
        <h1>My Virtual Pets</h1>
      </header>

      <div className="pet-list-container">{petList}</div>
    </section>
  );
}

export default PetList;
