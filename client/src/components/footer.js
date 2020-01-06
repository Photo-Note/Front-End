import React from "react";
import "materialize-css/dist/css/materialize.min.css";

//IMPORTED IMAGES
import logo from "../assets/photonote_logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
/**
 * TO-DO - Developer comments
 */

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };
export default class footer extends React.Component {
  state = {
    isNameError: false,
    isEmailError: false,
    nameError: "",
    emailError: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Handle submit clicked");
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    let isNameError,
      isEmailError = false;
    let emailError,
      nameError = "";

    if (!name.value.length) {
      nameError = "(Please enter the full name)";
      isNameError = true;
    } else {
      nameError = "";
      isNameError = false;
    }
    if (!email.value.length) {
      emailError = "(Please enter a valid email)";
      isEmailError = true;
    } else if (!this.validateEmail(email.value)) {
      emailError = "(Please enter a valid email)";
      isEmailError = true;
    } else {
      emailError = "";
      isEmailError = false;
    }

    this.setState({
      isNameError: isNameError,
      isEmailError: isEmailError,
      nameError: nameError,
      emailError: emailError
    });
    if (!isNameError && !isEmailError) {
      let form = document.getElementById("form-contact");
      form.submit();
      //   fetch("/", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     body: encode({ "form-name": "contact", ...this.state })
      //   })
      //     .then(() => alert("Success!"))
      //     .catch(error => alert(error));
    }
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    return (
      <div className="footer">
        <div id="footertop">
          <img src={logo} id="logo" alt="logo" />
          <div id="socialmedia">
            <img src={facebook} className="social" alt="facebook" />
            <img src={twitter} className="social" alt="twitter" />
          </div>
        </div>
        <div id="footerbottom">
          <div className="footer-contents">
            <form
              className="footer-sections"
              name="contact"
              method="POST"
              onSubmit={this.handleSubmit}
              id="form-contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <h5 className="subscribe">
                Subscribe and See What's Happening at PhotoNote
              </h5>
              <div className="inputs">
                <div className="input-field">
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    className="input-element"
                    name="name"
                  />
                  <span className="error">{this.state.nameError}</span>
                </div>

                <div className="input-field">
                  <input
                    id="email"
                    type="text"
                    placeholder="Email Address"
                    className="input-element"
                    name="email"
                  />
                  <span className="error">{this.state.emailError}</span>
                </div>
                {/* <div>
                  <input
                    type="submit"
                    className="btn-submit"
                    value="Send Message"
                  />
                </div> */}
                <button className="btn-submit" type="submit" name="action">
                  Submit
                </button>
              </div>
            </form>
            <div className="bottomnav row">
              <div className="col s12 m12 l12 center-align">
                <a href="#" className="bottom">
                  About
                </a>
                <a href="#" className="bottom">
                  Contact
                </a>
                <a href="#" className="bottom">
                  Privacy
                </a>
                <a href="#" className="bottom">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
