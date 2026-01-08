import React, { useContext } from 'react'
import { changeHandler } from '../servises/HomePageHelper'
import { ProductContext } from '../contexts/ProductContext'
import { useDispatch, useSelector } from 'react-redux'


function Search({ input, setInput, categoryName }) {

    // const { state, dispatch } = useContext(ProductContext)

    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <>
            <input value={input} type="text" onChange={(event) =>
                changeHandler(event, state, dispatch, setInput, categoryName)} className='border border-gray-400 p-1 text-gray-600' placeholder='product name' />
        </>
    )
}

export default Search