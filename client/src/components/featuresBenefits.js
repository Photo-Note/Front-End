import React from "react";
import "materialize-css/dist/css/materialize.min.css";

// IMPORTED IMAGES
import flipit from '../assets/flipit.png'

/**
 * TO-DO - Developer comments
 */
export default class featuresBenefits extends React.Component {
  render() {
    return (
      // FEATURES AND BENEFITS SECTION
    <section className="container section">
    Features & Benefits
    {/* ROW 1 */}
    <div className="row">
      <div className="col l3">
      {/* CARDS */}
      <div className="card">
        <img src={flipit} alt="flip it"/>
        <h4>Flip It</h4>
      </div>
      <div className="card">
        <img src={glueit} alt="glue it"/>
        <h4>Give it</h4>
      </div>
      </div>
      {/* ROW 2 */}
      <div className="col l3">
      <div className="card">
        <img src={dropit1} alt="drop it 1"/>
        <img src={dropit2} alt=" drop it 2"/>
        <h4>Drop It</h4>
      </div>
      <div className="card">
        <img src={enjoyit} alt="enjoy it"/>
        <h4>Enjoy It</h4>
      </div>
    </div>
    </div>
    </section>
    );
  }
}
