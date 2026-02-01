import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categorySwiperSlider } from '../../servises/SliderHelper'

function CategoryList({ setCategoryName, input }) {

    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const categoryList = ["All", ...new Set(state.data.map(product => product.category))]

    return (


        <section className='text-[#292929] font-bold mb-5'>
            <header className='font-bold mb-8'>categories</header>
            {
                categorySwiperSlider(categoryList, setCategoryName, input, state, dispatch)
            }
        </section>

    )
}
export default CategoryList