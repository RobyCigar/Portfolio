import { FooterStyles as styles } from "../styles";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-aos="zoom-out-up">
        Other Portfolio
      </div>
      <div className={styles.socmed} data-aos="zoom-out-up">
        <div>
          <img src="assets/twitter.svg" alt="my svg link" />

          <p className={styles.link}>
            {" "}
            <a target="_blank" href="https://twitter.com/robycigar">
              Twitter
            </a>
          </p>
        </div>
        <div>
          <img src="assets/Insta.svg" alt="Instagram" />

          <p className={styles.link}>
            <a target="_blank" href="https://instagram.com/rabih3.1415">
              Instagram
            </a>
          </p>
        </div>
        <div>
          <img src="assets/HR.png" alt="hackerrank" />

          <p className={styles.link}>
            {" "}
            <a target="_blank" href="https://www.hackerrank.com/rabihutomo11">
              Hackerrank
            </a>
          </p>
        </div>
        <div>
          <img src="assets/codepen.png" alt="my codepen link" />

          <p className={styles.link}>
            {" "}
            <a target="_blank" href="https://codepen.io/robycigar">
              Codepen
            </a>
          </p>
        </div>
      </div>

      <p className={styles.attr}>Created with 💖 by Rabih Utomo</p>
    </div>
  );
}

export default Footer;
