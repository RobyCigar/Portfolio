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
import sublime from '../assets/sublime.png';
import figma from '../assets/figma.png';


export default function Content() {

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)  

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Store the asset
  const assets = [html, css, js, rc, gh, tw, sublime, figma]

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
				<div className={styles.before}></div>
				<img src={face} alt="my-profile" className={styles.face}></img>
				<motion.div
					className={styles.intro}
					initial="hidden"
					animate="visible"
					variants={variants}
					transition={{ duration: 0.9 }}
				>
					<div className={styles.textContainer}>
						<p className={styles.jumbo}>Hi, you can call me Roby</p>
						<p className={styles.par}>
							🌏 I have a dream to become a frontend dev and work in foreign country <br/>
							🖥 I’m interested in learning new frontend technology <br/>
							🔥 My 2021 Goals is working as a freelance <br/>
							🏃 I do parkour for sport
						</p>
					</div>
				</motion.div>
			</div>
			 
			<div className={styles.container}>
				<p className={styles.tools}>Tools</p>
				<ul className={styles.ul}>
					
						{assets.map(val => 
							<li>
								<img src={val} alt="html"/>
							</li>
						)}
					
				</ul>
			</div>
    	</div>

	)
}
