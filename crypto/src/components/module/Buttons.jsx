import React from 'react'
import styles from './PagInation.module.css'


function Buttons({ id, buttonClicked, selected }) {
    return (
        <>
            <button key={id} onClick={() => buttonClicked(id)} className={selected ? styles.on : ''}>{id}</button>

        </>
    )
}

export default Buttons