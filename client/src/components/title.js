import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Title extends Component {
  render() {
    return (
      <Container id="experience" className="sectionContainer" fluid>
        <Row className="sectionTitle">Experience</Row>
      </Container>
    );
  }
}

export default Title;
