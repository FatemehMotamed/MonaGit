import styles from './Books.module.css'
import MyBooks from "../constans/MyBooks"

function BookList({ name, author, country, img, isFavourite, clickButton }) {

    return (
        <>
            <article className={styles.books}>
                <div className={styles.booksshow}>
                    <header>
                        <h2>{name}</h2>
                    </header>
                    <div className={styles.bookIdentify}>
                        <figure>
                            <img src={img} alt={`جلد کتاب ${name}`} />
                        </figure>
                        <div>
                            <p>author: <i>{author}</i></p>
                            <p>country: <i>{country}</i></p>
                        </div>
                        <button className={isFavourite ? styles.click : ""} onClick={clickButton} name={name}>favourite</button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default BookList