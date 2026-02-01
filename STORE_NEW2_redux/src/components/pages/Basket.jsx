import React from 'react'
import HeaderLayout from '../layouts/HeaderLayout'
import BoxInBasket from '../../components/modules/BoxInBasket'
import { useSelector } from 'react-redux'

function Basket() {

    const state = useSelector((state) => state.products)

    return (
        <HeaderLayout>
            <section className='flex gap-5'>
                {
                    state.buyList.length > 0 ? (state.buyList.map(buyListProduct => <BoxInBasket key={buyListProduct.id} buyListProduct={buyListProduct} />)) : <p className=' text-[#292929] font-bold'>Your basket is empty</p>
                }
            </section>
        </ HeaderLayout>
    )
}

export default Basket