import Buttons from './Buttons'
import styles from './PagInation.module.css'
// import React, { useState } from 'react'


function PagInation({ page, setPage }) {
  const buttons = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
  ]


  const prevdisabled = page > 1
  const nextdisabled = page < 10

  const decrease = () => {
    if (page > 1) {
      setPage(page => page - 1)
    }
  }

  const increase = () => {
    if (page < 10) {
      setPage(page => page + 1)
    }
  }

  const buttonClicked = (id) => {
    setPage(id)
  }

  return (
    <>
      <nav>
        <button onClick={decrease} disabled={!prevdisabled} className={prevdisabled ? styles.red : ""}> previous </button>

        {/* <p className={page === 1 ? styles.on : ''} onClick={() => setPage(1)}>1</p>
        <p onClick={()=> setPage(2)} className={page === 2 ? styles.on : ''}>2</p>
        <p>...</p>
        <p className={page > 2 && page < 9 ? styles.on : ''}>
          {page > 2 && page < 9 ? page : ''}
        </p>
        <p onClick={()=> setPage(9)} className={page === 9 ? styles.on : ''}>9</p>
        <p onClick={()=> setPage(10)} className={page === 10 ? styles.on : ''}>10</p> */}

        {
          buttons.map(item => <Buttons key={item.id} id={item.id} buttonClicked={buttonClicked} selected={item.id === page} />)
        }
        <button onClick={increase} disabled={!nextdisabled} className={`${nextdisabled ? styles.red : ""} ${styles.size}`}>next</button>
      </nav>
    </>
  )
}

export default PagInation