import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'
import PgInateforBskt from './PgInateforBskt'

function Basket({ product }) {
  const { state } = useContext(ProductContext)
  console.log('@@@@@@@@@', state.data);

  const userPro = state.data.find(item => item.id === product.id)

  return (
    <>
      <article className='border border-red-900 p-3'>
        <figure className='w-10'>
          <img src={product.image} alt="" />
        </figure>
        <h2>
          {product.title}
        </h2>
        <div className='flex justify-between'>
          <span>
            {`${product.price}$`}
          </span>
          <div>
            <div className='flex'>
              <p className='text-red-500'>number:</p>&nbsp;
              <span>{userPro?.paginate ?? 0}</span>
            </div>
            <div className='flex'>
              <p className='text-red-500'>totalpriceprice:</p>&nbsp;
              <span>{userPro.totalPrice}</span>
            </div>

          </div>
        </div>
        <PgInateforBskt product={product} />
      </article>
    </>
  )
}

export default Basket