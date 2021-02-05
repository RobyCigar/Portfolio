import React, { useState, useEffect, useRef } from "react"
import data from '../data.js'
import styles from "./projects.module.css"
import Navbar from '../profile/navbar'
import ReactMarkdown from 'react-markdown';
import mark from '../assets/mark.png'


const Anim = () => {
  const [modal, setModal] = useState({"show": false, "desc": null})
  const [desc, setDesc] = useState('')

  return (
    <>
    	<Navbar/>
    	<div className={styles.back}>
    		<div className={styles.container}>
    			{data.projects.map((val) => {
    				return(
    					<>
    						<div className={styles.list}>
    							<h3 onClick={() => setModal({"show": !modal.show, "desc": val.desc})}>{val.title}</h3>
                  <h5>Tech : {val.tech.map(val => <span> {val} </span> )}</h5>
                  <div className={styles.link}>
                    <img src={mark} alt=""/>
                    
                  </div>
    						</div>
    					</>
    				)
    			})}
          {modal.show ? 
            <div className={styles.modal}>
              <p>{modal.desc}</p>
            </div> 
            : 
            null }
    		</div>
    	</div>

    </>
  )
}

export default Anim;