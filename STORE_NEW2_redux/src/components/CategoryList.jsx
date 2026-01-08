import React, { useContext } from 'react'
import { clickCategory } from '../servises/HomePageHelper'
import { ProductContext } from '../contexts/ProductContext'
import { useDispatch, useSelector } from 'react-redux'

function CategoryList({ setCategoryName, input }) {
    // const { state, dispatch } = useContext(ProductContext)

    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const categoryList = ["All", ...new Set(state.data.map(product => product.category))]

    return (

        <aside className='text-[#292929] font-bold'>
            <header className='font-bold'>categories</header>
            {categoryList.map(item => <h3 key={item} className='cursor-pointer' onClick={() => clickCategory(item, setCategoryName, input, state, dispatch)}>{item}</h3>)}
        </aside>

    )
}
export default CategoryList