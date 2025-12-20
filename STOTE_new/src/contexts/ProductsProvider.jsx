import React, { createContext, useEffect, useReducer } from 'react'
import api from '../servises/Config'

export const ProductContext = createContext()

const initialState = {
    data: [],
    error: false,
    isloading: true,
    resultSearch: [],
    buyList: [],
    addCart: 0,
    finalSum: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "true":
            return { ...state, data: state.data.map(pro => pro.id === action.payload.id ? { ...pro, showNum: true } : pro) }

        case 'addCard': {
            const newData = state.data.map(pro => {
                if (pro.id !== action.payload.id) return pro
                const newPaginate = (pro?.paginate ?? 0) + 1
                return {
                    ...pro,
                    paginate: newPaginate,
                    totalPrice: newPaginate * pro.price,
                }
            })
            const finalSum =
                newData.reduce((sum, item) => sum + (item.totalPrice), 0)
            return { ...state, addCart: state.addCart + 1, data: newData, finalSum }
        }

        case 'minesCard': {
            const newData = state.data.map(pro => {
                if (pro.id !== action.payload.id) return pro
                const newPaginate = (pro?.paginate ?? 0) - 1
                return {
                    ...pro,
                    paginate: newPaginate,
                    totalPrice: newPaginate * pro.price,
                }
            })
            const finalSum =
                newData.reduce((sum, item) => sum + (item.totalPrice), 0)
            return { ...state, addCart: Math.max(0, state.addCart - 1), data: newData, finalSum }
        }

        case "buyAdd":
            return { ...state, buyList: [...state.buyList, action.payload] }

        case 'buyRemove': {
            const { removeProduct, totalNumber, product } = action.payload
            const newData = state.data.map(item => item.id === product.id ?
                { ...item, paginate: 0, showNum: false, totalPrice: 0 } : item)
            const finalSum  = newData.reduce((sum, item) => sum + (item.totalPrice ?? 0), 0)
            return {
                ...state, buyList: removeProduct, addCart: totalNumber,
                data: newData, finalSum :finalSum ,
            }
        }

        case 'search':
            return { ...state, error: false, resultSearch: action.payload }

        case 'loading':
            return { ...state, error: false, isloading: true }

        case 'success':
            return { ...state, isloading: false, error: false, data: action.payload }

        case 'failed':
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
                if (!res) throw new Error(`request failed ${res.status}`)
                const products = res.data.map(item => ({ ...item, paginate: 0, showNum: false, totalPrice: 0 }))
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