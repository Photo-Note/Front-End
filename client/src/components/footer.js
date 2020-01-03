import React from "react";
import "materialize-css/dist/css/materialize.min.css";

//IMPORTED IMAGES
import logo from '../assets/photonote_logo.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
/**
 * TO-DO - Developer comments
 */
export default class footer extends React.Component {
  render() {
    return (
    <div className="footer">
      <div id="footertop">
      <img src={logo} id="logo" alt="logo"/>
      <div id="socialmedia">
      <img src={facebook}class="social" alt="facebook"/>
      <img src={twitter} class="social"alt="twitter"/>
      <img src={instagram} class="social"alt="instagram"/>
      </div>
      </div>
      <div id="footerbottom">
        <form class="center-align">
          <input type="text" name="name"></input>
          <input type="email" name="email"></input>
          <button class="btn"></button>
        </form>
      </div>
      </div>
    );
  }
}
