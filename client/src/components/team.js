import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Brandi from "../assets/Brandi.png";
import Brian from "../assets/Brian.png";
import Alex from "../assets/Alex.png";
import Mary from "../assets/Mary.png";
import Erica from "../assets/Erica.png";
import Gayathri from "../assets/Gayathri.png";
import Vickie from "../assets/Vickie.png";
import Vicky from "../assets/Vicky.png";

/**
 * TO-DO - Developer comments
 */
export default class team extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".slider");
      var instances = M.Slider.init(elems, {
        height: 520,
        duration: 100,
        interval: 1500
      });
    });
  }
  render() {
    return (
      <section
        className="container center-align team-section"
        id="team-section"
      >
        <div>
          <h2>The team</h2>
          <br />
        </div>
        <div class="slider center-align slider-format">
          <ul class="slides">
            <li>
              <img
                src={Alex}
                className="responsive-img profile-img"
                alt="Alex"
              />
            </li>
            <li>
              <img
                src={Brandi}
                className="responsive-img profile-img"
                alt="Brandi"
              />
            </li>
            <li>
              <img
                src={Brian}
                className="responsive-img profile-img"
                alt="Brian"
              />
            </li>
            <li>
              <img
                src={Erica}
                className="responsive-img profile-img"
                alt="Erica"
              />
            </li>
            <li>
              <img
                src={Gayathri}
                className="responsive-img profile-img"
                alt="Gayathri"
              />
            </li>
            <li>
              <img
                src={Mary}
                className="responsive-img profile-img"
                alt="Mary"
              />
            </li>
            <li>
              <img
                src={Vickie}
                className="responsive-img profile-img"
                alt="Vickie"
              />
            </li>
            <li>
              <img
                src={Vicky}
                className="responsive-img profile-img"
                alt="Vicky"
              />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
