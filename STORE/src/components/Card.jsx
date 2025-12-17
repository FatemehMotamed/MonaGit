import React, { useContext, useReducer } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'
import redimg from "../assets/redimg.svg"
import check from "../assets/check.svg"
import PageInation from './PageInation'
import AllCards from '../pages/AllCards'

const initialState = {
    showNum: false,
    num: 0,
}

const reducer = (shop, action) => {
    switch (action) {
        case 'true':
            return { ...shop, showNum: true }
        case "mines":
            return { ...shop, num: shop.num - 1 }
        case "add":
            return { ...shop, num: shop.num + 1 }
        case "empty":
            return { ...shop, num: 0 , showNum: false }
        default:
            throw new Error("action not valid")
    }
}

function Card({ product }) {
    const { state } = useContext(ProductContext)
    const [shop, dispatch] = useReducer(reducer, initialState)

    const showNumbers = () => {
        dispatch('true')
    }
    const decrease = () => {
        if (shop.num > 0) {
            dispatch('mines')
        }
    }

    const increase = () => {
        dispatch('add')
    }
    return (
        <>
            <article className="flex flex-col border border-gray-500 w-3xs">
                <figure><img src={product.image} alt={`image of ${product.title}`} className='w-10 h-10' /></figure>
                <p> {product.title} </p>
                <span>{product.price}</span>

                <div className='flex'>
                    <img src={redimg} alt="" className='w-5 h-5' />
                    <img src={check} alt="" className='w-5 h-5' onClick={showNumbers} />
                </div>

                <div className={shop.showNum ? 'flex' : "hidden"}>
                    <PageInation key={product.id} shop={shop} increase={increase} decrease={decrease} dispatch={dispatch} />
                </div>

            </article>
        </>
    )
}

export default Card