import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import totoro from "../img/totoro-sketch-final.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.quote }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch("/get_quote");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

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
                <div className="quoteRow quote">{this.state.data}</div>
                <p>{/* <Button variant="primary">Learn more</Button> */}</p>
              </Col>
              <Col md="6" className="quoteContainer imgContainer">
                <Image src={totoro} fluid />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;
