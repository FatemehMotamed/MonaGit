import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import card from '../assets/images/card.svg'
import { useNavigate } from 'react-router-dom'

function BasketInfo() {
  const { state } = useContext(ProductContext)
  const navigate = useNavigate()


  const goToBasketPage = () => {
    navigate('/Basket', { replace: true })
  }

  return (
    <>

      <span className='text-blue-600 font-bold'>totalPrice:</span>
      <span>{state.finalSum}</span>
      <button onClick={goToBasketPage} className=''>
        <span className='font-bold'>totalNumber:</span>
        <span>{state.addCart}</span>
        <img src={card} alt="" className='bg-gray-700 w-10' />
      </button>

    </>
  )
}

export default BasketInfo