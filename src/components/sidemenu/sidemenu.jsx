import React from 'react';
import ommi from './ommi.jpg';
import resume from './Ommi_Shimizu_Resume.pdf'
import './sidemenu.css';

function Sidemenu(props) {
  return (
    <section className="sidemenu col-to-row">
      <div className="col">
        <header>
          <h1>Ommi Shimizu</h1>
          <h3>[Software Engineer]</h3>
          <img className="profile-pic" src={ommi} alt="ommi"/>
        </header>
        <ul className="links">
          <li><i className="far fa-user"></i><a href={resume} target="_blank" rel="noopener noreferrer"> Resume</a></li>
          <li><i className="fab fa-github"></i><a href="https://www.github.com/ommish" target="_blank" rel="noopener noreferrer"> Github</a></li>
          <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/ommish" target="_blank" rel="noopener noreferrer"> LinkedIn</a></li>
        </ul>
      </div>
      <div className="col">
        <p className="intro">
          Hi! I'm a software engineer based in NYC. Most of my experience has been with NodeJS, React/Redux, and SQL.
          Aside from coding, I enjoy spending time outdoors on hikes, camping, and playing (ultra-casual, non-competitive) sports.
          My indoor hobbies include making comically large amounts of food and playing DnD and board games.</p>
      </div>
    </section>
  )
}

export default Sidemenu;
