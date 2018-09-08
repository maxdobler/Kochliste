import React, { Component } from "react";
import "./App.css";
import KochForm from "./form/KochForm";
import Header from "./Header";
import { Grid, Row, Col } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Grid>
          <Row className="main">
            <Col>
              <KochForm />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
