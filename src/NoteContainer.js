import React from "react";
import NoteForm from "./NoteForm";
import NoteHeader from "./NoteHeader";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

class PetsContainer extends React.Component {
  render() {
    return (
      <Segment inverted>
        <NoteHeader />
        <NoteForm />
      </Segment>
    );
  }
}
export default PetsContainer;
