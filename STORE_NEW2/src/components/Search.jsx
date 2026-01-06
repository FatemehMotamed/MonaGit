import React, { useContext } from 'react'
import { changeHandler } from '../servises/HomePageHelper'
import { ProductContext } from '../contexts/ProductContext'


function Search({ input, setInput, categoryName }) {

    const { state, dispatch } = useContext(ProductContext)

    return (
        <>
            <input value={input} type="text" onChange={(event) =>
                changeHandler(event, state, dispatch, setInput, categoryName)} className='border border-gray-400 p-1 text-gray-600' placeholder='product name'/>
        </>
    )
}

export default Search