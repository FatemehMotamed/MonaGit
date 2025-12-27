import React, { useContext } from 'react'
import trash from "../assets/images/trash.svg"
import { ProductContext } from '../contexts/ProductContext'
import { decrease, increase, zeroBoxCounter } from '../servises/PaginationsHelper'

function PgInateforBskt({ selectedProduct }) {

    const { state, dispatch } = useContext(ProductContext)

    return (

        <footer className='flex gap-3'>

            <span onClick={() => decrease(selectedProduct, state, dispatch)} className='border border-red-400 w-8 h-8 rounded-l-lg flex justify-center cursor-pointer '>-</span>
            <span>{selectedProduct?.paginate ?? 0}</span>

            <span onClick={() => increase(selectedProduct, state, dispatch)} className='border border-red-400 w-8 h-8 rounded-r-lg flex justify-center cursor-pointer '>+</span>

            <button onClick={() => zeroBoxCounter(selectedProduct, state, dispatch)}>
                <img src={trash} alt="" className='w-5' />
            </button>
        </footer>

    )
}

export default PgInateforBskt