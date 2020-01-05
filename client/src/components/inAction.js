import React from "react";
import "materialize-css/dist/css/materialize.min.css";

/**
 * TO-DO - Developer comments
 */
export default class inAction extends React.Component {
  render() {
    return (
      <div className="inaction-section">
        <section className="container">
          <h2 className="center-align">In Action</h2>
          <br />
          <br />
          <div className="row">
            <div className="col s12 m12 l10 center-align offset-l1">
              <div className="video-container">
                <iframe
                  width="350"
                  height="200"
                  src="https://www.youtube.com/embed/vPQyPcHlfgY?rel=0"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
