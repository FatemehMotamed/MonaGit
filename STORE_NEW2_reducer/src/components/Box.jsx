import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'
import redimg from "../assets/images/redimg.svg"
import check from "../assets/images/check.svg"
import PageInation from './PageInation'
import { showCounter } from '../servises/PaginationsHelper'

function Box({ product }) {

    const { state, dispatch } = useContext(ProductContext)

    return (
        <article className="flex flex-col border border-gray-500 w-3xs">
            <figure><img src={product.image} alt={`image of ${product.title}`} className='w-10 h-10 text-[#292929] font-bold' /></figure>
            <p className='text-[#292929] font-bold'> {product.title} </p>
            <div className='flex text-[#292929] font-bold'>
                <p className=''>price:&nbsp;</p>
                <span>{product.price}</span>
            </div>

            <div className='flex'>
                <Link to={`/${product.id}`}>
                    <img src={redimg} alt="" className='w-5 h-5' />
                </Link>
                <img src={check} alt="" className='w-5 h-5' onClick={() => showCounter(product, state, dispatch)} />
            </div>

            <div className='flex text-[#292929] font-bold'>
                <p className=''>totalprice:&nbsp;</p>
                <span>{product.totalPrice}</span>
            </div>

            <div className={product.showNum ? 'flex' : "hidden"}>
                <PageInation key={product.id} product={product} />
            </div>

        </article>
    )
}

export default Box