import React, { useState, useEffect, useRef } from "react"
import { motion } from 'framer-motion';
import data from '../data.js'
import styles from "./projects.module.css"
import Navbar from '../profile/navbar'
import ReactMarkdown from 'react-markdown';
import mark from '../assets/mark.png'
import earth from '../assets/earth.svg'
import close from '../assets/close.svg'


const Anim = () => {
  const [modal, setModal] = useState({"show": false, "desc": null, "pic": []})
  const [desc, setDesc] = useState('')

  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {duration: 0.4} },
  }

  return (
    <>
    	<Navbar/>
    	<div className={modal.show ? `${styles.back} ${styles.blur}` : styles.back}>
    		<div className={styles.container}>
    			{data.projects.map((val) => {
    				return(
    					<>
    						<div className={styles.card}>
                  <div onClick={() => setModal({"show": !modal.show, "desc": val.desc, "pic": val.pic})}>
      							<h3 >{val.title}</h3>
                    <h5>Tech : {val.tech.map(val => <span> {val} </span> )}</h5>
                    <h5>Date : 2021</h5>
                  </div>
                  <div className={styles.link}>
                    {val.link.github ? 
                      <a href={val.link.github}>
                        <img src={mark} alt=""/>
                      </a> : null
                    }

                    {val.link.host ?
                      <a href={val.link.host}>
                        <img src={earth} alt=""/>
                      </a> :
                      null
                    }
                  </div>
    						</div>
    					</>
    				)
    			})}
    		</div>
    	</div>

          {modal.show ?
            <>
              <motion.div 
                className={styles.modal} 
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <div onClick={() => setModal({"show": !modal.show})}>
                  <img className={styles.close} src={close} alt="close"/>
                </div>

              <div className={styles.image}>
                {modal.pic.map(val => 
                  <span>
                    <img src={`${process.env.PUBLIC_URL}/proj/${val}.png`} alt=""/>  
                  </span>
                )}
              </div>

                <p>{modal.desc}</p>
              </motion.div> 
            </>
            : 
            null }

    </>
  )
}

export default Anim;