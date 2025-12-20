import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductsProvider'
import Card from '../components/Card'
import Basket from '../components/Basket'

function AllCards({ product }) {
    const { state, dispatch } = useContext(ProductContext)
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/', { replace: true })
    }
    return (
        <>
            <button onClick={goHome}>HOME</button>
            <p className='text-blue-700 font-bold'>total number:</p>
            <span>{state.addCart}</span>
            <p className='text-red-700 font-bold'>total price:</p>
            <span>{state.finalSum}</span>
            <section className='flex gap-5'>
                {
                    state.buyList.length > 0 ? (state.buyList.map(product => <Basket key={product.id} product={product} />)) : <p>Card is empty</p>
                }
            </section>
        </>
    )
}

export default AllCards