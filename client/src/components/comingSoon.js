import React from "react";
import "materialize-css/dist/css/materialize.min.css";

// IMPORTED IMAGES
import app from "../assets/appstore.png"

/**
 * TO-DO - Developer comments
 */
export default class ComingSoon extends React.Component {
  render() {
    return (
      //SECTION
    <section className="container center-align">
      {/* UNORDERED LIST */}
      <h2>Coming Soon</h2>
      <ul className="comingsoon">
        <li>Filter</li>
        <li>Frames</li>
        <li>Secret Messages</li>
        <li>Social Sharing</li>
        <li>Scrapbooks/Photo Journals</li>
        <li>And MORE!</li>
      </ul>
      {/* IMAGE */}
      <img src={app} alt="app store" className="img-responsive"/>
      <div className="row">
        {/* TEXT */}
      <a href="#" id="apptext">Get a Text!</a>
      </div>
      </section>
    );
  }
}
