import React from 'react'
import PetCard from './PetCard.js'
import PetForm from './PetForm'
const petsURL = "http://localhost:3000/pets"

class PetsContainer extends React.Component {

  constructor() {
    super()
    this.state ={
      currentUserPets:[]
    }
  }
  

  addPet = pet=> {
    this.setState(prevState => {
      return {
        currentUserPets: [...prevState.currentUserPets, pet]
      }
    }, () => this.postPet(pet))
  }
 
  
  //iterate over all pets for this specific owner and create a PetCard for them

  postPet = (pet) => { 
    console.log(pet)
     fetch(petsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        pet
      })
    }).then(res => res.json())
      .then(data => console.log(data))
      
  }

  everyPet = () => {
    return this.props.pets.map((pet, index) => {
      return <PetCard pet={pet} key={index} />
    })
  }

  render() {
    return(
      <div className="ui grid container">
        {/* <button class="ui button" >Add a Pet</button> */}
        <PetForm addPet={this.addPet}/>
        {/* everyPet() */}
      </div>
    )
  }

}
export default PetsContainer