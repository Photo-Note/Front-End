import React from "react";
import "materialize-css/dist/css/materialize.min.css";

/**
 * TO-DO - Developer comments
 */
export default class howItWorks extends React.Component {
  render() {
    return (
      <div>
        <section className="container">
          <div className="how-title">How It Works</div>
          <div className="box-section">
            <div class="box-attr box-left">
              <div className="box-container">
                <div className="box-title">Drop. Flip. Write.</div>
                <p className="box-body">Remember doing things like this?</p>
                <p className="box-body">Swipe down to create a short note!</p>
                <p className="box-body">Swipe left to flip the photo and write more!</p>
              </div>
            </div>
            <div className="box-attr box-right">
              <div className="box-container">
                <div class="box-title">Save & Share</div>
                <p className="box-body">Save to your camera roll,</p>
                <p className="box-body">share to your favorite social media app, email or </p>
                <p className="box-body">text, and so much more!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
