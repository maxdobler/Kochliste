import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./TextInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  onNameChange = name => this.setState({ name });
  onEmailChange = email => this.setState({ email });
  handleSubmit = event => {
    alert("name: " + this.state.name + "; mail: " + this.state.email);
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kochliste</h1>
        </header>
        <p className="App-intro">
          Für die kommende Kochliste bitte folgende Felder ausfüllen:{" "}
        </p>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Name"
            text={this.state.name}
            onTextChange={this.onNameChange}
          />
          <br />
          <TextInput
            label="E-Mail-Adresse"
            text={this.state.email}
            onTextChange={this.onEmailChange}
          />
          <br />
          <input type="submit" value="Abschicken" />
        </form>
      </div>
    );
  }
}

export default App;
