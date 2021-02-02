import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import styles from './App.css';
import Navbar from './profile/navbar.js';
import Content from './profile/content.js';
import Footer from './profile/footer.js';
import Projects from './projects/projects.js';
import Counter from './redux/Counter'




function App() {
  return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route path="/" exact component={Content} />
					<Route path="/Projects" component={Projects} />
					<Route path="/counter" component={Counter}/>
				</Switch>
			</Router>
			<Footer />
		</>
  );
}

export default App;
