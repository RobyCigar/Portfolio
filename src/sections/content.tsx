import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
// ts-ignore
import {
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { ContentStyles as styles } from "../styles";;

const assets = [
	'/HTML.png',
	'/CSS.png',
	'/JS.png',
	'/RC.png',
	'/GH.png',
	'/TW.svg',
	'/figma.png',
	'/redux.svg',
	'/ubuntu.png', 
	'/TS.png'
];

export default function Content() {
	const itemsRef = useRef<HTMLParagraphElement[] | null[]>([]);
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 400 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	// Store the asset
	useEffect(() => {
		const moveCursor = (e: any) => {
			cursorX.set(e.clientX - 16);
			cursorY.set(e.clientY - 16);
		};

		window.addEventListener("mousemove", moveCursor);

		let p: any = itemsRef.current;

		setInterval(() => {
			p.some((el: any, idx: any) => {

				if (el.className === "active") {
					p[idx].className = ""
					p[idx + 1] ? p[idx + 1].className = "active" : null;
					return true
				} else if (idx === p.length - 2) {
					p[0].className = "active"
				}

			})
		}, 2500)

		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, []);


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
        <div className={styles.center} data-aos="fade-left">
          <div className={styles.textContainer}>
            <p className={`${styles.jumbo} ${styles.gradient}`}>
              Hi, call me Roby
            </p>
            <p className={styles.jumbo}>
              <span className={`${styles.jumbo} ${styles.gradient}`}>
                I'm from{"   "}
              </span>
              <span className={styles.flag}>🇮🇩</span>
            </p>
            <p className={styles.par}>
              <p
                role="item"
                ref={(el) => (itemsRef.current[0] = el)}
                className={`${styles.p} active`}
              >
                🖥 Interested in learning frontend tech.
              </p>
              <p role="item" ref={(el) => (itemsRef.current[1] = el)}>
                ✨ Usually do basic backend with laravel.
              </p>
              <p role="item" ref={(el) => (itemsRef.current[2] = el)}>
                🔥 日本語を勉強しています。
              </p>
              <p role="item" ref={(el) => (itemsRef.current[3] = el)}>
                💪 I also learn a little bit 中文 btw.
              </p>
              <p role="item" ref={(el) => (itemsRef.current[4] = el)}>
                😿 Want to be good at CP but still sucks. :(
              </p>
              <p role="item" ref={(el) => (itemsRef.current[5] = el)}>
                👊 I always do my best.
              </p>
            </p>
          </div>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <AwesomeButtonProgress
              onPress={async (el: any, next: any) => {
                // do a sync/async task then call `next()`
                await new Promise((resolve) => setTimeout(resolve, 1000));
                next();
                await new Promise((resolve) => setTimeout(resolve, 500));
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
              }}
              type="primary"
            >
              Download CV
            </AwesomeButtonProgress>
            <AwesomeButtonSocial
              onPress={async (el: any, next: any) => {
                window.open("https://github.com/Robycigar");
              }}
              type="github"
            >
              Github
            </AwesomeButtonSocial>
            <AwesomeButtonSocial
              onPress={async (el: any, next: any) => {
                window.open(
                  "https://www.linkedin.com/in/rabih-utomo-36955a1b9"
                );
              }}
              type="linkedin"
            >
              Linkedin
            </AwesomeButtonSocial>
          </section>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className="title" data-aos="zoom-out-up">
          Main Tools
        </h2>
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
