//Search and category list together.

const filterData = (products = [], category, searchTxt) => {

    let data

    const cat = (category ?? '').trim().toLowerCase()
    const txt = (searchTxt ?? '').trim().toLowerCase()

    const hasCat = cat.length > 0 && cat !== 'all'
    const hasTxt = txt.length > 0

    if (!hasCat && hasTxt) {
        data = products.filter(item => item.title.trim().toLowerCase().includes(txt))
    }
    else if (hasCat && !hasTxt) {
        data = products.filter(item => item.category.trim().toLowerCase() === cat)
    }

    else if (hasCat && hasTxt) {
        data = products.filter(item => item.category.trim().toLowerCase() === cat &&
            item.title.trim().toLowerCase().includes(txt))
    }

    else if (!hasCat && !hasTxt) {

        return products
    }

    return data
}

const changeHandler = (event, state, dispatch, setInput, categoryName) => {
    const myInput = event.target.value
    setInput(myInput)

    const data = filterData(state.data, categoryName, myInput)
    if (data.length > 0) {
        dispatch({ type: 'search_found', payload: data })
    }

    else {
        dispatch({ type: 'search_not_found' })
    }
}

const clickCategory = (name, setCategoryName, input, state, dispatch) => {

    setCategoryName(name)

    if (name == 'All') {
        dispatch({ type: "search_found", payload: state.data })
    }

    const filteredData = filterData(state.data, name, input)

    if (filteredData.length > 0) {
        dispatch({ type: "search_found", payload: filteredData })
    } else {
        dispatch({ type: 'search_not_found' })
    }
}


export { clickCategory, filterData, changeHandler } 
