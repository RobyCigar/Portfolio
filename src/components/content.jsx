import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Typed from "react-typed";


import { ContentStyles as styles } from "../styles";;
const assets = ['/HTML.png',
	'/CSS.png',
	'/JS.png',
	'/RC.png',
	'/GH.png',
	'/TW.svg',
	'/figma.png',
	'/redux.svg',
	'/ubuntu.png', '/TS.png']

export default function Content() {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 400 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	// Store the asset

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

	console.log("here")

	return (
		<div>
			<motion.div
				className={styles.cursor}
				style={{
					translateX: cursorXSpring,
					translateY: cursorYSpring,
				}}
			/>

			<div className={styles.profile}>
				<div className={styles.textContainer} data-aos="fade-left">
					<p className={`${styles.jumbo} ${styles.gradient}`}>Hi, call me Roby</p>
					<p className={styles.jumbo}>
						<span className={`${styles.jumbo} ${styles.gradient}`}>I'm from{"   "}</span>
						<span className={styles.flag}>🇮🇩</span>
					</p>
					<p className={styles.par}>
						<Typed
							strings={[
								"🖥 Interested in learning frontend technology.",
								"✨ Usually do basic backend stuff with nodejs/laravel.",
								"🔥 日本語を勉強しています。",
								"😿 我不太擅长说中文",
								"💪 I always do my best.",
								`🤦 Single, 20y.o, 162cm`
							]}
							typeSpeed={30}
							loop
						/>
					</p>
				</div>
			</div>

			<div className={styles.container}>
				<p className={styles.tools}>Tools</p>
				<ul className={styles.ul} data-aos="zoom-out-up">
					{assets.map((val, index) => (
						<li key={index}>
							<img
								className={styles.icon}
								src={`assets/${val}`}
								alt={val}
								title={val}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
