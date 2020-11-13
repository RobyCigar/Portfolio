import React from 'react';
import styles from './projects.css';
import data from '.././data.js';

class Projects extends React.Component {
  render() {
  	let projects = data.projects;
  	return (
  		<>
  			<div className="proj-container">
  				<p classNamee="proj-total"> Projects ({projects.length})</p>
  				<div className="cards-container">
  					{projects.map(project => {
  						return <div className="card">
  											<h1>{project.title}</h1>
  											<p>{project.desc}</p>
  									 </div>
  					})}
  				</div>
  			</div>
  		</>
  	)
  }
}

export default Projects;
