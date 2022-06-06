import './App.css';
import "aos/dist/aos.css";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'aos'... Remove this comment to see the full error message
import AOS from 'aos';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/content' was resolved to '/ho... Remove this comment to see the full error message
import Content from './components/content'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/footer' was resolved to '/hom... Remove this comment to see the full error message
import Footer from './components/footer'
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/projects' was resolved to '/h... Remove this comment to see the full error message
import Projects from './components/projects'




function App() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, [])
  return (
// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		<div>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Content/>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Projects/>
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
			<Footer/>
// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
		</div>
  );
}

export default App;
