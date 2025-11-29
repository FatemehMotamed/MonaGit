import React, { useState } from 'react'
import styles from './Search.module.css'
import Options from './Options'
function Search({ coins }) {
  const [listInput, setListInput] = useState(false)
  const [userType, setUserType] = useState('')
  const [mainList, setMainList] = useState(false)

  const clickHandler = () => {
    setMainList(true)

  }
  const changeHandler = (event) => {
    const myInput = event.target.value
    setUserType(myInput)
    setListInput(true)
    setMainList(false)
  }

  const blurHandler = () => {
    setListInput(false)
    setMainList(false)
  }

  const selectLi = (name) => {
    setUserType(name)
    setListInput(false)
    setMainList(false)
  }

  return (
    <>
      <div className={styles.isParent}>
        <input type="text" value={userType} name='crypto' list='coinName' onClick={clickHandler} onChange={changeHandler} onBlur={blurHandler} />

        <ul className={listInput ? styles.on : styles.off}>
          {
            coins.filter(item => item.name.trim().toLowerCase().includes(userType.trim().toLowerCase()))
              .map(item => <Options key={item.id} name={item.name} img={item.image} selectLi={selectLi} />
              )
          }
        </ul>

        <ul className={mainList ? styles.on : styles.off}>
          {
            coins.map(item =>
              <Options key={item.id} name={item.name} img={item.image} selectLi={selectLi} />)
          }

        </ul>
        < select name="" id="">
          <option value="usd">USD</option>
          <option value="jpy">JPY</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </>
  )
}

export default Search
