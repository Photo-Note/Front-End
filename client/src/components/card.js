import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/dashboard.scss";

export default function Card(props) {
  console.log(props.card.is_flipped, props.card.is_glued);
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
  console.log(
    `polaroid is ${polaroid}, glued is ${glued}, flipped is ${flipped}`
  );
  return (
    <>
      {polaroid && (
        <div className="card small card-align">
          <div className="card-image border-img">
            <img src={props.card.imageURL} alt="memories" />
          </div>

          <div className="card-content card-content-font">
            <p>{props.card.message}</p>
          </div>
        </div>
      )}
      {glued && (
        <div className="card small card-align">
          <div>
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
            <img src={props.card.gluedURL} />
          </div>
        </div>
      )}
      {flipped && (
        <div className="card small card-align">
          <div>
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
            <p className="card-content-font">{props.card.message}</p>
          </div>
        </div>
      )}
    </>
  );
}
