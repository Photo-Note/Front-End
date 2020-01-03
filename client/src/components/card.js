import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/dashboard.scss";

export default function Card(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image border-img">
              <img src={props.imageVal} alt="memories" />
              {/* <span className="card-title">Card Title</span> */}
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
