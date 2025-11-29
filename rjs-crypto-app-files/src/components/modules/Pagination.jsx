import React from 'react'
import style from './Pagination.module.css'
function Pagination({page, setPage}) {
    const increasePage = ()=>{
        if (page<10){

            setPage((page)=>page+1)
        }
        
  }
  const decreasePage = ()=>{
     if (page>1){

            setPage((page)=>page-1)
        }
        
  }
  return (
    <div className={style.container}>
        
        <button onClick={decreasePage} disabled={page===1 ? true : false}>Previous</button>
        <p className={page===1 ? style.on : ''}>1</p>
        <p className={page===2 ? style.on : ''}>2</p>
        <p>...</p>
        <p className={style.on}>{page>2 && page<9 ? page : ""}</p>
        <p className={page===9 ? style.on : ''}>9</p>
        <p className={page===10 ? style.on : ''}>10</p>
        <button onClick={increasePage} disabled={page===10 ? true : false}>next</button>
    </div>
  )
}

export default Pagination