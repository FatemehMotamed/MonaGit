import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import cart from '../assets/images/cart.svg'
import { useNavigate } from 'react-router-dom'
import styles from './BsktInfo.module.css'
import magnify from '../assets/images/magnify.svg'
import user from '../assets/images/user.svg'
import bars from '../assets/images/bars.svg'
import chevronDown from '../assets/images/chevronDown.svg'
import heart from '../assets/images/heart.svg'


function BasketInfo() {
  const { state } = useContext(ProductContext)
  const navigate = useNavigate()


  const goToBasketPage = () => {
    navigate('/Basket', { replace: true })
  }

  return (
    <>

      {/* <span className='text-blue-600 font-bold'>totalPrice:</span>
        <span>{state.finalSum}</span> */}

      {/* mobile */}
      <div className='flex align-center justify-end gap-[25px] md:hidden'>
        <img src={magnify} alt="" className='w-[20px] h-[20px]' />

        <div onClick={goToBasketPage} className='w-[23px] h-[24px] relative'>
          <span className='flex items-center justify-center rounded-full text-white text-[8px] bg-[#141414] w-[13px] h-[13px] absolute bottom-3 right-0 p-1'>{state.addCart}</span>
          <img src={cart} alt="" className='w-10' />
        </div>

        <img src={bars} alt="" className='w-[20px] h-[20px]' />
      </div>
      {/*end mobile */}


      {/* large */}
      <div className='hidden md:flex align-center justify-end gap-[25px]'>

        <img src={magnify} alt="" className='w-[20px] h-[20px]' />

        <div className='gap-[7px] flex '>
          <h3 className='text-[#141414] font-[16px] font-medium'>
            Categories
          </h3>
          <img src={chevronDown} alt="" className='w-[17px] h-[17px] mt-[5px] ' />
        </div>

        <div className='gap-[7px] flex '>
          <img src={user} alt="" className='w-[20px] h-[20px] mt-[3px] ' />
          <h3 className='text-[#141414] font-[16px] font-medium'>
            Sign in
          </h3>
        </div>

        <img src={heart} alt="" className='w-[20px] h-[20px]' />

        <div onClick={goToBasketPage} className='w-[23px] h-[24px] relative'>
          <span className='flex items-center justify-center rounded-full text-white text-[8px] bg-black w-[13px] h-[13px] absolute bottom-3 right-0 p-1'>{state.addCart}</span>
          <img src={cart} alt="" className='w-10' />
        </div>
      </div >
      {/* end large */}

    </>
  )
}

export default BasketInfo