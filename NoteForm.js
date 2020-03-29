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
  { key: "h", text: "Health Care", value: "catagory" },
  { key: "f", text: "Feeding", value: "catagory" },
  { key: "b", text: "Bathing", value: "catagory" },
  { key: "e", text: "Exercise", value: "catagory" },
  { key: "o", text: "Other", value: "catagory" }
];

class FormExampleFieldControl extends Component {
  state = {
    // description: "",
    // catagory: "",
    // priority: "",
    // value: ""
  };

  handleChange = (e, { value }) => this.setState({ value });
  // if (e.target.id === "description") {
  //   this.setState({ [e.target.id]: value });
  //   console.log(e.target.id);
  //   console.log(value);
  // } else if (e.target.value === "1" || "2" || "3" || "4" || "5") {
  //   this.setState({ [e.target.id]: [e.target.innerText], value: value });
  //   console.log(e.target.value);
  //   console.log(e.target.input);
  //   ["1", "2", "3", "4", "5"]
  //   console.log(value);
  //   console.log(e.target.id);
  //   console.log(e.target.innerText);
  // } else {
  //   this.setState({ value: [e.target.innerText] });
  //   console.log(value);
  //   console.log(e.target.input);
  // }

  // this.setState({ [e.target.className]: [e.target.value] });
  // handleClick = (e, { value }) => {
  //   this.setState({ value: value });
  // };
  // handleCatChange = (e, { value }) => console.log(value);

  handleSubmit = () => {
    console.log(this.state);
  };

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
                className="catagory"
                control={Select}
                label="Catagory"
                options={options}
                onChange={this.handleChange}
                placeholder="Catagory"
              />
            </div>
            {/* </Form.Group> */}
            <Form.Group inline>
              <label>Priority</label>
              <Form.Field
                control={Radio}
                label="General"
                id="priority"
                value="1"
                checked={value === "1"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Low"
                id="priority"
                value="2"
                checked={value === "2"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Moderate"
                id="priority"
                value="3"
                checked={value === "3"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Severe"
                id="priority"
                value="4"
                checked={value === "4"}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label="Urgent"
                id="priority"
                value="5"
                checked={value === "5"}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Description"
              id="description"
              placeholder="Tell us more about you..."
              onChange={this.handleChange}
              style={{ marginBottom: "30px" }}
            />
            <Button id="notesub" color="green" onClick={this.handleSubmit}>
              Submit
            </Button>
            <Button id="notes" floated="right" primary style={{ width: "30%" }}>
              Notes
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default FormExampleFieldControl;
