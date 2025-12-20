import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'

function Search({input , changeHandler}) {
    const { state, dispatch } = useContext(ProductContext)
    
    return (
        <>
            <input value={input} type="text" onChange={changeHandler} className='border border-gray-400' />
            <button>search</button>
        </>
    )
}

export default Search