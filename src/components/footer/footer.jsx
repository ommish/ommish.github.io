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
      <footer className="footer">
        <div className="content" style={{ backgroundImage: `url(${this.bg})` }}>
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
