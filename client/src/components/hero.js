import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import HeaderSection from "./header.js";
import M from "materialize-css";
import Carousel1 from "../assets/Carousel 1.png";
import "../styles/landing.scss";

/**
 * TO-DO - Developer comments
 */
export default class hero extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, { numVisible: 4 });
    });
  }
  render() {
    return (
      <header>
        <HeaderSection />
        <div className="container">
          <div className="carousel valign-wrapper">
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
            <a className="carousel-item" href="#one!">
              <img src={Carousel1} className="carousel-img" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
