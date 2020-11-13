import React from 'react';
import styles from './content.css';
import profile from '../assets/Frame 1.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import js from '../assets/JS.png';
import bs from '../assets/BS.png';
import rc from '../assets/RC.png';
import gh from '../assets/GH.png';


const Profile = () => {
	return(
		<div className="profile">
			<img src={profile} alt="my-profile" className="profile-pic"></img>
			<div className="bio-container">
				<div className="bio">
					<p className="bio-jumbo">Hi, I'm Roby</p>
					<p className="bio-intro">I'm currently first semester in Management Informathics at AMIKOM, a well known private college for Computer Science major in Indonesia.</p>
					<p className="bio-interest">Interested In</p>
					<p className="bio-flex"> Frontend - Science - Money</p>
				</div>
			</div>
		</div>
	)
}


const Tools = () => {
	return(
		<div className="tools-container">
			<p className="tools-p">Tools</p>
			<ul className="tools-ul">
				<li>
					<img src={html} alt="html"></img>
				</li>
				<li>
					<img src={css} alt="css"></img>
				</li>
				<li>
					<img src={js} alt="js"></img>
				</li>
				<li>
					<img src={bs} alt="bootstrap"></img>
				</li>
				<li>
					<img src={rc} alt="react"></img>
				</li>
				<li>
					<img src={gh} alt="github"></img>
				</li>
			</ul>
		</div>
	)
}


class Content extends React.Component {
  render() {
    return (
    	<div id="content">
    		<Profile />
    		<Tools />
    	</div>
    )	
  }
}

export default Content;
