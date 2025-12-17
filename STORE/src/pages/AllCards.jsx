import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AllCards({ product }) {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/', { replace: true })
    }
    return (
        <>
            <button onClick={goHome}>HOME</button>

            {
                product && <p>{product.name}</p>
            }
        </>
    )
}

export default AllCards