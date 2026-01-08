const zeroBoxCounter = (product, state, dispatch) => {

    if (state.addCart >= product.paginate) {
        const totalNumber = state.addCart - product.paginate
        const removeProduct = state.buyList.filter(item => item.id !== product.id)
        return dispatch({ type: 'remove_from_basket', payload: { removeProduct, totalNumber, product} })
    }
}

const showCounter = (product, state, dispatch) => {
    dispatch({ type: 'show_counter', payload: product })
}

const decrease = (product, state, dispatch) => {
    if (product.paginate > 0) {
        dispatch({ type: 'decrease_counter', payload: product })
    }
}

const increase = (product, state, dispatch) => {
    dispatch({ type: 'add_counter', payload: product })

    if (!state.buyList.some(i => i.id === product.id)) {
        dispatch({ type: 'add_item_to_basket', payload: product })
    }
}

export { zeroBoxCounter, showCounter, decrease, increase }