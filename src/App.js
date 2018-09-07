import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextInput from "./TextInput";
import WochentagSelect from "./WochentagSelect";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

const tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

function initWochentage() {
  let state = {};
  for (const tag of tage) {
    state[tag] = false;
  }
  return state;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      wochentage: initWochentage(),
      nichtTage: []
    };
  }

  onNameChange = name => this.setState({ name });
  onEmailChange = email => this.setState({ email });
  onWochentagChange = tag => {
    let wochentage = Object.assign({}, this.state.wochentage);
    wochentage[tag] = !wochentage[tag];
    this.setState({ wochentage });
  };
  handleDayClick = (day, { selected }) => {
    console.log(day);
    const { nichtTage } = this.state;
    if (selected) {
      const selectedIndex = nichtTage.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      nichtTage.splice(selectedIndex, 1);
    } else {
      nichtTage.push(day);
    }
    this.setState({ nichtTage });
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
          <br />
          <TextInput
            label="E-Mail-Adresse"
            text={this.state.email}
            onTextChange={this.onEmailChange}
          />
          <br />
          <br />
          <br />
          <label>
            Tage an denen es gar nicht geht:
            <br />
            <DayPicker
              selectedDays={this.state.nichtTage}
              onDayClick={this.handleDayClick}
            />
          </label>
          <br />
          <br />
          <br />
          <WochentagSelect
            onWochentagChange={this.onWochentagChange}
            wochentage={this.state.wochentage}
            tage={tage}
          />
          <br />
          <input type="submit" value="Abschicken" />
        </form>
      </div>
    );
  }
}
