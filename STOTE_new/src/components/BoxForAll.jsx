import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductsProvider'
import ProductDiscription from './ProductDiscription'

function BoxForAll() {
    const { state, dispatch } = useContext(ProductContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/', { replace: true })
    }
    const selectProduct = state.data.find(item => item.id === Number(id))
    return (
        <>
            <button onClick={goHome}>home</button>

            {
                selectProduct ? <ProductDiscription product={selectProduct} /> : <p>product not found</p>
            }
        </>
    )
}

export default BoxForAll