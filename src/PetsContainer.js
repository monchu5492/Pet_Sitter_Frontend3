import React from "react";
import LoginForm from "./LoginForm";
import PetCard from "./PetCard.js";
import PetForm from "./PetForm";
import { Map, GoogleApiWrapper } from "google-maps-react";
const petsURL = "http://localhost:3000/pets";

class PetsContainer extends React.Component {
  //iterate over all pets for this specific owner and create a PetCard for them
  postPet = (pet) => {
    console.log(pet);
<<<<<<< HEAD
    let { name, image, anmial_type, age } = pet;
    let newPet = {
      name: name,
      image: image,
      anmial_type: anmial_type,
      age: age,
    };
=======
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
    // let newPets = this.state.currentUserPets.push(pet)
    console.log(newPet);
    fetch(petsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
<<<<<<< HEAD
      body: JSON.stringify({ ...newPet, owner_id: this.props.user.id }),
=======
      body: JSON.stringify({
        pet: { ...pet, owner_id: this.props.user.id }
      })
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
    })
      .then((res) => res.json())
      .then((pet) => this.props.freshPetsFunction(pet));

    // this.props.freshPetsFunction
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
    return this.props.currentUserPets.map((pet) => {
      console.log(pet);
      return (
        <PetCard
          pet={pet}
          user={this.props.user}
          editPet={this.props.editPet}
          deletePet={this.props.deletePet}
<<<<<<< HEAD
          editPetChange={this.props.editPetChange}
          // notedPet={this.props.notedPet}
=======
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
        />
      );
    });
    //  }
  };

  render() {
    return (
      <div className="ui grid container">
        {/* {console.log(this.state)} */}
        {/* /* {console.log(this.props.user)} */}
        {/* {console.log(this.props.pets)} */}
        {/* <button class="ui button" >Add a Pet</button> */}
        <PetForm
          addPet={this.postPet}
          user={this.props.user}
          editPet={this.props.editPet}
        />
        {/* everyPet() */}

        {/* <PetCard/> */}
        {this.everyPet()}
      </div>
    );
  }
}
export default PetsContainer;
