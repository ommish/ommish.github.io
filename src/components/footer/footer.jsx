import React from 'react';
import redux from './redux.png';
import './footer.css';
import scrollToComponent from 'react-scroll-to-component';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.footerRef = null;
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	handleChange(field) {
		return (e) => this.setState({[field]: e.target.value});
	}

	render() {
		return (
			<footer className="footer" >

				<div className="chevron" onClick={() => scrollToComponent(this.footerRef, {duration: 800, align: 'top',})}><i className="fas fa-chevron-down"></i></div>

				<div className="footer-content" ref={(footerContent) => { this.footerRef = footerContent; }} >

					<div className="skills">

						<h2>Skills</h2>

						<div>
						<ul>
						<li><i className="devicon-javascript-plain"></i>Javascript</li>
						<li><i className="devicon-nodejs-plain"></i>Node</li>
						<li><i className="devicon-react-original"></i>React</li>
						<li><img src={redux} alt="redux" className="devicon-redux"/>Redux</li>
						<li><i className="devicon-rails-plain"></i>Ruby on Rails</li>
						</ul>
						<ul>
						<li><i className="devicon-postgresql-plain"></i>SQL</li>
						<li><i className="devicon-jquery-plain"></i>jQuery</li>
						<li><i className="devicon-css3-plain"></i>CSS3</li>
						<li><i className="devicon-html5-plain"></i>HTML5</li>
						<li><i className="devicon-git-plain"></i>Git</li>
						</ul>
						</div>

					</div>

					<form className="contact" method="post" action="https://formspree.io/oshimizu15@gmail.com">
						<input type="hidden" name="_next" value="http://ommish.com" />
						<h2>Contact Me</h2>
						<input value={this.state['name']} placeholder="Name" type="text" name="name" onChange={this.handleChange('name')}/>
						<input value={this.state['email']} placeholder="Email" type="email" name="email" onChange={this.handleChange('email')}/>
						<textarea value={this.state['message']} placeholder="Message" name="message" rows="5" onChange={this.handleChange('message')}/>
						<input type="submit" name="submit" value="Send Message" />
					</form>

				</div>
				<div className="copyright">
				© Ommi Shimizu
				</div>

			</footer>
		);
	}
};

export default Contact;
