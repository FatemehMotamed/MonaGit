import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsProvider'
import trash from "../assets/trash.svg"
import CardLayout from '../layouts/CardLayout'

function PageInation({increase, decrease, product }) {

    const { state, dispatch } = useContext(ProductContext)
    const userPro = state.data.find(item => item.id === product.id)

    const zero = (product) => {

        if (state.addCart >= userPro.paginate) {
            const totalNumber = state.addCart - userPro.paginate
            const removeProduct = state.buyList.filter(item => item.id !== product.id)
            dispatch({ type: 'buyRemove', payload: { removeProduct: removeProduct, totalNumber: totalNumber, product: product } })
        }
    }


    return (
        <>
            <button onClick={() => decrease(product)}>-</button>
            <span className='text-green-600 font-bold'>{userPro.paginate}</span>
            <button onClick={() => increase(product)}>+</button>
            <button onClick={() => zero(product)}>
                <img src={trash} alt="" className='w-5' />
            </button>
        </>
    )
}


export default PageInation