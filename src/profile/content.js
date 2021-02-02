import React from 'react';
import styles from './content.module.css';
import face from '../assets/face.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import js from '../assets/JS.png';
import bs from '../assets/BS.png';
import rc from '../assets/RC.png';
import gh from '../assets/GH.png';

class Content extends React.Component {
  render() {
    return (

    	<>

		<div className={styles.profile}>
			<img src={face} alt="my-profile" className={styles.face}></img>
			<p className={styles.jumbo}>Hi, you can call me Roby</p>
			<p className={styles.intro}>
				🌏 I have a dream to become a frontend dev and work in foreign country <br />
				🖥 I’m interested in learning new frontend technology <br />
				🔥 2021 Goals is Working as a freelance <br />
				🏃 I do parkour for sport
			</p>
		</div>


		<div className={styles.container}>
			<p className="tools-p">Tools</p>
			<ul className={styles.ul}>
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
    	</>
    )	
  }
}

export default Content;
