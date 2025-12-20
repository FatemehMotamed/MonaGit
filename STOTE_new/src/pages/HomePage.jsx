import React, { useContext, useState } from 'react'
import ProductsProvider, { ProductContext } from '../contexts/ProductsProvider'
import Boxes from '../components/Boxes'
import { replace, useNavigate } from 'react-router-dom'
import card from '../assets/card.svg'
import Card from '../components/Card'
import SearchCategory from './SearchCategory'
import Search from '../components/Search'
import filterData from '../servises/Helper'
function HomePage() {
    const { state, dispatch } = useContext(ProductContext)
    const [catName, setCatName] = useState([])
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const changeHandler = (event) => {
        const myInput = event.target.value
        setInput(myInput)
        const data = filterData(state.data, null, myInput)
        dispatch({ type: 'search', payload: data })
    }


    const usercard = () => {
        navigate('/AllCards', { replace: true })
    }

    const categoryList = ["All", ...new Set(state.data.map(product => product.category))]

    const clickCategotry = (name) => {
        if (name == 'All') {
            dispatch({ type: "search" })
        }
        const data = filterData(state.data, name, input)
        dispatch({ type: "search", payload: data })
    }

    return (
        <>
            {/* category */}
            <aside>
                <header className='text-red-900 font-bold'>categories</header>
                {categoryList.map(item => <h3 key={item} className='cursor-pointer' onClick={() => clickCategotry(item)}>{item}</h3>)}
            </aside>
            {/* end category */}

            <div>
                {state.isloading && !state.error && <p>isloading...</p>}
                {state.error && <p>{state.error}</p>}

                {/* go to cart */}
                <span className='text-blue-600 font-bold'>totalPrice:</span>
                <span>{state.finalSum}</span>
                <button onClick={usercard} className=''>
                    <span className='font-bold'>totalNumber:</span>
                    <span>{state.addCart}</span>
                    <img src={card} alt="" className='bg-gray-700 w-10' />
                </button>
                {/* end go to cart */}

                <Search changeHandler={changeHandler} input={input} />

                {/* result search or show all items */}
                <section className='flex flex-wrap gap-3'>
                    {
                        state.resultSearch.length > 0 ? state.resultSearch.map(product => <Card key={product.id} product={product} />) : <Boxes />
                    }
                </section>
                {/*end result search or show all items */}

            </div>
        </>
    )
}

export default HomePage