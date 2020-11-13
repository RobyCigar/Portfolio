import React from 'react';
import styles from './App.css';
import Navbar from './profile/navbar.js';
import Content from './profile/content.js';
import Footer from './profile/footer.js';
import Projects from './projects/projects.js';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


function App() {
  return (
		<div>
			<Navbar />
			<Router>
				<Switch>
					<Route path="/" exact component={Content} />
					<Route path="/Projects" component={Projects} />
				</Switch>
			</Router>
			<Footer />
		</div>
  );
}

export default App;
