import React from 'react'
import styles from './Table.module.css'
function MainTable({ name, price, img, symbol, ath, total, id, showChart }) {
    return (
        <>
            <tr>
                <td>
                    <div className={styles.div} onClick={() => showChart(id)}>
                        <figure>
                            <img src={img} alt={name} />
                        </figure>
                        <p>{symbol}</p>
                    </div>
                </td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{ath}</td>
                <td>{total}</td>
            </tr>
        </>
    )
}

export default MainTable