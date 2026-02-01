import React, { useState } from 'react'
// import "./CourseCard.css"
import styles from "./CourseCard.module.css"

function CourseCard({name, description}) {
  
  const [show, setshow] = useState(true)

  return (
    <div className={`${styles.container} ${show ? styles.selected : styles.unselected}`}>
        <h1 >{name}</h1>
        <p >{description}</p>
        <button onClick={()=>setshow(!show)}>change</button>
    </div>
  )
}

export default CourseCard