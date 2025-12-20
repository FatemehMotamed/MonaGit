import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'
import trash from "../assets/trash.svg"


function PgInateforBskt({ product }) {
    const { state, dispatch } = useContext(ProductContext)
    const userPro = state.data.find(item => item.id === product.id)

    const decrease = (product) => {
        const userProduct = state.data.find(item => item.id === product.id)
        if ( userProduct.paginate > 0) {
            dispatch({ type: 'minesCard', payload: userProduct })
        }
    }

    const increase = (product) => {
        const userProduct = state.data.find(item => item.id === product.id)

        dispatch({ type: 'addCard', payload: userProduct })
    }

    const zero = (product) => {

        if (state.addCart >= userPro.paginate) {
            const totalNumber = state.addCart - userPro.paginate
            const removeProduct = state.buyList.filter(item => item.id !== product.id)
            dispatch({ type: 'buyRemove', payload: { removeProduct: removeProduct, totalNumber: totalNumber, product: product } })
        }

    }

    return (
        <>
            <footer className='flex gap-3'>
                <span onClick={() => decrease(product)} className='border border-red-400 w-8 h-8 rounded-l-lg flex justify-center cursor-pointer '>-</span>
                <span>{userPro?.paginate ?? 0}</span>
                <span onClick={() => increase(product)} className='border border-red-400 w-8 h-8 rounded-r-lg flex justify-center cursor-pointer '>+</span>
                <button onClick={() => zero(product)}>
                    <img src={trash} alt="" className='w-5' />
                </button>
            </footer>
        </>
    )
}

export default PgInateforBskt