import React, { useContext } from 'react'
import trash from "../assets/images/trash.svg"
import { ProductContext } from '../contexts/ProductContext'
import { decrease, increase, zeroBoxCounter } from '../servises/PaginationsHelper'


function PageInation({ product }) {

    const { state, dispatch } = useContext(ProductContext)

    return (
        <>
            <button onClick={() => decrease(product, state, dispatch)}>-</button>
            <span className='text-green-600 font-bold'>{product.paginate}</span>
            <button onClick={() => increase(product, state, dispatch)}>+</button>
            <button onClick={() => zeroBoxCounter(product, state, dispatch)}>
                <img src={trash} alt="" className='w-5' />
            </button>
        </>
    )
}


export default PageInation