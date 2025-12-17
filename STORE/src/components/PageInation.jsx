import React from 'react'
import { ProductContext } from '../contexts/ProductsProvider'
import trash from "../assets/trash.svg"
function PageInation({ shop, increase, decrease, dispatch }) {
const zero = () => {
    dispatch("empty")
}

    return (
        <>
            <button onClick={decrease}>-</button>
            <span>{shop.num}</span>
            <button onClick={increase}>+</button>
            <button onClick={zero}><img src={trash} alt="" className='w-5' /></button>

        </>
    )
}

export default PageInation