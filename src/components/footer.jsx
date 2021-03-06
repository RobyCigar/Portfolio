import styles from './footer.module.css';

import insta from '../assets/Insta.svg'
import wa from '../assets/WA.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import youtube from '../assets/YT.svg'

function Footer() {
  	return (
  		<div className={styles.container}>
  			<div className={styles.title}>Get in touch</div>
  			<div className={styles.socmed}>
					<div>
            <img src={insta} alt="Istagram"/>
            <p className={styles.link}><a href="https://instagram.com/rabih3.1415">Instagram : @rabih3.1415</a></p>
          </div>
          <div>
            <img src={github} alt="github"/>
            <p className={styles.link}><a href="https://github.com/Robycigar">Github : RobyCigar</a></p>
          </div>
          <div>
            <img src={linkedin} alt="linkedin"/>
            <p className={styles.link}> <a  href="https://www.linkedin.com/in/rabih-utomo-36955a1b9/">Linkedin : Rabih Utomo</a></p>
          </div>
				</div>
        <p className={styles.attr}>Created with 💖 in 🇮🇩</p>
  		</div>
  	
  	)
}

export default Footer;
