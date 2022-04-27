import { useState  } from "react";
import { ProjectsStyles as styles } from "../styles";

import data from "./data.js";

const Anim = () => {
  const [modal, setModal] = useState({ show: false, desc: null, pic: [] });

  return (
    <>
      <div className={modal.show ? `${styles.back}` : styles.back}>
        <h1 className={styles.title} data-aos="zoom-out-up">My Projects</h1>
        <div className={styles.container}>
          {data.projects.map((val) => {
            return (
              <>
                <div className={styles.cardContainer} data-aos="zoom-out-up" data-aos-duration="2000">
                  <div className={styles.card} >
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
                        <img src="assets/github.svg" alt="" />
                      </a>
                    ) : null}

                    {val.link.host ? (
                      <a href={val.link.host} target="_blank" rel="noreferrer">
                        <img src="assets/globe.svg" alt="" />
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
        <div onClick={() => setModal({ show: !modal.show })} className={styles.backdrop}>
          <div className={styles.modal} >
            <div onClick={() => setModal({ show: !modal.show })}>
              <img className={styles.close} src="assets/close.svg" alt="close" />
            </div>

            <div className={styles.image}>
              {modal.pic?.map((val) => (
                <span>
                  <img
                    style={{width: '100%', height: 'auto', marginTop: 25}}
                    src={`/proj/${val}.png`}
                    alt=""
                  />
                </span>
              ))}
            </div>

            <p>{modal.desc}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Anim;
