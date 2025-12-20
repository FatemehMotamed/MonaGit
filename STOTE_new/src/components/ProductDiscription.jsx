import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'

function ProductDiscription({ product }) {
    // const { state } = useContext(ProductContext)

    return (
        <>
            <article className='border border-gray-600 w-2xl'>
                <figure className='w-10'>
                    <img src={product.image} alt={`image of ${product.title}`} />
                </figure>
                <h3>
                    <span className='text-red-800 font-bold'>name&nbsp;:</span>&nbsp;&nbsp;

                    {product.title}
                </h3>
                <p className='pl-25 -indent-25'>
                    <span className='text-red-800 font-bold'>discription&nbsp;:</span>&nbsp;&nbsp;
                    {product.description}
                </p>
                <div>
                    <span className='text-red-800 font-bold'>price&nbsp;:</span>&nbsp;&nbsp;
                    <span>{`${product.price}$`}</span>
                </div>
                <div>
                    <span className='text-red-800 font-bold'>rate&nbsp;:</span>&nbsp;&nbsp;
                    <span>{product.rating.rate}</span>
                </div>
                     <div>
                    <span className='text-red-800 font-bold'>count&nbsp;:</span>&nbsp;&nbsp;
                    <span>{product.rating.count}</span>
                </div>
            </article>


        </>
    )
}

export default ProductDiscription