import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import Header from '../components/Header'
import { ProductContext } from '../contexts/ProductContext'
import HeaderLayout from '../layouts/HeaderLayout'
// import '../GlobalStyles.css'
import BoxInBasket from '../components/BoxInBasket'

function Basket() {

    const { state } = useContext(ProductContext)
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/', { replace: true })
    }

    return (

        <HeaderLayout>
            <button onClick={goHome}>HOME</button>
            <section className='flex gap-5'>
                {
                    state.buyList.length > 0 ? (state.buyList.map(buyListProduct => <BoxInBasket key={buyListProduct.id} buyListProduct={buyListProduct} />)) : <p className=' text-[#292929] font-bold'>Your basket is empty</p>
                }
            </section>
        </ HeaderLayout>
    )
}

export default Basket