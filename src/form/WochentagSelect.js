import React, { Component } from "react";
import { FormGroup, Checkbox, ControlLabel } from "react-bootstrap";

export default class WochentagSelect extends Component {
  onWochentagChange = tag => {
    this.props.onWochentagChange(tag);
  };

  renderCheckbox = tag => (
    <Wochentag
      tag={tag}
      isChecked={this.props.wochentage[tag]}
      onWochentagChange={this.onWochentagChange}
      key={tag}
    />
  );

  renderCheckboxes = () => this.props.tage.map(this.renderCheckbox);

  render() {
    return (
      <FormGroup>
        <ControlLabel>Alle möglichen Wochentage auswählen:</ControlLabel>
        {this.renderCheckboxes()}
      </FormGroup>
    );
  }
}

const Wochentag = props => {
  return (
    <Checkbox
      checked={props.isChecked}
      onChange={() => props.onWochentagChange(props.tag)}
    >
      {props.tag}
    </Checkbox>
  );
};
