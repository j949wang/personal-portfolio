import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Landing extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="landingBanner">
          <Container className="landingContainer" fluid>
            <Row className="landingRow">
              <Col className="quoteContainer" md="6">
                <div className="quoteRow quoteTitle">
                  Welcome to my internet home.
                </div>
                <div className="quoteRow quote">
                  This is where quotes will populate.
                </div>
                <p>{/* <Button variant="primary">Learn more</Button> */}</p>
              </Col>
              <Col md="6" className="quoteContainer">
                Image Here
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;
