import React, { useContext } from 'react'
import { changeHandler } from '../../servises/HomePageHelper'
import { useDispatch, useSelector } from 'react-redux'
import { InputRefContext } from '../../contexts/InputRefContext'


function Search({ input, setInput, categoryName }) {

    const { inputRef, headerInput, setheaderInput } = useContext(InputRefContext)
    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <>
            <input value={input} type="text" ref={inputRef} onBlur={() => setheaderInput(false)} onChange={(event) =>
                changeHandler(event, state, dispatch, setInput, categoryName)} className={`p-3 p-1 text-gray-600 border ${headerInput ? 'bg-red-50' : 'border-gray-400'}`} placeholder='product name' />
        </>
    )
}

export default Search