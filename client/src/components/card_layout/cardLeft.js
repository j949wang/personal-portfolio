import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CardLeft extends Component {
  render() {
    let cardSpec = this.props.spec;
    return (
      <Container className="sectionContainer cardContainer" fluid>
        <Row className="cardRow">
          <Col className="cardCol cardImage" xl={7}>
            <Image src={this.props.imgsrc} fluid />
          </Col>
          <Col className="cardCol cardText" xl={5}>
            <p className="cardTitle">
              {cardSpec.company.name}
            </p>
            <p className="positionTitle">{cardSpec.company.position}</p>
            <p className="cardInfo">{cardSpec.description}</p>
            <p className="cardStack">Stack: {cardSpec.stack}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CardLeft;
