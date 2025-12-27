import React, { useContext, useState } from 'react'
import ProductList from '../components/ProductList'
import Box from '../components/Box'
import Search from '../components/Search'
import { ProductContext } from '../contexts/ProductContext'
import CategoryList from '../components/CategoryList'
import BsktInfoLayout from '../layouts/BsktInfoLayout'

function HomePage() {

    const { state } = useContext(ProductContext)
    const [input, setInput] = useState('')
    const [categoryName, setCategoryName] = useState('All')

    return (

        <BsktInfoLayout>

            <CategoryList input={input} setCategoryName={setCategoryName} />


            {/* error messages */}
            {state.forSearch && <p className='text-2xl text-red-600'>your search text not found</p>}

            {state.isloading && !state.error && <p>isloading...</p>}

            {state.error && <p>***getting data is failed***</p>}
            {/* error messages */}


            <Search setInput={setInput} input={input} categoryName={categoryName} />


            {/* result search or show main list */}
            <section className='flex flex-wrap gap-3'>
                {
                    state.resultSearch.length > 0 ? state.resultSearch.map(product => <Box key={product.id} product={product} />) : <ProductList />
                }
            </section>
            {/*end result search or show main list */}

        </ BsktInfoLayout>

    )
}

export default HomePage