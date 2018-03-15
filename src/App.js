import React, { Component } from 'react';
import './App.css';
import Sidemenu from './components/sidemenu/sidemenu';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="row-to-col">
					<Sidemenu />
					<Projects />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
