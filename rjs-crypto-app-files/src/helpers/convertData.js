const convertData = (type, data)=>{
   const convertedData = data[type].map(([date, content ])=> ({
    date,
    [type]: content
    }))
    return convertedData

}

export {convertData}


// console.log(data)
// for (let x=0; x<data.prices.length; x++){
//   newData.push({date: data.prices[x][0], price: data.prices[x][1], market_cap: data.market_caps[x][1], total_volume: data.total_volumes[x][1] })
// }
// const newData = data.prices.map(([timestamp, price], index) => ({
// date: timestamp,
// price,
// market_cap: data.market_caps[index][1],
// total_volume: data.total_volumes[index][1]
// }));