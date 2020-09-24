import React from 'react';
import './projectModal.css';

const _ORDER = ['@venture', 'Omninote', 'Dungeon Hop', 'Data Structures', 'All Aboard'];
const _DESCRIPTIONS = {
	'': { basics: '', features: [], tools: [], github: '', live: '' },
	'@venture': {
		basics:
			'@venture is a web application for DnD players and DMs to manage their campaign notes together.',
		features: [
			'-Reference notes from other notes and sessions',
			'-Customize campaigns with categories and colors',
			'-Hide DM-only content from players',
			'-Secure content with campaign-level roles',
		],
		tools: [
			'-Express',
			'-React',
			'-Redux',
			'-Google Cloud Storage',
			'-Postgres',
		],
		live: 'https://www.atventure.io',
		github: null,
		index: 0
	},
	Omninote: {
		basics:
			'Omninote is a single-page application inspired by Evernote for organizing notes under notebooks, tags, and locations.',
		features: [
			'-Rich format text editor',
			'-Sort',
			'-Search',
			'-Autosave',
			'-Map view',
			'-Location search',
			'-User authentication'
		],
		tools: [
			'-Ruby on Rails',
			'-React',
			'-Redux',
			'-Amazon Web Services (S3)',
			'-Google Maps API',
			'-React Quill'
		],
		live: 'https://omninote.herokuapp.com',
		github: 'https://www.github.com/ommish/omninote',
		index: 1
	},
	'Dungeon Hop': {
		basics:
			'Dungeon Hop is a super fun and addicting side scrolling browser game.',
		features: [
			'-Single player and 2 player modes',
			'-AI',
			'-Global high score storage',
			'-Pause/Restart',
			'-Customizable game settings'
		],
		tools: ['-Javascript', '-HTML5 Canvas', '-Google Firebase'],
		live: 'http://www.ommish.com/dungeon-hop',
		github: 'https://www.github.com/ommish/dungeon-hop',
		index: 2
	},
	'Data Structures': {
		basics:
			'This is a collection of visualizations depicting how various data structures can be searched and/or manipulated.',
		features: [
			'-Array',
			'-Binary Search Tree',
			'-Trie',
			'-Compressed Trie',
			'-Hashmap',
			'-LRU Cache'
		],
		tools: ['-Javascript', '-React', '-CSS3', '-GIPHY API'],
		live: 'http://www.ommish.com/data-structures-and-search',
		github: 'https://www.github.com/ommish/data-structures-and-search',
		index: 3
	},
	'All Aboard': {
		basics:
			'This app is a tool for building characters for Dungeons and Dragons 5e. (Currently usable, but in progress.)',
		features: [
			'-User authentication',
			'-Custom character sheet',
			'-Fills race, class, and background info',
			'-Calculates proficiency bonus; armor class; and ability, saving throw, skill, and weapon modifiers',
		],
		tools: [
			'-Node',
			'-Express',
			'-MongoDB',
			'-Mongoose',
			'-Google OAuth',
			'-Create React App'
		],
		live: 'https://all-aboard123.herokuapp.com',
		github: 'https://www.github.com/ommish/all-aboard',
		index: 4
	}
};


class ProjectModal extends React.Component {

	handleNextClick(dir) {
		return (e) => {
			let nextProjectIdx = _DESCRIPTIONS[this.props.openProject.name].index + dir;
			if (nextProjectIdx > 3) nextProjectIdx = 0;
			if (nextProjectIdx < 0) nextProjectIdx = 3
			this.props.handleClick(_ORDER[nextProjectIdx])();
		}
	}

	render() {
		const modalClass = this.props.openProject.name
			? 'open-modal'
			: 'closed-modal';
		const overlayClass = this.props.openProject.name
			? 'open-overlay'
			: 'closed-overlay';

    const project = _DESCRIPTIONS[this.props.openProject.name];


		return (
			<div id="overlay" onClick={this.props.closeModal} className={overlayClass}>
				{window.innerWidth > 600 ? <div onClick={this.handleNextClick(1)}><i className="fas fa-chevron-circle-left"></i></div> : null}
  			<div className={modalClass}>
    			<h1>{this.props.openProject.name}</h1>
          <div className="modal-content">
      			<h3>{project.basics}</h3>
            <div className="features-and-tools">
              <ul>
                <h3>Features:</h3>
                {project.features.map((feat, i) => <li key={i}>{feat}</li>)}
              </ul>
              <ul>
                <h3>Tools:</h3>
                {project.tools.map((tool, i) => <li key={i}>{tool}</li>)}
              </ul>
            </div>
            <div className="links">
              <h3><a href={project.live} target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i> Visit</a></h3>
              {project.github && <h3><a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> Code</a></h3>}
            </div>
          </div>
  			</div>
				{window.innerWidth > 600 ? <div onClick={this.handleNextClick(-1)}><i className="fas fa-chevron-circle-right"></i></div> : null}
			</div>
		);
	}
}

export default ProjectModal;
