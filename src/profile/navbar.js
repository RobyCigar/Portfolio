import React from 'react';
import styles from './navbar.module.css';


class Navbar extends React.Component {
  render() {
    return (
		  	<div className={styles.navbar}>
		  		<ul>
		  			<li>
		  				<a href="/">Profile</a>
		  			</li>
		  			<li>
		  				<a href="/Projects">Projects</a>
		  			</li>
		  			<li>
		  				<a href="www.google.com">Blog</a>
		  			</li>
					</ul>
		  	</div>
    )
  }
}


export default Navbar;
