import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Title extends Component {
  render() {
    return (
      <Container className="sectionContainer" fluid>
        <Row className="sectionTitle">
            Experience
        </Row>
      </Container>
    );
  }
}

export default Title