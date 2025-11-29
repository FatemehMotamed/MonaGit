const BASE_URL = 'https://api.coingecko.com/api/v3' 
const API_KEY = 'CG-DrPBXmTh64buLnFWAvbVnw3a'

const getChartUrl = (id, coinType = "usd")=> {
 return `${BASE_URL}/coins/${id}/market_chart?vs_currency=${coinType}&days=1&x_cg_demo_api_key=${API_KEY}`
}

const createCoinURL = (page) => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}&per_page=10&page=${page}`
}


export {createCoinURL , getChartUrl}