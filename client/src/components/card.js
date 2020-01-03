import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/dashboard.scss";

export default function Card(props) {
  console.log("****props is ", props);
  return (
    <div className="card medium card-align">
      <div className="card-image border-img">
        <img
          src={props.card.imageURL}
          alt="memories"
          className="responsive-img"
        />
        {/* <span className="card-title">Card Title</span> */}
      </div>
      <div className="card-content">
        <p>{props.card.message}</p>
      </div>
    </div>
  );
}
