import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AOS from "aos";
import Typed from "react-typed";
import "aos/dist/aos.css";

import styles from "./content.module.css";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import js from "../assets/JS.png";
import rc from "../assets/RC.png";
import gh from "../assets/GH.png";
import tw from "../assets/TW.svg";
import sublime from "../assets/sublime.png";
import figma from "../assets/figma.png";
import redux from "../assets/redux.svg"

export default function Content() {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 400 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	// Store the asset
	const assets = [html, css, js, rc, gh, tw, sublime, figma, redux];

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});

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
	};

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
								"✨ Usually do backend stuff with nodejs",
								"🔥 日本語を勉強して います。.",
								"🏃 I always do my best.",
							]}
							typeSpeed={25}
							loop
						/>
					</p>
				</div>
			</div>

			<div className={styles.container}>
				<p className={styles.tools}>Tools</p>
				<ul className={styles.ul}>
					{assets.map((val) => (
						<li>
							<img
								className={styles.icon}
								src={val}
								alt="html"
								data-aos="zoom-out-up"
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
