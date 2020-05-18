import React from "react";
import { Image, Header, Divider } from "semantic-ui-react";
import PetsContainer from "./PetsContainer";

// testing note #1 alice

<<<<<<< HEAD
const ProfilePicture = (props) => (
  <Segment inverted>
=======
const ProfilePicture = props => (
  <>
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
    <div className="profile-top-section">
      <Image
        className="profilepic"
        src={props.user.user_image}
        size="medium"
        circular
      />
      <Header className="profilename" as="h3" style={{ fontSize: "2em" }}>
        {props.user.name}
      </Header>
    </div>

    <Divider
      as="h4"
      className="header"
      horizontal
      style={{ margin: "3em 0em", textTransform: "uppercase" }}
    >
      <p>My Pets</p>
    </Divider>

    <PetsContainer
      currentUserPets={props.currentUserPets}
      updatePets={props.updatePets}
      user={props.user}
      freshPetsFunction={props.freshPetsFunction}
      editPet={props.editPet}
      deletePet={props.deletePet}
<<<<<<< HEAD
      editPetChange={props.editPetChange}
      // notedPet={props.notedPet}
=======
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
    />
  </>
);

export default ProfilePicture;
