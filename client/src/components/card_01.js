import React from "react";
import "../styles/dashboard.scss";
import ImgClose from "../assets/close48.png";
import ImgMenu from "../assets/menu-more48.png";

class Card extends React.Component {
  //   handleClick = e => {
  //     console.log("handle clicked");
  //     let card = document.querySelector(
  //       `.card[data-card="${this.props.cardId}"]`
  //     );
  //     console.log(card);
  //     // let card = cards[this.props.card.id];
  //     card.style.transform = "rotateY(180deg)";
  //   };

  //   handleClose = e => {
  //     console.log("handle close clicked");
  //     let card = document.querySelector(
  //       `.card[data-card="${this.props.cardId}"]`
  //     );
  //     console.log(card);
  //     card.style.transform = "rotateY(360deg)";
  //   };
  render() {
    return (
      <div className="card" data-card={this.props.cardId}>
        <div className="card-front">
          <img src={this.props.card.imageURL} alt="photo note" />
          <div className="card-txt">
            <p>{this.props.card.message}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-back-center">{this.props.card.message}</div>
        </div>
      </div>
    );
  }
}

export default Card;
