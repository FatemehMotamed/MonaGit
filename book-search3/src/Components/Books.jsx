import React, { useState } from 'react'
import MyBooks from "../constans/MyBooks"
import BookList from './BookList'
import styles from "./Books.module.css"
import "../style.css"
import Favourite from './Favourite'

function Books() {

  const [favourites, setFavourites] = useState([]); //لیست  اسم کتابهای مورد علاقه
  //کلیک را برسی کن. اگر اسم آنچه که کلیک شده در لیست علاقه مندیها بود حذفش کن اگر نبود اسم را اضافه کن
  const clickButton = (event) => {
    const name1 = event.target.name
    if (favourites.includes(name1)) {
      setFavourites(favourites.filter(item => item !== name1));
    } else {
      setFavourites([...favourites, name1]);
    }
  }

  const [bookvalue, setbookvalue] = useState("")
  const [showresult, setshowresult] = useState([])
  const [error, setError] = useState(false)
  const changeHandler = (event) => {
    const inputvalue = event.target.value
    setbookvalue(inputvalue)
  }

  const searchHandler = () => {
    const resultsearsh = MyBooks.filter(item => item.name === bookvalue)
    if (resultsearsh.length > 0) {
      setshowresult(resultsearsh)
      setError(false)
    } else {
      setError(true)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault()
  }


  return (
    <>
      <form className={styles.form} onSubmit={(submitHandler)}>
        <input type="search" name='search' onChange={changeHandler} />
        <button>
          <p onClick={searchHandler}> search </p>
        </button>
      </form>
      <div className={error ? styles.error : styles.errorHide}>please enter the correct name</div>
      <div className={styles.parent}>
        <section className={styles.flex}>
          {(showresult.length > 0 ? showresult : MyBooks).map(item => <BookList
            key={item.name}
            name={item.name}
            author={item.author}
            country={item.country}
            img={item.img}
            clickButton={clickButton}
            isFavourite={favourites.includes(item.name)} /> // (اگر نذاریم هر یک دکمه کلیک شود همه ی دکمه ها رنگی میشن)اگر اسم آیتم در لیست علاقه مندیها باشه true را به کامپوننت میفرسته اگر نه false و همان کامپوننت تصمیم میگیره دکمه را چه رنگی کنه
          )}
        </section>
        <section className={styles.favourite}>
          {MyBooks.filter(item => favourites.includes(item.name))//از داخل mybooks آن آیتمی را بردار که داخل علاقه مندیها است
            .map(item => (
              <Favourite
                key={item.name}
                name={item.name}
                country={item.country}
                author={item.author}
                img={item.img}
              />
            ))}
        </section>
      </div>
    </>
  )
}

export default Books