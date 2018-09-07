import React, { Component } from "react";

export default class WochentagSelect extends Component {
  constructor(props) {
    super(props);
  }

  onWochentagChange = tag => {
    this.props.onWochentagChange(tag);
  };

  renderCheckbox = tag => (
    <Checkbox
      tag={tag}
      isChecked={this.props.wochentage[tag]}
      onWochentagChange={this.onWochentagChange}
      key={tag}
    />
  );

  renderCheckboxes = () => this.props.tage.map(this.renderCheckbox);

  render() {
    return <div>{this.renderCheckboxes()}</div>;
  }
}

const Checkbox = props => {
  return (
    <div>
      <input
        type="checkbox"
        value={props.tag}
        checked={props.isChecked}
        onChange={() => props.onWochentagChange(props.tag)}
      />
      {props.tag}
    </div>
  );
};
