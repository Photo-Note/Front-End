import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/dashboard.scss";

export default function Card(props) {
  let polaroid = false;
  let glued = false;
  let flipped = false;
  if (!props.card.is_glued && !props.card.is_flipped) {
    polaroid = true;
    glued = false;
    flipped = false;
  } else if (props.card.is_glued && props.card.is_flipped) {
    glued = true;
    polaroid = false;
    flipped = false;
  } else if (!props.card.is_glued && props.card.is_flipped) {
    glued = false;
    polaroid = false;
    flipped = true;
  }
  return (
    <>
      {polaroid && (
        <div className="card medium card-align">
          <div className="card-image border-img">
            <img
              src={props.card.imageURL}
              alt="memories"
              className="responsive-img"
            />
          </div>

          <div className="card-content card-content-font">
            <p className="center-align">{props.card.message}</p>
            <br />
            <br />
          </div>
        </div>
      )}
      {glued && (
        <div className="card medium card-align">
          <div className="card-image">
            <img
              src={props.card.imageURL}
              alt="memories"
              className="activator"
            />
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right">close</i>
            </span>
            <div className="front-image">
              <img src={props.card.gluedURL} className="responsive-img" />
            </div>
          </div>
        </div>
      )}
      {flipped && (
        <div className="card medium card-align">
          <div className="front-image">
            <img
              src={props.card.imageURL}
              alt="memories"
              className="activator responsive-img"
            />
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right">close</i>
            </span>
            <div className="back-content">
              <p className="card-content-font valign-wrapper">
                {props.card.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
