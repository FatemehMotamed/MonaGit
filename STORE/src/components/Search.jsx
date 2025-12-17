import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'

function Search() {
    const { state, dispatch } = useContext(ProductContext)
    const [input, setInput] = useState('')

    const changeHandler = (event) => {
        setInput(event.target.value)
        const resultSearch = state.data.filter(product => product.title.trim().toLowerCase().includes(input.trim().toLowerCase()))
        dispatch({ type: 'search', payload: resultSearch })
        console.log(resultSearch);
        
    }

    return (
        <>

            <input type="text" onChange={changeHandler} className='border border-gray-400' />
            <button>search</button>
        </>
    )
}

export default Search