import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BoxInBasket from '../components/BoxInBasket'
import { ProductContext } from '../contexts/ProductContext'
import BsktInfoLayout from '../layouts/BsktInfoLayout'


function Basket() {

    const { state } = useContext(ProductContext)
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/', { replace: true })
    }

    return (
        <BsktInfoLayout>

            <button onClick={goHome}>HOME</button>
            <section className='flex gap-5'>
                {
                    state.buyList.length > 0 ? (state.buyList.map(buyListProduct => <BoxInBasket key={buyListProduct.id} buyListProduct={buyListProduct} />)) : <p>Your basket is empty</p>
                }
            </section>
        </ BsktInfoLayout>
    )
}

export default Basket