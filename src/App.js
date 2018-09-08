import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import KochForm from "./form/KochForm";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kochliste</h1>
        </header>
        <p className="App-intro">
          Für die kommende Kochliste bitte folgende Felder ausfüllen:
        </p>
        <KochForm />
      </div>
    );
  }
}
