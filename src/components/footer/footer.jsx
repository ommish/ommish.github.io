import React from "react";
import redux from "./redux.png";
import "./footer.css";
import scrollToComponent from "react-scroll-to-component";
import lichen from "./lichen.jpg";
import lichen2 from "./lichen2.jpg";
import twomedicine from "./twomedicine.jpg";
import lakelouise from "./lakelouise.jpg";
import mtellinor from "./mtellinor.jpg";
import plainofsixglaciers from "./plainofsixglaciers.jpg";
import gunsightlake from "./gunsightlake.jpg";
import togunsight from "./togunsight.jpg";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.footerRef = null;
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    const idx = Math.floor(Math.random() * 8);
    this.bg = [
      lichen,
      lichen2,
      twomedicine,
      lakelouise,
      mtellinor,
      plainofsixglaciers,
      gunsightlake,
      togunsight,
    ][idx];
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <footer className="footer" style={{ backgroundImage: `url(${this.bg})` }}>
        <div
          className="chevron"
          onClick={() =>
            scrollToComponent(this.footerRef, { duration: 800, align: "top" })
          }
        >
          <i className="fas fa-chevron-down" />
        </div>

        <div
          className="footer-content"
          ref={(footerContent) => {
            this.footerRef = footerContent;
          }}
        >
          <div className="skills">
            <h2>Skills</h2>

            <div>
              <ul>
                <li>
                  <i className="devicon-typescript-plain" />
                  Typescript
                </li>
                <li>
                  <i className="devicon-javascript-plain" />
                  Javascript
                </li>
                <li>
                  <i className="devicon-nodejs-plain" />
                  Node
                </li>
                <li>
                  <i className="devicon-react-original" />
                  React
                </li>
                <li>
                  <img src={redux} alt="redux" className="devicon-redux" />
                  Redux
                </li>
              </ul>
              <ul>
                <li>
                  <i className="devicon-postgresql-plain" />
                  SQL
                </li>
                <li>
                  <i className="devicon-jquery-plain" />
                  jQuery
                </li>
                <li>
                  <i className="devicon-css3-plain" />
                  CSS3
                </li>
                <li>
                  <i className="devicon-express-original colored" />
                  Express
                </li>
                <li>
                  <i className="devicon-git-plain" />
                  Git
                </li>
              </ul>
            </div>
          </div>

          <form
            className="contact"
            method="post"
            action="https://formspree.io/oshimizu15@gmail.com"
          >
            <input type="hidden" name="_next" value="http://ommish.com" />
            <h2>Contact Me</h2>
            <input
              value={this.state["name"]}
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange("name")}
            />
            <input
              value={this.state["email"]}
              placeholder="Email"
              type="email"
              name="email"
              onChange={this.handleChange("email")}
            />
            <textarea
              value={this.state["message"]}
              placeholder="Message"
              name="message"
              rows="5"
              onChange={this.handleChange("message")}
            />
            <input type="submit" name="submit" value="Send Message" />
          </form>
        </div>
        <div className="copyright">© Ommi Shimizu</div>
      </footer>
    );
  }
}

export default Contact;
