import React from 'react'
import { useContext } from 'react'
import PgInateforBskt from './PgInateforBskt'
import { ProductContext } from '../contexts/ProductContext'

function BoxInBasket({ buyListProduct }) {

  const { state } = useContext(ProductContext)

  const selectedProduct = state.data.find(item => item.id === buyListProduct.id)

  return (

    <article className='border border-red-900 p-3 text-[#292929] font-bold'>
      <figure className='w-10'>
        <img src={buyListProduct.image} alt="" />
      </figure>
      <h2>
        {buyListProduct.title}
      </h2>
      <div className='flex justify-between'>
        <span>
          {`${buyListProduct.price}$`}
        </span>
        <div>
          <div className='flex'>
            <p className='text-red-500'>number:</p>&nbsp;
            <span>{selectedProduct?.paginate ?? 0}</span>
          </div>
          <div className='flex'>
            <p className='text-red-500'>totalprice:</p>&nbsp;
            <span>{selectedProduct.totalPrice}</span>
          </div>
        </div>
      </div>
      <PgInateforBskt selectedProduct={selectedProduct} />
    </article>

  )
}

export default BoxInBasket