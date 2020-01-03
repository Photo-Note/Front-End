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
        <div className="row">
    <form className="col sub s12 l7">
    <h5 className="subscribe col l4">Subscribe and See What's Happening at PhotoNote</h5>
    <div className= "inputs">
      <div className="row">
        <div className="input-field col l10">
          <input id="name" type="text" class="validate"/>
          <label for="name">Name</label>
        </div>
        </div>
        <div className="row">
        <div className="input-field col l10">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
       </div>
       <button className="btn waves-effect waves-light col l10" type="submit" name="action">Submit</button>
  </div>
  </div>
        </form>
      </div>
      <div classname= "bottomnav row">
      <div className="col l12">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        </div>
        </div>
      </div>
      </div>
    );
  }
}
