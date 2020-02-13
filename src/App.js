import React from 'react';
import './App.css';
import HomepageLayout from './HomepageLayout'
import NavBar from './NavBar'
import LoginSignupContainer from  './LoginSignupContainer'
import MyProfile from './MyProfile'
import SignupForm from './SignupForm'
import PetsContainer from './PetsContainer'


import { BrowserRouter as Router, Route } from "react-router-dom"

const ownersURL = "http://localhost:3000/owners"
const petsURL = "http://localhost:3000/pets"
const notesURL = "http://localhost:3000/notes"


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      owners: [],
      isLoggedIn: false,
      newSignup: false,
      user: [{}],
      pets: [{}],
      currentUserPets: []
      
      // user: [{
        //   id: 8, 
        //   name: "Mario", 
        //   address: "657 Waters Mall", 
        //   user_image: "https://picsum.photos/seed/jbmdqaufloldlkmoprrgfznagbhtfyapkhoflpvklyjbduohcq/250", 
        //   background_image: "https://picsum.photos/seed/jbmdqaufloldlkmoprrgfznagbhtfyapkhoflpvklyjbduohcq/250"
        // }]
      }
    }


    

    setLocalStorage = (user) => {
      localStorage.setItem('user', JSON.stringify(user))
      // let localUserId = localStorage.getItem('user').id
    }

    localUser = () => {
      let user = JSON.parse(localStorage.getItem('user'))
      return user
    }
 
  componentDidMount() {
    this.getAllOwners()
    this.getFreshPets()

    fetch(petsURL)
    .then(res => res.json())
    .then(pets => this.setState({...this.state, pets: pets}))
  }

  getAllOwners = () => {
    fetch(ownersURL)
    .then(res => res.json())
    .then(owners => this.setState({ owners: owners}))
  }

  getFreshPets = () => {
    fetch(petsURL)
    .then(res => res.json())
    .then(pets => this.filterFreshPets(pets))
  }


  filterFreshPets = (pets) => {
    let filteredPets = pets.filter(pet => {
      return pet.owner.id == this.localUser().id
    })
    console.log("LOGGING FILTERED PETS:", filteredPets)
      // console.log(pet.owner.id)
      // console.log ("LOCALUSER in App.js:", this.localUser().id )
    // pet.owner.id == this.props.user.id)
    this.setState(
      {currentUserPets: filteredPets}
    )
  }


  // form for add pets: onsubmit -> post new pet to database
  // at the end of the .then, take the JSON data (newpet) call a function to:
  // query the database for the pet (getfreshpets) that match the user id (from props.user), send those to PetContainer
  // in petContainer -> filter over freshpets and create a PetCard for each 
 
  
  // updatePets = (pet) => {
  //   console.log("working")
  //   let newPetsArray = this.state.pets.push(pet)
  //   this.setState({
  //     pets: newPetsArray
  //   })
  // }

  // Login Feature, save state as user
  onLogInUser = (username) => {
    console.log(username)
    this.getAllOwners(username)
    let ownersfiltered = this.state.owners.filter(owner => owner.name == username)
    this.setState({isLoggedIn: true, 
      user: ownersfiltered,
      //might cause problem for edge case of multiple sign ups in a row:
      newSignup: false})
      console.log(ownersfiltered)
      this.setLocalStorage(ownersfiltered[0])
    }
    


//Sign Up Feature: Adding User to state of owners
  addUser = owner => {
    this.setState(prevState => {
      return {
        owners: [...prevState.owners, owner],
        newSignup: true
      }
    }, () => this.postOwner(owner))
  }

//Sign Up Feature: POSTING User to Database
  postOwner = (owner) => {
    fetch(ownersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(owner)
    }).then(res => res.json())
      .then(data => console.log(data))
  }

  postPet = (pet) => { 
    console.log(this.localUser())
     fetch(petsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        pet: {...pet, owner_id: this.props.user.id}
      })
    }).then(res => res.json())
      .then(data => this.getFreshPets())
      // this.setState({...this.state, currentUserPets: this.state.currentUserPets.push(pet)}))
  }


  // this.state.currentUserPets[0]
  // renderOwnersProfile = (firstName) => {
  //   console.log(firstName)
  //   fetch(ownersURL)
  //   .then(res => res.json())
  //   .then(owners => console.log(owners))
  // }

  // handleOnLogIn = () => {
  //   console.log("ello mate")
  // }

  


//SUGGESTIONS
  // Global User object or Id
  // API calls that collect pets only
  // set up your components to account for the async pet loading, something in the meantime to load

  showPets = () => {return this.localUser().pets}


  render() {
    console.log(this.state.pets)
    return (
      <div>
        {console.log(this.localUser().pets)}
        <Router>
          <NavBar />

          <Route
            path="/"
            exact
            render={() => <HomepageLayout />}
          />
                
           <Route
            path="/login"
            exact
            render={() => 
            <LoginSignupContainer onLogInUser={this.onLogInUser } loggedInState={this.state.isLoggedIn}/>}
          />
        
        <Route
          path="/signup"
          exact
          render={()=> <SignupForm onAddUser={this.addUser} newSignUpState={this.state.newSignup}/>}
        />
        
        <Route
          path="/profile"
          exact
          render={() => <MyProfile  currentUserPets={this.state.currentUserPets} updatePets={this.updatePets} user={this.localUser()} postPet={this.postPet} freshPetsFunction={this.getFreshPets}/>}
        />

        {/* <Route 
          path="/pet"
          exact
          render={() => <PetsContainer user={this.localUser()} pets={this.showPets()} postPet={this.postPet}/>}
        /> */}
          

        </Router>
      </div>
    );
  }
}

export default App;
