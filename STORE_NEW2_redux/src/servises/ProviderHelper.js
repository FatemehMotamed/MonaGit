const addKeysAfterGet = (list) => {
    return list.map(item => (
        { ...item, paginate: 0, showNum: false, totalPrice: 0 }))
}

const mapFunction = (list, product) => {
    return list.map(pro => pro.id === product.id ? { ...pro, showNum: true } : pro)
}

const updateList = (list, product) => {
    return list.map(item => {
        if (item.id !== product.id) return item
        const newPaginate = (product?.paginate ?? 0) + 1
        const safePrice = Math.round(product.price * 100)
        return {
            ...product,
            paginate: newPaginate,
            totalPrice: newPaginate * safePrice / 100,
        }
    }
    )
}

const totalSum = (list) => {
    return list.reduce((sum, item) =>
        sum + Math.round(item?.totalPrice * 100 ?? 0), 0) / 100
}

const decreaseCounter = (list, product) => {
    return list.map(item => {
        if (item.id !== product.id) return item
        const newPaginate = Math.max(0, (item?.paginate ?? 0) - 1)
        const safePrice = Math.round(item.price * 100)

        return {
            ...item,
            paginate: newPaginate,
            totalPrice: newPaginate * safePrice / 100,
        }
    }
    )
}

const upDateAfterRemove = (list, product) => {
    return (list?? []).map(item =>
        item.id === product.id ? { ...item, paginate: 0, showNum: false, totalPrice: 0 } : item
    )
}

export { mapFunction, updateList, totalSum, decreaseCounter, upDateAfterRemove, addKeysAfterGet }