import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import './App.css';

import Profile from './profile/index.js';
import Projects from './projects/projects.js';
import Counter from './redux/Counter'
import Navbar from './profile/navbar'




function App() {
  return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Profile} />
					<Route path="/Projects" component={Projects} />
					<Route path="/counter" component={Counter}/>
				</Switch>
			</Router>
		</>
  );
}

export default App;
