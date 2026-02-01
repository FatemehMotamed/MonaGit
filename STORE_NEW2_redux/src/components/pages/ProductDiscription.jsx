import React from 'react'
import '../../GlobalStyles.css'

function ProductDiscription({ product }) {

    return (

        <article className='border border-gray-600 w-2xl'>
            <figure className='w-10'>
                <img src={product.image} alt={`image of ${product.title}`} />
            </figure>
            <div className="flex">
                <span className='text-red-800 font-bold'>name&nbsp;:</span>&nbsp;&nbsp;
                <h3 className='text-black'>
                    {product.title}
                </h3>
            </div>
            <p className='flex'>
                <span className='text-red-800 font-bold'>discription&nbsp;:</span>&nbsp;&nbsp;
                <p className='text-black'>
                    {product.description}
                </p>
            </p>
            <div className="flex">
                <span className='text-red-800 font-bold'>price&nbsp;:</span>&nbsp;&nbsp;
                <span className='text-black'>{`${product.price}$`}</span>
            </div>
            <div className="flex">
                <span className='text-red-800 font-bold'>rate&nbsp;:</span>&nbsp;&nbsp;
                <span className='text-black'>{product.rating.rate}</span>
            </div>
            <div className="flex">
                <span className='text-red-800 font-bold'>count&nbsp;:</span>&nbsp;&nbsp;
                <span className='text-black'>{product.rating.count}</span>
            </div>
        </article>

    )
}

export default ProductDiscription