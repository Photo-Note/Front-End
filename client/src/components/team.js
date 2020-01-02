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
      var instances = M.Slider.init(elems, {});
    });
  }
  render() {
    return (
      <section className="container center-align">
        <div>
          <h2>The team</h2>
        </div>
        <div class="slider">
          <ul class="slides">
            <li>
              <img src={Alex} className="responsive-img" />
            </li>
            <li>
              <img src={Brandi} className="responsive-img" />
            </li>
            <li>
              <img src={Brian} className="responsive-img" />
            </li>
            <li>
              <img src={Erica} className="responsive-img" />
            </li>
            <li>
              <img src={Gayathri} className="responsive-img" />
            </li>
            <li>
              <img src={Mary} className="responsive-img" />
            </li>
            <li>
              <img src={Vickie} className="responsive-img" />
            </li>
            <li>
              <img src={Vicky} className="responsive-img" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
