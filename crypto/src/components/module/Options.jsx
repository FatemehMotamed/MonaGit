import React from 'react'

function Options({ name, img, selectLi }) {
    return (
        <>
            <li onClick={() => selectLi(name)}>
                <img src={img} alt={`لوگوی${name}`} /> <p>{name}</p>
            </li>

        </>
    )
}

export default Options