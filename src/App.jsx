import styles from './App.css';

import Content from './components/content'
import Footer from './components/footer'
import Projects from './components/projects'




function App() {
  return (
		<div className={styles.App}>
			<Content/>
			<Projects/>
			<Footer/>
		</div>
  );
}

export default App;
