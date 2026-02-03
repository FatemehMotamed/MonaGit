import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addKeysAfterGet, decreaseCounter, mapFunction, totalSum, upDateAfterRemove, updateList } from "../../servises/ProviderHelper"

const initialState = {
    data: [],
    error: false,
    isLoading: true,
    resultSearch: [],
    buyList: [],
    addCart: 0,
    finalSum: 0,
    findUserSearch: false,
}

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.log('**************', data);
        const myproduct = addKeysAfterGet(data)
        return myproduct

    } catch (error) {
        throw error.message
    }
})

const productSlice = createSlice({

    name: "products",
    initialState,

    reducers: {
        show_counter: (state, action) => {
            state.data = mapFunction(state.data, action.payload)
            state.resultSearch = mapFunction(state.resultSearch, action.payload)
        },

        add_counter: (state, action) => {
            const newData = updateList(state.data, action.payload)
            const newResultSearch = updateList(state.resultSearch, action.payload)
            const finalSum = totalSum(newData)
            state.addCart++
            state.data = newData
            state.finalSum = finalSum
            state.resultSearch = newResultSearch
        },

        decrease_counter: (state, action) => {
            const newData = decreaseCounter(state.data, action.payload)
            const newResultSearch = decreaseCounter(state.resultSearch, action.payload)
            const finalSum = totalSum(newData)
            state.addCart = Math.max(0, state.addCart - 1)
            state.data = newData
            state.resultSearch = newResultSearch
            state.finalSum = finalSum
        },
        add_item_to_basket: (state, action) => {
            state.buyList = [...state.buyList, action.payload]
        },
        remove_from_basket: (state, action) => {
            const { removeProduct, totalNumber, product } = action.payload
            const newData = upDateAfterRemove(state.data, product)
            const newResultSearch = upDateAfterRemove(state.resultSearch, product)
            const finalSum = totalSum(newData)
            state.buyList = removeProduct
            state.addCart = totalNumber
            state.data = newData
            state.resultSearch = newResultSearch
            state.finalSum = finalSum
        },
        search_not_found: (state) => {
            state.findUserSearch = true
            state.error = false
            state.resultSearch = []
        },
        search_found: (state, action) => {
            state.error = false
            state.findUserSearch = false
            state.resultSearch = action.payload ?? []
        },


        // case 'loading':
        //     return { ...state, error: false, isloading: true }

        // case 'get_success':
        //     return { ...state, isloading: false, error: false, data: action.payload ?? [] }

        // case 'get_failed':
        //     return { ...state, isloading: false, error: true }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
            state.error = false
        }),
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload ?? []
                state.error = false
            }),
            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.data = []
                state.error = action.error.message ?? true
            })
    }
})

export default productSlice.reducer
export const { search_found, search_not_found, remove_from_basket, add_item_to_basket, decrease_counter, add_counter, show_counter } = productSlice.actions
export { fetchProducts }