import { FooterStyles as styles } from '../styles';


function Footer() {
  	return (
  		<div className={styles.container}>
  			<div className={styles.title}>Get in touch</div>
  			<div className={styles.socmed}>
					<div>
            <img src="assets/Insta.svg" alt="Instagram"/>
            <p className={styles.link}><a target="_blank" href="https://instagram.com/rabih3.1415">Instagram</a></p>
          </div>
          <div>
            <img src="assets/github.svg" alt="github"/>
            <p className={styles.link}><a target="_blank"  href="https://github.com/Robycigar">Github</a></p>
          </div>
          <div>
            <img src="assets/linkedin.svg" alt="linkedin"/>
            <p className={styles.link}> <a  target="_blank" href="https://www.linkedin.com/in/rabih-utomo-36955a1b9/">Linkedin</a></p>
          </div>
          <div>
            <img src="assets/HR.png" alt="hackerrank"/>
            <p className={styles.link}> <a target="_blank"  href="https://www.hackerrank.com/rabihutomo11">Hackerrank</a></p>
          </div>
          <div>
            <img src="assets/codepen.png" alt="my codepen link"/>
            <p className={styles.link}> <a target="_blank"  href="https://codepen.io/robycigar">Codepen</a></p>
          </div>

				</div>
        <p className={styles.attr}>Created with 💖 by Rabih Utomo</p>
  		</div>
  	
  	)
}

export default Footer;
