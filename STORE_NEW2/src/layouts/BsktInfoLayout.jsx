import React from 'react'
import BasketInfo from '../components/BasketInfo'

function BsktInfoLayout({ children }) {
    return (
        <>
            <BasketInfo />
            {children}
        </>
    )
}

export default BsktInfoLayout