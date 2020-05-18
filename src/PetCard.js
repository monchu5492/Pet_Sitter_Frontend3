import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditPetForm from "./EditPetForm";
import addNoteModal from "./NoteContainer";

class PetCard extends React.Component {
  // handleDeleteButton = () => {
  //   props.deletePet(props.pet)
  // }
  //testing modal click functionality
  state = { open: false };
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };
  close = () => this.setState({ open: false });
  //-------------------------------------------

  handleDeleteButton = () => {
    this.props.deletePet(this.props.pet);
    console.log("DELETE BUTTON CLICKED!!!");
    console.log(this.props);
  };

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
<<<<<<< HEAD
      <Card
        style={{ marginRight: "28px", maxHeight: "446px", marginTop: "15px" }}
      >
        {console.log(pet.name)}
        <Image src={pet.image} wrapped ui={false} />
        <Segment className="cardseg" style={{ margin: "unset" }}>
          <Card.Content>
            <Card.Header style={{ color: "black" }}>
              {pet.name}
              <div style={{ float: "right" }}>{pet.anmial_type}</div>
            </Card.Header>
            <Card.Description>{`${pet.age} years old`}</Card.Description>
            <div className="notebutton" style={{ textAlign: "center" }}>
              <Button
                as={Link}
                to="/notes"
                style={{ marginTop: "10px" }}
                onClick={console.log("ho")}
              >
                Add a Note
              </Button>
            </div>
            {/* <Button floated="right">Add Note</Button> */}
            {/* <EditPetForm editPet={this.props.editPet} /> */}
          </Card.Content>
        </Segment>
        <EditPetForm
          editPet={this.props.editPet}
          user={this.props.user}
          pet={this.props.pet}
          editPetChange={this.props.editPetChange}
        />
        <div style={{ marginRight: "1px", marginLeft: "1px" }}>
          <Button
            className="ui button"
            color="orange"
            onClick={this.handleDeleteButton}
            style={{ width: "100%", marginBottom: "2px" }}
          >
            Delete Pet
          </Button>
        </div>
=======
      <Card>
        {console.log(this.props.pet.name)}
        <Image src={this.props.pet.image} wrapped ui={false} />
        <Card.Content>
          <div id="cContent">
            <Card.Header>{this.props.pet.name}</Card.Header>
            {/* <Card.Meta>
            <span className="date">{this.props.pet.animal_type}</span>
          </Card.Meta> */}
            <Card.Description>{this.props.pet.age}</Card.Description>
          </div>
          <Button as={Link} to="/notes">
            Add a Note
          </Button>
          {/* <Button floated="right">Add Note</Button> */}
          {/* <EditPetForm editPet={this.props.editPet} /> */}
        </Card.Content>
        <>
          <EditPetForm
            editPet={this.props.editPet}
            user={this.props.user}
            pet={this.props.pet}
          />
        </>
        <button className="ui button" onClick={this.handleDeleteButton}>
          Delete Pet
        </button>
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
      </Card>
    );
  }
}

export default PetCard;
