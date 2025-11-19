import React from 'react'
import styles from "./Books.module.css"

function Favourite({ name, country, author, img }) {
  return (
    <>
      <article className={styles.bookfavourite}>
        <figure>
          <img src={img} alt={`جلد کتاب ${name}`} />
        </figure>
        <div className={styles.bookintroduce}>
          <header>
            <h3>{name}</h3>
          </header>
          <div>
            <p>{author}</p>
            <p>{country}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Favourite