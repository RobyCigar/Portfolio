import { useState, useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css"

import data from "./data.js";
import styles from "./projects.module.css";
import mark from "../assets/github.svg";
import earth from "../assets/globe.svg";
import close from "../assets/close.svg";

const Anim = () => {
  const [modal, setModal] = useState({ show: false, desc: null, pic: [] });

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <div className={modal.show ? `${styles.back}` : styles.back}>
        <h1 className={styles.title} data-aos="zoom-out-up">Projects</h1>
        <div className={styles.container}>
          {data.projects.map((val) => {
            return (
              <>
              <div className={styles.cardContainer}>
                <div className={styles.card} data-aos="zoom-in-down">
                  <div
                    className={styles.text}
                    onClick={() =>
                      setModal({
                        show: !modal.show,
                        desc: val.desc,
                        pic: val.pic,
                      })
                    }
                  >
                    <h3>{val.title}</h3>
                    <h5>
                      Tech :{" "}
                      {val.tech.map((val) => (
                        <span> {val} </span>
                      ))}
                    </h5>
                  </div>
                  <div className={styles.link}>
                    {val.link.github ? (
                      <a href={val.link.github} target="_blank" rel="noreferrer">
                        <img src={mark} alt="" />
                      </a>
                    ) : null}

                    {val.link.host ? (
                      <a href={val.link.host} target="_blank" rel="noreferrer">
                        <img src={earth} alt="" />
                      </a>
                    ) : null}
                  </div>
                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {modal.show ? (
        <>
          <div className={styles.modal} >
            <div onClick={() => setModal({ show: !modal.show })}>
              <img className={styles.close} src={close} alt="close" />
            </div>

            <div className={styles.image}>
              {modal.pic?.map((val) => (
                <span>
                  <img
                    style={{width: '100%', height: 'auto', marginTop: 25}}
                    src={`${process.env.PUBLIC_URL}/proj/${val}.png`}
                    alt=""
                  />
                </span>
              ))}
            </div>

            <p>{modal.desc}</p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Anim;
