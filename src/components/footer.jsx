import { FooterStyles as styles } from '../styles';

import insta from '../assets/Insta.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import hackerrank from '../assets/HR.png'

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
          <div>
            <img src={hackerrank} alt="hackerrank"/>
            <p className={styles.link}> <a  href="https://www.hackerrank.com/rabihutomo11">Hackerrank : rabihutomo11</a></p>
          </div>
				</div>
        <p className={styles.attr}>Created with 💖 by Rabih Utomo</p>
  		</div>
  	
  	)
}

export default Footer;
