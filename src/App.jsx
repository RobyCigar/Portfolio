import './App.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from 'react';
import Content from './components/content'
import Footer from './components/footer'
import Projects from './components/projects'




function App() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, [])
  return (
		<div>
			<Content/>
			<Projects/>
			<Footer/>
		</div>
  );
}

export default App;
