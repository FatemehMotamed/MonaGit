import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDiscription from '../pages/ProductDiscription'
import { useSelector } from 'react-redux'
import HeaderLayout from '../layouts/HeaderLayout'


function PageDiscription() {

    const state = useSelector((state) => state.products)
    const { id } = useParams()
    

    const selectProduct = state.data.find(item => item.id === Number(id))
    return (
        <>
            <HeaderLayout>

                {
                    selectProduct ? <ProductDiscription product={selectProduct} /> : <p>product not found</p>
                }
            </HeaderLayout>
        </>
    )
}

export default PageDiscription