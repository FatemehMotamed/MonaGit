import React, { useEffect, useState } from 'react'
import styles from './Search.module.css'
import Options from './Options'
function Search({ coins }) {
  // const [input, setInput] = useState('')


  return (
    <>
      <input type="text" name='crypto' list='coinName' />
      <datalist id='coinName'>
        {
          coins.map(item => <Options key={item.id} name={item.name} img={item.image} />)
        }
      </datalist>
      <select name="" id="">
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="eur">EUR</option>
      </select>
    </>
  )
}

export default Search