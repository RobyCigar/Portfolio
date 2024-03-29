import './App.css';
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from 'react';
import Content from './sections/content'
import Footer from './sections/footer'
import Projects from './sections/projects'
import Timeline from './sections/timeline';



function App() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, [])
  return (
	<>
		<Content/>
		<Projects/>
		<Timeline/>
		<Footer/>
	</>
  );
}

export default App;
