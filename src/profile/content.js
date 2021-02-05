import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import styles from './content.module.css';
import face from '../assets/face.png';
import html from '../assets/HTML.png';
import css from '../assets/CSS.png';
import js from '../assets/JS.png';
import rc from '../assets/RC.png';
import gh from '../assets/GH.png';
import tw from '../assets/TW.svg';
import st from '../assets/ST.png'


export default function Content() {

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)  

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

	const variants = {
	  hidden: { opacity: 0, x: 150 },
	  visible: { opacity: 1, x: 0 },
	}

	return(
    	<div>
	        <motion.div
	          className={styles.cursor}
	          style={{
	            translateX: cursorXSpring,
	            translateY: cursorYSpring,
	          }}
	        />

			<div className={styles.profile}>
				<img src={face} alt="my-profile" className={styles.face}></img>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variants}
					transition={{ duration: 0.9 }}
				>

					<p className={styles.jumbo}>Hi, you can call me Roby</p>
					<p className={styles.intro}>
						🌏 I have a dream to become a frontend dev and work in foreign country <br/>
						🖥 I’m interested in learning new frontend technology <br/>
						🔥 My 2021 Goals is working as a freelance <br/>
						🏃 I do parkour for sport
					</p>
				</motion.div>
			</div>
			 
			<div className={styles.container}>
				<p className={styles.tools}>Tools</p>
				<ul className={styles.ul}>
					<li>
						<img src={html} alt="html"></img>
					</li>
					<li>
						<img src={css} alt="css"></img>
					</li>
					<li>
						<img src={js} alt="js"></img>
					</li>
					<li>
						<img src={st} alt="Sublime text"></img>
					</li>
					<li>
						<img src={rc} alt="react"></img>
					</li>
					<li>
						<img src={gh} alt="github"></img>
					</li>		
					<li>
						<img src={tw} alt="Tailwind"></img>
					</li>
				</ul>
			</div>
    	</div>

	)
}
