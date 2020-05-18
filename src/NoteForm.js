import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Segment
} from "semantic-ui-react";

const options = [
  { key: "g", text: "General", value: "general" },
  { key: "l", text: "Low", value: "low" },
  { key: "m", text: "Moderate", value: "moderate" },
  { key: "s", text: "Severe", value: "severe" },
  { key: "u", text: "Urgent", value: "urgent" }
];

class FormExampleFieldControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Segment inverted>
          <Form className="noteform" inverted>
            {/* <Form.Group widths="equal" > */}
            {/* <Form.Field
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                control={Input}
                label="Last name"
                placeholder="Last name"
              /> */}
            <div className="Catagory">
              <Form.Field
                control={Select}
                label="Catagory"
                options={options}
                placeholder="Catagory"
              />
            </div>
            {/* </Form.Group> */}
            <Form.Group inline>
              <label>Priority</label>
              <Form.Field
                control={Radio}
                label="General"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Low"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Moderate"
                value="3"
                checked={value === "3"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Severe"
                value="4"
                checked={value === "4"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Urgent"
                value="5"
                checked={value === "5"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Description"
              placeholder="Tell us more about you..."
            />
            <Form.Field
              control={Checkbox}
              label="I agree to the Terms and Conditions"
            />

            <Button id="notesub" color="green">
              Submit
            </Button>
            <Button id="notes" floated="right" primary>
              Notes
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default FormExampleFieldControl;
