import React from 'react'
import CourseCard from './CourseCard'
// import "./CourseList.css"
import styles from './CourseList.module.css'

function CoursList() {
  console.log(styles);
    const products = [
        {id:1, name:"tv", description:"this is test"},
        {id:2, name:"mobile", description:"this is test"},
        {id:3, name:"ipad", description:"this is test"},
        {id:4, name:"macbook", description:"this is test"},
    ] 
  return (

    <div className={styles.container}>
      {
         
            products.map((product)=>(<CourseCard key={product.id} name = {product.name} description = {product.description}/>))

      }
    </div>
  )
}

export default CoursList