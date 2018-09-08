import React, { Component } from "react";
import TextInput from "./TextInput";
import WochentagSelect from "./WochentagSelect";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col,
  Panel
} from "react-bootstrap";
import "./KochForm.css";

const tage = ["Montag", "Mittwoch", "Donnerstag", "Freitag"];

function initWochentage() {
  let state = {};
  for (const tag of tage) {
    state[tag] = false;
  }
  return state;
}

export default class KochForm extends Component {
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

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Panel bsStyle="info">
          <Panel.Heading>
            Damit wir die Kochliste planen können bitten wir euch, folgende
            Seite kurz auszufüllen. Aber bitte nur einmal ausfüllen.
          </Panel.Heading>
        </Panel>
        <TextInput
          label="Name des Kindes"
          text={this.state.name}
          onTextChange={this.onNameChange}
        />
        <Row id="wuensche">
          <Col xs={12} md={6}>
            <WochentagSelect
              onWochentagChange={this.onWochentagChange}
              wochentage={this.state.wochentage}
              tage={tage}
            />
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <ControlLabel>
                Alle Tage an denen es gar nicht geht auswählen:
              </ControlLabel>
              <FormControl.Static>
                <DayPicker
                  className="nichtTage"
                  selectedDays={this.state.nichtTage}
                  onDayClick={this.handleDayClick}
                />
              </FormControl.Static>
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit" bsStyle="primary">
          Abschicken
        </Button>
      </form>
    );
  }
}
