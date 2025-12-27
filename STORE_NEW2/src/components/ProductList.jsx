import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Box from './Box'


function ProductList() {

    const { state } = useContext(ProductContext)

    return (
        <>
            {
                state.data.map(product =>
                    <Box key={product.id} product={product} />)
            }

        </>
    )
}

export default ProductList