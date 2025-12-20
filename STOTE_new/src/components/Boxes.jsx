import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'

import PageInation from './PageInation'
import Card from './Card'


function Boxes() {
    const { state } = useContext(ProductContext)
    return (
        <>
            {
                state.data.map(product =>
                    <Card key={product.id} product={product} />)
            }

        </>
    )
}

export default Boxes