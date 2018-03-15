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
          <li><h4><i className="far fa-user"></i><a href={resume} target="_blank" rel="noopener noreferrer"> Resume</a></h4></li>
          <li><h4><i className="fab fa-github"></i><a href="https://www.github.com/ommish" target="_blank" rel="noopener noreferrer"> Github</a></h4></li>
          <li><h4><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/ommish" target="_blank" rel="noopener noreferrer"> LinkedIn</a></h4></li>
        </ul>
      </div>
      <div className="col">
        <p className="intro">Hi! I'm a software engineer based in New York City.
        I have experience with Ruby on Rails, Express, and React/Redux and am
        always eager to learn more about new technologies.
        In my free time I also enjoy hiking, rock climbing, and board games.</p>
      </div>
    </section>
  )
}

export default Sidemenu;