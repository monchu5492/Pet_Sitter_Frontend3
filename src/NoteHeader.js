import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

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
);

export default SegmentExamplePlaceholder;
