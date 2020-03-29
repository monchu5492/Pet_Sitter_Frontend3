import React from "react";
import { Card, Icon } from "semantic-ui-react";

const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York."
].join(" ");

export default class CardExampleExtraContent extends React.Component {
  render() {
    // {
    //   console.log(this.props.petNotes);
    // }
    if (this.props.petNotes) {
      console.log(this.props.petNotes);
      this.props.currentUserPets.filter(pet => pet.id === this.props.petNotes);
      return (
        <Card>
          <Card.Content header="About Amy" />
          <Card.Content description={this.props.petNotes[0].description} />
          <Card.Content extra>
            <Icon name="user" />4 Friends
          </Card.Content>
        </Card>
      );
    }
  }
}
