import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import face from "../img/myfacefinal.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Scroll from "./scroll";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      data:
        "Student at the University of Waterloo — currently @Pointclickcare, former IBM.",
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.quote }))
      .catch((err) => console.log(err));
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
              <Col className="quoteContainer textContainer" md="8">
                <div className="quoteRow quoteTitle">
                  Hello, <span>I'm Jacky.</span>
                </div>
                <div className="quoteRow quote">
                  {this.state.data}
                  <div className="quoteRow quoteLine"></div>
                  <div className="socialLinks">
                    <FontAwesomeIcon className="ml-1" icon={faLinkedin} />
                    <FontAwesomeIcon className="ml-1" icon={faGithub} />
                    <FontAwesomeIcon className="ml-1" icon={faEnvelope} />
                  </div>
                </div>
              </Col>
              <Col md="4" className="quoteContainer imgContainer">
                <Image src={face} fluid />
              </Col>
            </Row>
            <Row className="landingRow">
              <Col>
                <Scroll />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Landing;
