import React from "react";
import LoginForm from "./LoginForm";
import PetCard from "./PetCard.js";
import PetForm from "./PetForm";
import { Map, GoogleApiWrapper } from "google-maps-react";
const petsURL = "http://localhost:3000/pets";

class PetsContainer extends React.Component {
  //iterate over all pets for this specific owner and create a PetCard for them
  postPet = pet => {
    console.log(pet);
    let { name, image, anmial_type, age } = pet;
    let newPet = {
      name: name,
      image: image,
      anmial_type: anmial_type,
      age: age
    };
    // let newPets = this.state.currentUserPets.push(pet)
    fetch(petsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        pet: { ...newPet, owner_id: this.props.user.id }
      })
    })
      .then(res => res.json())
      .then(pet => this.props.freshPetsFunction(pet));
    //  this.setState({currentUserPets: this.state.currentUserPets[0]})
  };

  // pets.filter(pet => pet.owner_id == this.props.user.id)
  // Create Pet Cards:

  everyPet = () => {
    // console.log(this.props.getFreshPets())
    console.log("PETS CONTAINER PROPS:", this.props.user.pets);
    // if (this.props.currentUserPets === 1) {
    // let fresheningUpPets = this.props.freshPetsFunction()
    if (!this.props.currentUserPets) {
      console.log("no current pets");
      return <PetForm addPet={this.postPet} user={this.props.user} />;
    }
    return this.props.currentUserPets.map(pet => {
      return (
        <PetCard
          pet={pet}
          user={this.props.user}
          editPet={this.props.editPet}
          deletePet={this.props.deletePet}
          // notedPet={this.props.notedPet}
        />
      );
    });
    //  }
  };

  render() {
    return (
      <>
        <PetForm
          addPet={this.postPet}
          user={this.props.user}
          editPet={this.props.editPet}
        />
        <div className="ui grid container" style={{ marginTop: "28px" }}>
          {this.everyPet()}
        </div>
      </>
    );
  }
}
export default PetsContainer;
