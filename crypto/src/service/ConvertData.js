const convertData = (data , type) => {
    return data[type].map(([date, content]) => ({
        date,
        [type]:content,
    }))
}
export {convertData}