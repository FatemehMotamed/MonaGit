import React from 'react'
import styles from './Table.module.css'


function Chart({ hiddenFunction, name, img }) {
    return (
        <>
            <button className={styles.closeButton} onClick={hiddenFunction}>X</button>
            <section>
                <figure>
                    <img src={img} alt={`chart of ${name}`} />
                    <figcaption>{`chart of ${name}`}</figcaption>
                </figure>
            </section>
        </>
    )
}

export default Chart