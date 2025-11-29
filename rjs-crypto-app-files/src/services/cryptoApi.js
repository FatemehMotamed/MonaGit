const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-DrPBXmTh64buLnFWAvbVnw3a"
const getCoinsUrl = (page, coinType)=>{
    return `${BASE_URL}/coins/markets?vs_currency=${coinType}&&x_cg_demo_api_key=${API_KEY}&per_page=10&page=${page}`
}
const getSearchUrl = (text) =>{
    return `${BASE_URL}/search?query=${text}&x_cg_demo_api_key=${API_KEY}`
}

const getChartUrl = (id, coinType)=> {
 return `${BASE_URL}/coins/${id}/market_chart?vs_currency=${coinType}&days=1&x_cg_demo_api_key=${API_KEY}`
}

export {getCoinsUrl, getSearchUrl, getChartUrl}