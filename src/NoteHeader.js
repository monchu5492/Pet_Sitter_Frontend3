import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

<<<<<<< HEAD
const SegmentExamplePlaceholder = (props) => (
  // <Segment raised inverted>
  <Header textAlign="center">
    {/* <Icon name='pdf file outline' /> */}
    please fill out the informatin for your pet, and submit, to see your pets
    notes.
    <br></br>
    <Button
      primary
      className="NHaddbutton"
      style={{ marginTop: "10%", width: "25%" }}
    >
      Add Note
    </Button>
  </Header>
  // </Segment>
=======
const SegmentExamplePlaceholder = () => (
  <Segment raised inverted>
    <Header textAlign="center">
      {/* <Icon name='pdf file outline' /> */}
      please fill out the informatin for your pet, and submit, to see your pets
      notes.
      <br></br>
      <Button primary floated="right" className="NHaddbutton">
        Add Note
      </Button>
    </Header>
  </Segment>
>>>>>>> 612d300ae3ac3ab754df48f127f0aafe0473d781
);

export default SegmentExamplePlaceholder;
