import React, { useEffect, useMemo, useState } from 'react'
import Search from '../modules/Search'
import CategoryList from '../modules/CategoryList'
import HeaderLayout from '../layouts/HeaderLayout'
import { boxSwiperSlider } from '../../servises/SliderHelper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/ProductsSlice'

function HomePage() {

    const state = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!state.data || state.data.length === 0) {

            dispatch(fetchProducts())
        }

    }, [dispatch, state.data])

    const [input, setInput] = useState('')
    const [categoryName, setCategoryName] = useState('All')

    const userList = state.resultSearch.length > 0 ? state.resultSearch : state.data

    return (

        <div className='w-[335px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto py-[15px]'>
            <HeaderLayout>

                <CategoryList input={input} setCategoryName={setCategoryName} />


                {/* error messages */}
                {state.findUserSearch && <p className='text-2xl text-red-600'>your search text not found</p>}

                {state.isLoading && !state.error && <p className='text-[#292929] font-bold'>isLoading...</p>}

                {state.error && <p className='text-[#292929] font-bold'>***getting data is failed***</p>}
                {/*end error messages */}


                <Search setInput={setInput} input={input} categoryName={categoryName} />


                {/* result search or show main list */}
                <section className='w-full min-w-0'>
                    {
                        boxSwiperSlider(userList)
                    }

                    {/* {
                        useMemo(() => {
                           return boxSwiperSlider(userList)
                        }, [userList,state.data])
                    } */}
                </section>
                {/*end result search or show main list */}

            </ HeaderLayout>
        </div>

    )
}

export default HomePage