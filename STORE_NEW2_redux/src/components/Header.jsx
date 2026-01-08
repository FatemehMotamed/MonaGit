import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import cart from '../assets/images/cart.svg'
import { useNavigate } from 'react-router-dom'
import magnify from '../assets/images/magnify.svg'
import user from '../assets/images/user.svg'
import bars from '../assets/images/bars.svg'
import chevronDown from '../assets/images/chevronDown.svg'
import logo from '../assets/images/logo.jpg'
import styles from './Header.module.css'
import heart from '../assets/images/heart.svg'
import { useDispatch, useSelector } from 'react-redux'


function Header() {
  // const { state } = useContext(ProductContext)

  // const dispatch = useDispatch()
  const state = useSelector((state) => state.products)
  const navigate = useNavigate()


  const goToBasketPage = () => {
    navigate('/Basket', { replace: true })
  }

  return (
    <>

      {/* <span className='text-blue-600 font-bold'>totalPrice:</span>
        <span>{state.finalSum}</span> */}

      <header className={`${styles.headerBorder} flex items-center justify-between border-b border-black border-dashed py-[20px] mb-[30px]`}>

        <img src={logo} alt="" className='sm:w-[140px] h-[26px] md:w-[170px] h-[32.03px]' />

        <div className='flex items-center justify-end gap-[25px] '>
          <img src={magnify} alt="" className='w-[20px] h-[20px] cursor-pointer' />

          <div className='hidden md:flex gap-[7px] cursor-pointer'>
            <h3 className='text-[#141414] font-[16px] font-medium'>
              Categories
            </h3>
            <img src={chevronDown} alt="" className='w-[17px] h-[17px] mt-[5px] ' />
          </div>

          <div className='hidden md:flex gap-[7px] items-center cursor-pointer '>
            <img src={user} alt="" className='w-[20px] h-[20px] mt-[3px] ' />
            <h3 className='text-[#141414] font-[16px] font-medium'>
              Sign in
            </h3>
          </div>

          <img src={heart} alt="" className='hidden md:block w-[20px] h-[20px] cursor-pointer' />

          <div onClick={goToBasketPage} className='w-[23px] h-[24px] relative cursor-pointer'>
            <span className='flex items-center justify-center rounded-full text-white text-[8px] bg-[#141414] w-[13px] h-[13px] absolute bottom-3 right-0 p-1'>{state.addCart}</span>
            <img src={cart} alt="" className='w-10' />
          </div>

          <img src={bars} alt="" className='w-[20px] h-[20px] md:hidden cursor-pointer' />
        </div>

      </header>

    </>
  )
}

export default Header