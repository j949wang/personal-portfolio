import React, { Component } from "react";
import CardLeft from "./card_layout/cardLeft";
import CardRight from "./card_layout/cardRight";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    let cardInfo = this.props.info;
    let cardAlign = this.props.alignment;
    let cardImage = this.props.imageSrc;
    let cardLink = this.props.link;
    return cardAlign === "left" ? (
      <Link className="cardLink" to={`/experience/${cardLink}`}>
        <CardLeft imgsrc={cardImage} spec={cardInfo} />
      </Link>
    ) : (
      <Link className="cardLink" to={`/experience/${cardLink}`}>
        <CardRight imgsrc={cardImage} spec={cardInfo} />
      </Link>
    );
  }
}

export default Card;
