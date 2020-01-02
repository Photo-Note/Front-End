import React from "react";
import "materialize-css/dist/css/materialize.min.css";

// IMPORTED IMAGES
import flipit from '../assets/flipit.png';
import glueit1 from '../assets/glueit1.png';
import glueit2 from '../assets/glueit2.png';
import dropit1 from '../assets/dropit1.png';
import dropit2 from '../assets/dropit2.png';
import enjoyit from '../assets/enjoyit.png';
/**
 * TO-DO - Developer comments
 */
export default class featuresBenefits extends React.Component {
  render() {
    return (
      <div>
      {/* FEATURES AND BENEFITS SECTION */}
    <section className="container section center-align">
    <h2>Features & Benefits</h2>
    {/* ROW 1 */}
    <div className="row">
      <div className="col s12 m7 l5 push-m2">
      {/* CARDS */}
      <div className="card">
        <img src={flipit} alt="flip it" class="img-responsive"/>
        <h3>Flip It</h3>
      </div>
      <div className="card">
        <img src={glueit1} alt="glue it 1" class="img-responsive"/>
        <img src={glueit2} alt="glue it 2" class="img-responsive"/>
        <h3>Glue it</h3>
      </div>
      </div>
      {/* ROW 2 */}
      <div className="col s12 m7 l5 push-m2 offset-l1">
      <div className="card">
        <img src={dropit1} alt="drop it 1" class="img-responsive"/>
        <img src={dropit2} alt=" drop it 2" class="img-responsive"/>
        <h3>Drop It</h3>
      </div>
      <div className="card">
        <img src={enjoyit} alt="enjoy it" class="img-responsive"/>
        <h3>Enjoy It</h3>
      </div>
    </div>
    </div>
    </section>
     <div class="divider"></div>
     </div>
    );
  }
}
