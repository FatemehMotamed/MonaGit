import React, { useEffect, useReducer } from 'react'
import api from '../servises/Config'
import { mapFunction, updateList, totalSum, decreaseCounter, upDateAfterRemove, addKeysAfterGet } from '../servises/ProviderHelper'
import { ProductContext } from './ProductContext'

const initialState = {
    data: [],
    error: false,
    isloading: true,
    resultSearch: [],
    buyList: [],
    addCart: 0,
    finalSum: 0,
    forSearch: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "show_counter":
            return {
                ...state, data: mapFunction(state.data, action.payload),
                resultSearch: mapFunction(state.resultSearch, action.payload)
            }

        case 'add_counter': {
            const newData = updateList(state.data, action.payload)
            const newResultSearch = updateList(state.resultSearch, action.payload)
            const finalSum = totalSum(newData)
            return { ...state, addCart: state.addCart + 1, data: newData, finalSum, resultSearch: newResultSearch }
        }

        case 'decrease_counter': {
            const newData = decreaseCounter(state.data, action.payload)
            const newResultSearch = decreaseCounter(state.resultSearch, action.payload)
            const finalSum = totalSum(newData)
            return { ...state, addCart: Math.max(0, state.addCart - 1), data: newData, resultSearch: newResultSearch, finalSum }
        }

        case "add_item_to_basket":
            return { ...state, buyList: [...state.buyList, action.payload] }


        case 'remove_from_basket': {
            const { removeProduct, totalNumber, product } = action.payload
            const newData = upDateAfterRemove(state.data, product)
            const newResultSearch = upDateAfterRemove(state.resultSearch, product)
            const finalSum = totalSum(newData)
            return {
                ...state, buyList: removeProduct, addCart: totalNumber,
                data: newData, resultSearch: newResultSearch, finalSum,
            }
        }

        case 'search_not_found':
            return { ...state, forSearch: true, error: false, resultSearch: [] }

        case 'search_found':
            return { ...state, error: false, forSearch: false, resultSearch: action.payload ?? [] }

        case 'loading':
            return { ...state, error: false, isloading: true }

        case 'get_success':
            return { ...state, isloading: false, error: false, data: action.payload ?? [] }

        case 'get_failed':
            return { ...state, isloading: false, error: true }

        default:
            return state
    }
}

function ProductsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const controller = new AbortController()
        const getData = async () => {
            dispatch({ type: "loading" })

            try {
                const res = await api.get('/products', { signal: controller.signal })
                const products = addKeysAfterGet(res.data)
                dispatch({ type: 'get_success', payload: products })

            } catch (error) {
                if (controller.signal.aborted) return
                dispatch({ type: "get_failed", payload: error.message })
            }
        }

        getData()

        return () => controller.abort();

    }, [])

    return (
        <>
            <ProductContext.Provider value={{ state, dispatch }}>
                {children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductsProvider