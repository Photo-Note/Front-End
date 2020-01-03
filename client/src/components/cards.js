import React from "react";
import Card from "./card.js";
import "../styles/dashboard.scss";

function Cards(props) {
  return (
    <div className="cards-col">
      {props.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Cards;
