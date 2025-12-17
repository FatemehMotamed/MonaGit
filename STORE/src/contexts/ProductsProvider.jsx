import React, { createContext, useEffect, useReducer } from 'react'
import api from '../servises/Config'

export const ProductContext = createContext()
const initialState = {
    data: [],
    error: false,
    isloading: true,
    resultSearch: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'search':
            return { ...state, error: false, resultSearch: action.paload }

        case 'loading':
            return { ...state, error: false, isloading: true }
        case 'success':
            return { ...state, isloading: false, error: false, data: action.payload }
        case 'failed':
            return { ...state, isloading: false, error: true }
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
                if (!res) throw new Error(`request failed ${res.status}`)
                const products = res.data
                dispatch({ type: 'success', payload: products })
                console.log('###########', res)
            } catch (error) {
                if (error.name !== 'AbbortError' && !controller.signal.aborted) {
                    console.log(error.message)
                    dispatch({ type: "failed", payload: error.message })
                }
            }
        }
        getData()
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