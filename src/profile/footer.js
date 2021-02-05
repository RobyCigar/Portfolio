import React from 'react';
import styles from './footer.module.css';

import insta from '../assets/Insta.svg'
import wa from '../assets/WA.svg'
import github from '../assets/mark.png'

class Footer extends React.Component {
  render() {
  	return (
  		<div className={styles.container}>
  			<div className={styles.title}>Get in touch</div>
  			<div className={styles.socmed}>
					<div>
            <img src={wa} alt="wa"/> 
            <p>Whatsapp : +(62)85726394401</p>
          </div>
					<div>
            <img src={insta} alt="Ista"/>
            <p>Instagram : @rabih31415</p>
          </div>
          <div>
            <img src={github} alt="github"/>
            <p>Github : RobyCigar</p>
          </div>
				</div>
  		</div>
  	
  	)
  }
}

export default Footer;
