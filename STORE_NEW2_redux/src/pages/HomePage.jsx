import React, { useContext, useEffect, useState } from 'react'
import Search from '../components/Search'
import { ProductContext } from '../contexts/ProductContext'
import CategoryList from '../components/CategoryList'
import HeaderLayout from '../layouts/HeaderLayout'
import { boxSwiperSlider } from '../servises/SliderHelper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../components/features/products/ProductsSlice'

function HomePage() {

    const state = useSelector((state) => state.products)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchProducts())

    }, [dispatch])

    const [input, setInput] = useState('')
    const [categoryName, setCategoryName] = useState('All')

    const userList = state.resultSearch.length > 0 ? state.resultSearch : state.data

    return (

        <div className='w-[335px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto py-[15px]'>
            <HeaderLayout>

                <CategoryList input={input} setCategoryName={setCategoryName} />


                {/* error messages */}
                {state.forSearch && <p className='text-2xl text-red-600'>your search text not found</p>}

                { state.isloading && !state.error && <p className='text-[#292929] font-bold'>isloading...</p>}

                {state.error && <p className='text-[#292929] font-bold'>***getting data is failed***</p>}
                {/*end error messages */}


                <Search setInput={setInput} input={input} categoryName={categoryName} />


                {/* result search or show main list */}
                <section className='w-full min-w-0'>
                    {
                        boxSwiperSlider(userList)
                    }
                </section>
                {/*end result search or show main list */}

            </ HeaderLayout>
        </div>

    )
}

export default HomePage