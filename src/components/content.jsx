import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Typed from "react-typed";


import { ContentStyles as styles } from "../styles";;
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import js from "../assets/JS.png";
import rc from "../assets/RC.png";
import gh from "../assets/GH.png";
import tw from "../assets/TW.svg";
import figma from "../assets/figma.png";
import redux from "../assets/redux.svg";
import ubuntu from "../assets/ubuntu.png"
import typescript from "../assets/TS.png";

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
								"✨ Usually do backend stuff with nodejs/laravel.",
								"🔥 日本語を勉強しています。",
								"🏃 Open for work.",
								"💪 I always do my best.",
								`🤦 Single, 20y.o, 162cm`
							]}
							typeSpeed={35}
							loop
						/>
					</p>
				</div>
			</div>

			<div className={styles.container}>
				<p className={styles.tools}>Most Used Tools</p>
				<ul className={styles.ul}>
					{assets.map((val, index) => (
						<li key={index}>
							<img
								className={styles.icon}
								src={val.img}
								alt={val.name}
								title={val.name}
								data-aos="zoom-out-up"
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

const assets = [
	{
		name: "HTML",
		img: html
	},
	{
		name: "CSS",
		img: css
	},
	{
		name: "Javascript",
		img: js
	},
	{
		name: "React",
		img: rc
	},
	{
		name: "Tailwind",
		img: tw
	},
	{
		name: "Figma",
		img: figma
	},
	{
		name: "Redux",
		img: redux
	},
	{
		name: "Ubuntu",
		img: ubuntu
	},
	{
		name: "Typescript",
		img: typescript
	}
]