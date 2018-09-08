import React, { Component } from "react";
import "./App.css";
import KochForm from "./form/KochForm";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Für die kommende Kochliste bitte folgende Felder ausfüllen:
        </p>
        <KochForm />
      </div>
    );
  }
}
