import React from 'react'
import '../GlobalStyles.css'

function ProductDiscription({ product }) {

    return (

        <article className='border border-gray-600 w-2xl'>
            <figure className='w-10'>
                <img src={product.image} alt={`image of ${product.title}`} />
            </figure>
            <h3 className='text-[#292929] font-bold'>
                <span>name&nbsp;:</span>&nbsp;&nbsp;

                {product.title}
            </h3>
            <p className='pl-25 -indent-25 text-[#292929] font-bold'>
                <span>discription&nbsp;:</span>&nbsp;&nbsp;
                {product.description}
            </p>
            <div>
                <span className='text-red-800 font-bold'>price&nbsp;:</span>&nbsp;&nbsp;
                <span className='text-[#292929] font-bold'>{`${product.price}$`}</span>
            </div>
            <div>
                <span className='text-red-800 font-bold'>rate&nbsp;:</span>&nbsp;&nbsp;
                <span className='text-[#292929] font-bold'>{product.rating.rate}</span>
            </div>
            <div>
                <span className='text-red-800 font-bold'>count&nbsp;:</span>&nbsp;&nbsp;
                <span className='text-[#292929] font-bold'>{product.rating.count}</span>
            </div>
        </article>

    )
}

export default ProductDiscription