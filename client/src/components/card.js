import React, { Component } from "react";
import CardLeft from "./card_layout/cardLeft";
import CardRight from "./card_layout/cardRight";

class Card extends Component {
  render() {
    let cardInfo = this.props.info;
    let cardAlign = this.props.alignment;
    let cardImage = this.props.imageSrc;
    return cardAlign === "left" ? (
      <CardLeft imgsrc={cardImage} spec={cardInfo} />
    ) : (
      <CardRight imgsrc={cardImage} spec={cardInfo} />
    );
  }
}

export default Card;
