import React, { useContext, useReducer, useState } from 'react'
import ProductsProvider, { ProductContext } from '../contexts/ProductsProvider'
import Boxes from '../components/Boxes'
import { replace, useNavigate } from 'react-router-dom'
import card from '../assets/card.svg'
import Card from '../components/Card'
import SearchCategory from './SearchCategory'
import Search from '../components/Search'

function HomePage() {
    const { state, dispatch } = useContext(ProductContext)
    // const [input, setInput] = useState('')
    const [catName, setCatName] = useState([])
    const navigate = useNavigate()

    // const changeHandler = (event) => {
    //     setInput(event.target.value)
    // }

    const usercard = () => {
        navigate('/AllCards', { replace: true })
    }

    // const resultSearch = state.data.filter(product => product.title.trim().toLowerCase().includes(input.trim().toLowerCase()))
    const categoryList = ["All", ...new Set(state.data.map(product => product.category))]

    const clickCategotry = (name) => {
        setCatName(state.data.filter(product => product.category == name))
    }

    return (
        <>
            <aside>
                <header className='text-red-900 font-bold'>categories</header>
                {categoryList.map(item => <h3 className='cursor-pointer' onClick={() => clickCategotry(item)}>{item}</h3>)}
                <section className='flex flex-wrap gap-4'>
                    {catName.length > 0 && catName.map(product => <Card key={product.id} product={product} />)}
                </section>

            </aside>

            <div>
                {state.isloading && !state.error && <p>isloading...</p>}
                {state.error && <p>{state.error}</p>}
                <button onClick={usercard} className=''><img src={card} alt="" className='bg-gray-700 w-10' /></button>
                <Search />
                {/* <input type="text" onChange={changeHandler} className='border border-gray-400' />
                <button>search</button> */}
                <section className='flex flex-wrap gap-3'>
                    {
                        state.resultSearch && state.resultSearch.length > 0 ?
                            state.resultSearch.map(product => <Card key={product.id} product={product} />) : <Boxes />

                    }
                </section>
            </div>
        </>
    )
}

export default HomePage