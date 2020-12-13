import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import TotoroFooter from "../img/totoro_footer_final.PNG";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <Row className="footerRow">
          <Col className="footerCol">
            <Image src={TotoroFooter} fluid />
            <p className="signoff">
              Let's keep in touch:
              <a href="mailto:jiaxiwang99@gmail.com"> jiaxiwang99@gmail.com</a>
            </p>
            <p className="copyright">
              &#169; Last updated 2020. Jiaxi Wang. All rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
