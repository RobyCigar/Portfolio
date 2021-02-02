import React from 'react';
import styles from './footer.module.css';

class Footer extends React.Component {
  render() {
  	return (
  		<div className="container">
  			<div className={styles.touch}>Get in touch</div>
  			<div className="socmed-container">
					<div className="socmed">
					</div>
					<div className="datas">
						<div>Gmail : rabihutomo11@gmail.com</div>
						<div>whatsapp : +(62)85726394401</div>
						<div>Instagram : @rbihutomo</div>
					</div>
				</div>
  		</div>
  	
  	)
  }
}

export default Footer;
