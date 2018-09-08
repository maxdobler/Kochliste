import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

export default class TextInput extends Component {
  handleChange = event => this.props.onTextChange(event.target.value);

  render() {
    return (
      <FormGroup controlId={this.props.label}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type="text"
          value={this.props.text}
          placeholder={this.props.placeholder || ""}
          onChange={this.handleChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}
