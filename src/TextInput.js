import React, { Component } from "react";

export default class TextInput extends Component {
  handleChange = event => this.props.onTextChange(event.target.value);

  render() {
    return (
      <label>
        {this.props.label}:
        <input
          type="text"
          value={this.props.text}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
