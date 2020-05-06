import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

export default class randomCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content header={"Hello World!"} textAlign="center" />
        <Card.Content>
          <Card.Description>Hello World!</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="money bill alternate outline" />
          Money Icon
          <Button color="green" inverted floated="right">
            Submit
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
