import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDiscription from './ProductDiscription'
import { ProductContext } from '../contexts/ProductContext'


function PageDiscription() {
    const { state } = useContext(ProductContext)
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

export default PageDiscription