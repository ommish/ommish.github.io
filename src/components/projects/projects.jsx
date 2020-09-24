import React from 'react';
import atventure from './atventure.png';
import allaboard from './allaboard.png';
import omninote from './omninote.png';
import trie from './trie.gif';
import dungeonhop from './dungeonhop.png';
import ProjectModal from './projectModal';
import './projects.css';
import scrollToComponent from 'react-scroll-to-component';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openProject: { name: '', src: '' }
		};
		this.modalRef = null;
	}

	closeModal(e) {
		if (e.target.id === 'overlay')
			this.setState({ openProject: { name: '', src: '' } });
	}

	handleClick(name) {
		return () => {
			this.setState({ openProject: { name } }, () =>
				scrollToComponent(this.modalRef, { duration: 800 })
			);
		};
	}

	render() {
		return (
			<main className="projects">
				<div className="projects-heading">
					<h1>Projects</h1>
				</div>
				<div className="project-list">
					<div className="project-item">
						<h3>[@venture]</h3>
						<img
							onClick={this.handleClick('@venture')}
							src={atventure}
							alt="@venture"
						/>
					</div>
					<div className="project-item">
						<h3>[Omninote]</h3>
						<img
							onClick={this.handleClick('Omninote')}
							src={omninote}
							alt="omninote"
						/>
					</div>
					<div className="project-item">
						<h3>[Dungeon Hop]</h3>
						<img
							onClick={this.handleClick('Dungeon Hop')}
							src={dungeonhop}
							alt="dungeon hop"
						/>
					</div>
					<div className="project-item">
						<h3>[Data Structures]</h3>
						<img
							onClick={this.handleClick('Data Structures')}
							src={trie}
							alt="data structures"
						/>
					</div>
					<div className="project-item">
						<h3>[All Aboard]</h3>
						<img
							onClick={this.handleClick('All Aboard')}
							src={allaboard}
							alt="hi"
						/>
					</div>
					<ProjectModal
						ref={(modal) => {
							this.modalRef = modal;
						}}
						handleClick={this.handleClick.bind(this)}
						closeModal={this.closeModal.bind(this)}
						openProject={this.state.openProject}
					/>
				</div>
			</main>
		);
	}
}

export default Projects;
