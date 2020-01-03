import React from "react";
import Card from "./card.js";
import "../styles/dashboard.scss";

function Cards(props) {
  return (
    <div className="cards">
      {props.cards.map((card, index) => (
        <Card key={index} card={card} cardId={index} />
      ))}
    </div>
  );
}

export default Cards;
