import React from "react";
import ommi from "./ommi.jpg";
import "./intro.css";

function Intro() {
  return (
    <section className="intro">
      <header>
        <h1>Ommi Shimizu</h1>
        <h2>[Software Engineer]</h2>
      </header>
      <div className="row-to-col">
        <img className="profile-pic" src={ommi} alt="ommi" />
        <div>
          <p className="about">
            Hi! I'm a software engineer based in NYC. Most of my experience has
            been with NodeJS, React/Redux, and SQL. Aside from coding, I enjoy
            spending time outdoors hiking, camping, and playing (ultra-casual,
            non-competitive) sports. My indoor hobbies include making comically
            large amounts of food and playing D&D and board games.
          </p>
          <ul className="links">
            <li>
              <a
                href="https://www.github.com/ommish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ommish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Intro;
