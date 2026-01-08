import { add_counter, add_item_to_basket, decrease_counter, remove_from_basket, show_counter } from "../components/features/products/ProductsSlice"

const zeroBoxCounter = (product, state, dispatch) => {

    if (state.addCart >= product.paginate) {
        const totalNumber = state.addCart - product.paginate
        const removeProduct = state.buyList.filter(item => item.id !== product.id)
        return dispatch(remove_from_basket(removeProduct, totalNumber, product))
    }
}

const showCounter = (product, state, dispatch) => {
    dispatch(show_counter(product))
}

const decrease = (product, state, dispatch) => {
    if (product.paginate > 0) {
        dispatch(decrease_counter(product))
    }
}

const increase = (product, state, dispatch) => {
    dispatch(add_counter(product))

    if (!state.buyList.some(i => i.id === product.id)) {
        dispatch(add_item_to_basket(product))
    }
}

export { zeroBoxCounter, showCounter, decrease, increase }