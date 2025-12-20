const filterData = (products, category, searchTxt) => {
    let data
    if (category == null && searchTxt !== null) {
        data = products.filter(item => item.title.trim().toLowerCase().includes(searchTxt.trim().toLowerCase()))
    } else if (category !== null && searchTxt == null) {
        data = products.filter(item => item.category.toLowerCase() === category.toLowerCase())
    } else if (category == null && searchTxt == null) {
        data = products
    } else {
        data = products.filter(item => item.title.trim().toLowerCase().includes(searchTxt.trim().toLowerCase()) &&
            item.category.toLowerCase() === category.trim().toLowerCase())
    }
    return data
}


export default filterData