import React from 'react'
import { Link } from 'react-router-dom'
import redimg from "../../assets/images/redimg.svg"
import check from "../../assets/images/check.svg"
import PageInation from './PageInation'
import { showCounter } from '../../servises/PaginationsHelper'
import { useDispatch, useSelector } from 'react-redux'

function Box({ product }) {

    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <article className="flex flex-col w-[333px] lg:w-[1200px]">
            <div>
                <Link to={`/${product.title}/${product.id}`}>
                    <figure>
                        <img src={product.image} alt={`image of ${product.title}`} className='h-[371px] lg:h-[610px] bg-[#78757537] rounded-[8px] px-[50px] pt-[20px]' />
                    </figure>
                </Link>
<div>
    <img src="" alt="" />
</div>
            </div>

            <Link to={`/${product.title}/${product.id}`}>
                <p className='cursor-pointer text-[#141414] font-bold'> {product.title} </p>
            </Link>

            <Link to={`/${product.title}/${product.id}`} className='flex'>
                <p className='text-[#292929] font-bold'>price:&nbsp;</p>
                <span>{product.price}</span>
            </Link>

            <div className='flex'>
                <Link to={`/${product.title}/${product.id}`}>
                    <img src={redimg} alt="" className='w-5 h-5' />
                </Link>
                <img src={check} alt="" className='w-5 h-5 cursor-pointer' onClick={() => showCounter(product, state, dispatch)} />
            </div>

            <Link to={`/${product.title}/${product.id}`} className='flex'>
                <p className=' text-[#292929] font-bold'>totalprice:&nbsp;</p>
                <span>{product.totalPrice}</span>
            </Link>

            <div className={product.showNum ? 'flex' : "hidden"}>
                <PageInation key={product.id} product={product} />
            </div>

        </article>
    )
}

export default Box