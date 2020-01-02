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
    <section className="container center-align">
      <ul class="comingsoon">
        <li>Filter</li>
        <li>Frames</li>
        <li>Secret Messages</li>
        <li>Social Sharing</li>
        <li>Scrapbooks/Photo Journals</li>
        <li>And MORE!</li>
      </ul>
      <img src={app} alt="app icon" class="img-responsive"/>
      <a>Text here</a>
      </section>
    
    );
  }
}
