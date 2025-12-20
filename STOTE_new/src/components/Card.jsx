import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ProductContext } from '../contexts/ProductsProvider'
import redimg from "../assets/redimg.svg"
import check from "../assets/check.svg"
import PageInation from './PageInation'
import AllCards from '../pages/AllCards'


function Card({ product }) {

    const { state, dispatch } = useContext(ProductContext)

    const showNumbers = (product) => {
        dispatch({ type: 'true', payload: product })
    }

    const decrease = (product) => {
        if (product.paginate > 0) {
            dispatch({ type: 'minesCard', payload: product })
        }
    }

    const increase = (product) => {
        dispatch({ type: 'addCard', payload: product })
        if (!state.buyList.some(i => i.id === product.id)) {
            dispatch({ type: 'buyAdd', payload: product })
        }
    }

    return (
        <>
            <article className="flex flex-col border border-gray-500 w-3xs">
                <figure><img src={product.image} alt={`image of ${product.title}`} className='w-10 h-10' /></figure>
                <p> {product.title} </p>
                <div className='flex'>
                    <p className='text-red-600 font-bold'>price:&nbsp;</p>
                    <span>{product.price}</span>
                </div>

                <div className='flex'>
                    <Link to={`/${product.id}`}>
                        <img src={redimg} alt="" className='w-5 h-5' />
                    </Link>
                    <img src={check} alt="" className='w-5 h-5' onClick={() => showNumbers(product)} />
                </div>
                <div className='flex'>
                    <p className='text-red-600 font-bold'>totalprice:&nbsp;</p>
                    <span>{product.totalPrice}</span>
                </div>
                <div className={product.showNum ? 'flex' : "hidden"}>

                    <PageInation key={product.id} increase={increase} decrease={decrease} product={product} />
                </div>

            </article>
        </>
    )
}

export default Card