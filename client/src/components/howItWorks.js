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
              Drop. Flip. Write.
            </div>
            <div className="box-attr box-right">
              Save & Share
            </div>
          </div>
        </section>
      </div>
    );
    // return <section className="container">How it works section</section>;
  }
}
