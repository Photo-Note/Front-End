import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import HowItWorksOne from "../assets/howitworks_one.png";
import HowItWorksTwo from "../assets/howitworks_two.png";
import M from "materialize-css";

/**
 * TO-DO - Developer comments
 */
export default class howItWorks extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems, {});
    });
  }
  render() {
    return (
      <section className="container">
        <div id="howitworks" />
        <br />
        <br />
        <br />
        <br />
        <h2 className="center-align">How it works</h2>
        <br />
        <br />
        <div className="row center-align">
          <div className="col s12 m6 l6 center-align">
            <img
              src={HowItWorksOne}
              alt="how it works"
              className="responsive-img howitworks-img materialboxed"
            />
          </div>
          <div className="col s12 m6 l6 center-align">
            <img
              src={HowItWorksTwo}
              alt="how it works"
              className="responsive-img howitworks-img img-border materialboxed"
            />
          </div>
        </div>
      </section>
    );
  }
}
